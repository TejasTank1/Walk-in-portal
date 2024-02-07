import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDrivesComponent } from './all-drives.component';

describe('AllDrivesComponent', () => {
  let component: AllDrivesComponent;
  let fixture: ComponentFixture<AllDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllDrivesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
