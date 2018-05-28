import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HdicontigoComponent } from './hdicontigo.component';

describe('HdicontigoComponent', () => {
  let component: HdicontigoComponent;
  let fixture: ComponentFixture<HdicontigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HdicontigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HdicontigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
