import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceCalendarComponent } from './race-calendar.component';

describe('RaceCalendarComponent', () => {
  let component: RaceCalendarComponent;
  let fixture: ComponentFixture<RaceCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaceCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
