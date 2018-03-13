import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LizardComponent } from './lizard.component';

describe('LizardComponent', () => {
  let component: LizardComponent;
  let fixture: ComponentFixture<LizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
