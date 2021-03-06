import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {

  @Input() data: any;
  @Input() showAction: boolean = true;

  @Output() saveEmit = new EventEmitter<any>();

  public showModal: boolean = false;
  constructor() { }

  open() {
    this.showModal = true;
  }

  close() {
    this.showModal = false;
  }

  send(value: boolean): void {
    let dataReturn = { "option": value, "pokemon": this.data.pokemon };
    this.saveEmit.emit(dataReturn);
    this.close();
  }
}