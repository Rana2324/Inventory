import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

public otherDetail=true;
public addressCustomer=false;

public contactPerson=false;
public customerPerson=false;
public  customField=false;
public  reportingTag=false;
public  remark=false;
  constructor() { }

  ngOnInit(): void {
  }
otherDetails():void{
  this.otherDetail=true;
  this.addressCustomer=false;
} 
address():void{
this.addressCustomer=true;
this.otherDetail=false;
}
contactPersons():void{
  this.contactPerson=true;
  this.otherDetail=false;
  this.addressCustomer=false;
  this.customField=false;
  this.reportingTag=false;
  this.remark=false;
}

customFields():void{
  this.customField=true;
  this.contactPerson=false;
  this.otherDetail=false;
  this.addressCustomer=false;
  this.reportingTag=false;
  this.remark=false;
  
}
reportingTags():void{
  this.reportingTag=true;
  this.customField=false;
  this.contactPerson=false;
  this.otherDetail=false;
  this.addressCustomer=false;
  this.remark=false;
  
}
remarks():void{
  this.remark=true;
  this.reportingTag=false;
  this.customField=false;
  this.contactPerson=false;
  this.otherDetail=false;
  this.addressCustomer=false;
 

}




}
