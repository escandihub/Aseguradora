import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarpolizaComponent } from './registrarpoliza.component';

describe('RegistrarpolizaComponent', () => {
  let component: RegistrarpolizaComponent;
  let fixture: ComponentFixture<RegistrarpolizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarpolizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarpolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
