import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponentComponent } from './booking-component.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('BookingComponentComponent', () => {
  let component: BookingComponentComponent;
  let fixture: ComponentFixture<BookingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule,CommonModule,HttpClientModule, BookingComponentComponent],
      declarations:[]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test bind input ',()=>{
    const input = fixture.debugElement.query(By.css('input[name="id"]')).nativeElement;
    input.value=1;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.defaultBooking.id).toBe(Number(input.value));
  });

  it('test submit',()=>{
    spyOn(component,'addBooking');
    const form = fixture.debugElement.query(By.css('form'));
        form.triggerEventHandler('ngSubmit',null);
    expect(component.addBooking).toHaveBeenCalled();
  })
});
