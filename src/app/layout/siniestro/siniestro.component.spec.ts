import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroComponent } from './siniestro.component';

describe('SiniestroComponent', () => {
  let component: SiniestroComponent;
  let fixture: ComponentFixture<SiniestroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
