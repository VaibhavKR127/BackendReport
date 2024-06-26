import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Service } from '../common/service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  private baseUrl = 'http://localhost:8081/serviceType';
  constructor(private httpClient:HttpClient) { }

  getServices(): Observable<Service[]> {
                  
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.serviceType)
    );
            
  }

  addService(serviceType :any){
    
    return this.httpClient.post(this.baseUrl,serviceType)
  }
}

interface GetResponse {
  _embedded: {
    serviceType: Service[];
  },
page: {
  size: number,
  totalElements: number,
  totalPages: number,
  number: number
}
}