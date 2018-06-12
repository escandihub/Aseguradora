import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasComponent } from './polizas.component';

describe('PolizasComponent', () => {
  let component: PolizasComponent;
  let fixture: ComponentFixture<PolizasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
