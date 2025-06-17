import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingSoptComponent } from './parking-sopt.component';

describe('ParkingSoptComponent', () => {
  let component: ParkingSoptComponent;
  let fixture: ComponentFixture<ParkingSoptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkingSoptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParkingSoptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
