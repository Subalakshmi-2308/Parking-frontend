import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleComponentComponent } from './vehicle-component.component';

describe('VehicleComponentComponent', () => {
  let component: VehicleComponentComponent;
  let fixture: ComponentFixture<VehicleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehicleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
