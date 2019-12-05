import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEmploymentComponent } from './self-employment.component';

describe('SelfEmploymentComponent', () => {
  let component: SelfEmploymentComponent;
  let fixture: ComponentFixture<SelfEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
