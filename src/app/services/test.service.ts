import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Test } from '../common/test';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private baseUrl = 'http://localhost:8081/test';

  constructor(private httpClient: HttpClient) { }

  getTests(): Observable<Test[]> {
                  
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.test)
    );
            
  }

  

  addTest(test :any){
    return this.httpClient.post(this.baseUrl,test)
  }

}



interface GetResponse {
  _embedded: {
    test: Test[];
  },
page: {
  size: number,
  totalElements: number,
  totalPages: number,
  number: number
}

}
