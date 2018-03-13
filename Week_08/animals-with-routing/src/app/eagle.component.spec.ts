import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EagleComponent } from './eagle.component';

describe('EagleComponent', () => {
  let component: EagleComponent;
  let fixture: ComponentFixture<EagleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EagleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EagleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
