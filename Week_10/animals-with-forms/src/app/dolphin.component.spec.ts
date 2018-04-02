import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DolphinComponent } from './dolphin.component';

describe('DolphinComponent', () => {
  let component: DolphinComponent;
  let fixture: ComponentFixture<DolphinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DolphinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DolphinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
