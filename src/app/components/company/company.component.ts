import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/commom/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {

  pageNumber: number = 1; 
  pageSize: number = 10;
  theTotalElements: number = 0;
  companies: Company[] = [];

  newcompany: any = {};
  showForm: boolean = false;

constructor(private compserv:CompanyService, private router: Router,private route: ActivatedRoute ){}

  
  ngOnInit(): void {
    
      this.getCompanies();
      this.hello();
  }
  getCompanies() {
    this.compserv.getCompaniesPaginate().subscribe(
      data => {
        //console.log('Companies=' + JSON.stringify(data));
        this.companies = data;
        console.log(this.companies);
      }
    );
    
  }

  hello(){
    console.log(this.companies);
  }

  processResult() {
    return (data: any) => {
      this.companies = data._embedded.company;
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }


  addcompany(){
    this.showForm = false;
  }
  // addNewCompany(){
  //   return this.compserv.AddCompany(this.newcompany).subscribe((data:any)=>
  //   {
  //     //console.log(data);
  //     this.newcompany={};
  //     this.router.navigate(['/show-company']);
  //     this.ngOnInit();
      
  //   })
  // }

  cancelAddCompany() {
    this.newcompany = {}; // Reset the newcategory object
    this.showForm = false; // Hide the form
  }
}
