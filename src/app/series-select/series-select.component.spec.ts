import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesSelectComponent } from './series-select.component';

describe('SeriesSelectComponent', () => {
  let component: SeriesSelectComponent;
  let fixture: ComponentFixture<SeriesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeriesSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeriesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
