import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Company } from '../common/company';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = 'http://localhost:8081/company';

  constructor(private httpClient: HttpClient) { }

  getCompanies(): Observable<Company[]> {
                  
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.company)
    );
            
  }

  // private getCompanies(searchUrl: string): Observable<Company[]> {
  //   return this.httpClient.get<GetResponse>(this.baseUrl).pipe(map(response => response._embedded.companies));
  // }

  addCompany(company :any){
    //return this.httpclient.post('${baseURL}/company/list',company);
    return this.httpClient.post(this.baseUrl,company)
  }

}



interface GetResponse {
  _embedded: {
    company: Company[];
  },
page: {
  size: number,
  totalElements: number,
  totalPages: number,
  number: number
}
}
