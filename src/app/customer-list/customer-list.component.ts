import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Shared/customer.service';
import { AngularFireList } from 'angularfire2/database';
import { Customer } from '../Shared/Customer';
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
customerArray: any = [];
showDeletedMessage: boolean;

public Customers: AngularFireList<Customer[]>;
  constructor(public Customerservice:CustomerService) { }

  ngOnInit(): void {
 
this.Customerservice.getCustomers().subscribe(list =>{
  list.forEach( item => { 
    let a = item.payload.toJSON();
    a['$key'] = item.key;
    this.customerArray.push(a as Customer)
   
  })

});
  }
  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.Customerservice.deleteCustomer($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  // filterCondition(customer) {
  //  // return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  // }

}
