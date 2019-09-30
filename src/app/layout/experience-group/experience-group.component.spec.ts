import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceGroupComponent } from './experience-group.component';

describe('ExperienceGroupComponent', () => {
  let component: ExperienceGroupComponent;
  let fixture: ComponentFixture<ExperienceGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
