import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaComponent } from './poliza.component';

describe('PolizaComponent', () => {
  let component: PolizaComponent;
  let fixture: ComponentFixture<PolizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
