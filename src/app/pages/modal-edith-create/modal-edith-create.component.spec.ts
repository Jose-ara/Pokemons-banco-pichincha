import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEdithCreateComponent } from './modal-edith-create.component';

describe('ModalEdithCreateComponent', () => {
  let component: ModalEdithCreateComponent;
  let fixture: ComponentFixture<ModalEdithCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEdithCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEdithCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
