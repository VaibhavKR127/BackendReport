import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/common/company';
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

  newCompany : Company = new Company();
  showForm: boolean = false;

constructor(private compserv:CompanyService, private router: Router,private route: ActivatedRoute ){}

  
  ngOnInit(): void {
      this.getCompanies();
  }
  getCompanies() {
    this.compserv.getCompanies().subscribe(
      data => {
        //console.log('Companies=' + JSON.stringify(data));
        this.companies = data;
        console.log(this.companies);
      }
    );
    
  }

 

  processResult() {
    return (data: any) => {
      this.companies = data._embedded.company;
      this.pageNumber = data.page.number + 1;
      this.pageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }


  addCompanyForm(){
    this.showForm = true;
  }

  addNewCompany(){
    return this.compserv.addCompany(this.newCompany).subscribe((data:any)=>
    {
      //console.log(data);
      this.newCompany=new Company();
      //this.router.navigate(['/show-company']);
      this.ngOnInit();
      
    })
  }

  cancelAddCompany() {
    this.newCompany = new Company(); // Reset the newcategory object
    this.showForm = false; // Hide the form
  }

  editCompany(company:Company){
    this.showForm=true;
    this.newCompany = company;
  }
}
