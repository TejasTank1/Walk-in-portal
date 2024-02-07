import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedroleComponent } from './appliedrole.component';

describe('AppliedroleComponent', () => {
  let component: AppliedroleComponent;
  let fixture: ComponentFixture<AppliedroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppliedroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppliedroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
