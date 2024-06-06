import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackExplorerComponent } from './track-explorer.component';

describe('TrackExplorerComponent', () => {
  let component: TrackExplorerComponent;
  let fixture: ComponentFixture<TrackExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackExplorerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrackExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
