import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SelfEmploymentComponent } from './self-employment.component';

describe('SelfEmploymentComponent', () => {
  let component: SelfEmploymentComponent;
  let fixture: ComponentFixture<SelfEmploymentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [SelfEmploymentComponent]
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
