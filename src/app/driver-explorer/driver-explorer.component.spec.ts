import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverExplorerComponent } from './driver-explorer.component';

describe('DriverExplorerComponent', () => {
  let component: DriverExplorerComponent;
  let fixture: ComponentFixture<DriverExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverExplorerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DriverExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
