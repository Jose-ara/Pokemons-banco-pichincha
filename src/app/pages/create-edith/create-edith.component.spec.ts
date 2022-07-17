import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEdithComponent } from './create-edith.component';

describe('CreateEdithComponent', () => {
  let component: CreateEdithComponent;
  let fixture: ComponentFixture<CreateEdithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEdithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEdithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
