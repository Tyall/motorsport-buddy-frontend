import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsExplorerComponent } from './statistics-explorer.component';

describe('StatisticsExplorerComponent', () => {
  let component: StatisticsExplorerComponent;
  let fixture: ComponentFixture<StatisticsExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatisticsExplorerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatisticsExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
