import { TestBed } from '@angular/core/testing';

import { ParkingSpot, ParkingSpotServiceService, ParkingStatus } from './parking-spot-service.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ParkingSpotServiceService', () => {
  let service: ParkingSpotServiceService;
  let httpMock:HttpTestingController

  const dummySlot:ParkingSpot={
    id:1,
    location:'chennai',
    status:ParkingStatus.UNKNOWN,
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ParkingSpotServiceService]
    });
    service = TestBed.inject(ParkingSpotServiceService);
    httpMock=TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test save ',()=>{
    service.addParkingSpot(dummySlot).subscribe((res)=>{
      expect(res).toEqual(dummySlot);
    })

    const req=httpMock.expectOne('http://localhost:3000/parking/parkingspot')
    expect(req.request.method).toBe('POST');
    req.flush(dummySlot);
  })

  it('test all',()=>{
    const parkings:ParkingSpot[]=[dummySlot]
    service.getAll().subscribe((res)=>{
      expect(res.length).toBe(1);
      expect(res).toEqual(parkings);
    })

    const req=httpMock.expectOne('http://localhost:3000/parking/parkingspot')
    expect(req.request.method).toBe('GET');
    req.flush(parkings);
  })

  
});
