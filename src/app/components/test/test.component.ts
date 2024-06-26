import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/common/company';
import { DisplayTest } from 'src/app/common/display-test';
import { Service } from 'src/app/common/service';
import { Test } from 'src/app/common/test';
import { CompanyService } from 'src/app/services/company.service';
import { ServiceTypeService } from 'src/app/services/service-type.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{

  constructor(private tser:TestService,private router: Router,
    private compser:CompanyService,private sert:ServiceTypeService){}

  newtest:Test=new Test();
  temptest: Test[] = [];
  testlist:DisplayTest[]=[];
  showForm: boolean = false;
  compList:Company[]= [];
  servList:Service[] = [];
  selectedcomp:any;
  selectedserv:any;
  //curuser:any={};
  //user:any={};
  ngOnInit(): void {
    this.getcomp();
    this.getServ();

    ///Add AsynC
    ///
    this.getTestList();
  
    //this.user=localStorage.getItem("curuser");
    //this.curuser=JSON.parse(this.user);
  }

getTestList(){
  return this.tser.getTests().subscribe((data:any)=>{
  console.log(data);
  this.temptest=data;
  //this.testlist=data;
  this.displayTests();
});

}

displayTests(){
  for(let test of this.temptest){
    let temp: DisplayTest =new DisplayTest;
    let company = this.compList.filter(comp => test.cid===comp.cid);
    let service = this.servList.filter(serv => test.sid===serv.sid);
    temp.tid = test.tid;
    temp.cid = test.cid;
    temp.sid = test.sid;
    temp.sname = service[0].sname!;
    temp.cname = company[0].cname!;
    this.testlist.push(temp);
    //this.testlist.
  }
}

view(tid:any){
  this.router.navigate(['/testvul'])
  localStorage.setItem('tid',JSON.stringify(tid));
}

addNewTest(){
  //console.log(this.newtest,"New Test")
  this.tser.addTest(this.newtest).subscribe((data:any)=>
  {
    //console.log(data);
    this.testlist=[];
    this.ngOnInit();
    this.showForm=false;
  })
}


cancelAddTest() {
  //this.newtest = {}; // Reset the newcategory object
  this.showForm = false; // Hide the form
}


addTest(){
  this.showForm = true;
}


 downloadFile(tid:any) {
//   const fileName = 'example.docx'; // Specify the filename
  
//   // Make an HTTP GET request to download the file
//   this.http.get(`${baseURL}/test/files/${tid}`, {
//     responseType: 'blob', // Set the response type to blob
//     headers: new HttpHeaders().append('Accept', 'application/octet-stream')
//   }).subscribe(response => {
//     const blob = new Blob([response], { type: 'application/octet-stream' });
//     const url = window.URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = fileName;
//     a.click();
//     window.URL.revokeObjectURL(url);
//   });
 }

// delVul(tid:any){

//   if(this.curuser.uname=="Admin"){
//     //console.log("Delete test",this.curuser);
//   this.tser.deltest(tid).subscribe((data:any)=>
//   {
//     //console.log(data);
//     this.ngOnInit();
//   })
// }
// else{
//   alert("Only Admin can Delete the Test ")
// }
// }

getcomp(){
  return this.compser.getCompanies().subscribe((data:any)=>
  {
    //console.log(data);
    this.compList=data;
  })
}


getServ(){
  return this.sert.getServices().subscribe((data:any)=>
  {
    //console.log(data);
    this.servList=data;
  })
}


onselectedcomp(data:any){
  //console.log(data);
  this.selectedcomp=data.value;
  this.newtest.cid=this.selectedcomp.cid;
}


onselectedserv(data:any){
  this.selectedserv=data.value;
  this.newtest.sid=this.selectedserv.sid;
}

}
