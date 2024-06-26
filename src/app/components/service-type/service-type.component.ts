import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/common/service';
import { ServiceTypeService } from 'src/app/services/service-type.service';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.component.html',
  styleUrls: ['./service-type.component.css']
})
export class ServiceTypeComponent {

  services: Service[] = [];

  newService : Service = new Service();
  showForm: boolean = false;

constructor(private serTypeserv:ServiceTypeService, private router: Router,private route: ActivatedRoute ){}

  
  ngOnInit(): void {
      this.getServices();
  }
  getServices() {
    this.serTypeserv.getServices().subscribe(
      data => {
        
        this.services = data;
        console.log(this.services);
      }
    );
    
  }

  addServiceForm(){
    this.showForm = true;
  }

  addNewService(){
    return this.serTypeserv.addService(this.newService).subscribe((data:any)=>
    {
      //console.log(data);
      this.newService=new Service();
      //this.router.navigate(['/show-Service']);
      this.ngOnInit();
      
    })
  }

  cancelAddService() {
    this.newService = new Service(); // Reset the newcategory object
    this.showForm = false; // Hide the form
  }

  editService(Service:Service){
    this.showForm=true;
    this.newService = Service;
  }
}
