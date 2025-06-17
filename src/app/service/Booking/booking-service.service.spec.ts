import { TestBed } from '@angular/core/testing';

import { Booking, BookingDTO, BookingServiceService } from './booking-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ParkingStatus } from '../ParkingSpot/parking-spot-service.service';

describe('BookingServiceService', () => {
  let service: BookingServiceService;
  let httpMock:HttpTestingController
  const dummyBooking: Booking={
    id:1,
    userId:1,
    parkingSpot:{ id:1, location:'chennai',status:ParkingStatus.UNKNOWN},
    timestamp: new Date("2025-3-1T12:00")
  }

  const dummyDTO: BookingDTO={
      id:1,
      user: {id:1,name:'suba',email:'suba@gmail.com'},
      parkingSpot: { id:1, location:'chennai',status:ParkingStatus.UNKNOWN},
      timestamp:new Date("2025-3-1T12:00")
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(BookingServiceService);
    httpMock=TestBed.inject(HttpTestingController);    
  });

  afterEach(()=>{
    httpMock.verify()
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test add booking ',()=>{
    service.addBooking(dummyBooking).subscribe((res)=>{
      expect(res).toBeTruthy(dummyBooking);
    })

    const req = httpMock.expectOne('http://localhost:3000/parking/booking');
    expect(req.request.method).toBe('POST');
    req.flush(dummyBooking);
  });

  it('test get all booking',()=>{
    const bookings:Booking[]=[dummyBooking];

    service.getAll().subscribe((res)=>{
      expect(res.length).toBe(1);
      expect(res).toEqual(bookings);
    })

    const req=httpMock.expectOne('http://localhost:3000/parking/booking');
    expect(req.request.method).toBe('GET');
    req.flush(bookings);
  });

  it('test full details',()=>{
   
    const bookingId=1

    service.getBookingDetails(bookingId).subscribe((res)=>{
      expect(res).toEqual(dummyDTO);
    })

    const req=httpMock.expectOne(`http://localhost:3000/parking/booking/details/${bookingId}`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyDTO);
  })
});
