import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HazceptionComponent } from './hazception.component';

describe('HazceptionComponent', () => {
  let component: HazceptionComponent;
  let fixture: ComponentFixture<HazceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HazceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HazceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
