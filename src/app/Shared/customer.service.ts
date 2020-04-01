import { Injectable } from '@angular/core';
import{FormControl,FormGroup}from '@angular/forms';
import{AngularFireDatabase,AngularFireList,AngularFireObject}from 'angularfire2/database';
import { Customer } from '../Shared/Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private firebase:AngularFireDatabase) { }
customerList:AngularFireList<any>;
// customerLists: AngularFireList<Customer[]>; //  list of objects
// customer: AngularFireObject<Customer> = null; //   single object

  form = new FormGroup({
    $key:new FormControl(null),
  fullname:new FormControl(''),
  email:new FormControl(''),
  mobile:new FormControl(''),
  location:new FormControl('')
  })

  getCustomers(){
    
    this.customerList = this.firebase.list('customers');
    return this.customerList.snapshotChanges();
    // this.customerLists = this.firebase.list('customers');
    // return this.customerLists;
  }
  insertCustomer(customer) {
    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }
  populateForm(customer) {
    this.form.setValue(customer);
  }
  deleteCustomer($key: string) {
    this.customerList.remove($key);
  }
  updateCustomer(customer) {
    this.customerList.update(customer.$key,
      {
        fullname: customer.fullname,
        email: customer.email,
        mobile: customer.mobile,
        location: customer.location
      });
  }
  //  insertCustomer(cus){
  //   this.customerLists.push({
  //     fullname:cus.fullname,
  //     email:cus.email,
  //     mobile:cus.mobile,
  //     location:cus.location
  //   })
  //  }

}
