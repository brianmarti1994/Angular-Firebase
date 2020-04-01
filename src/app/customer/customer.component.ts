import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../Shared/customer.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(public Customerservice:CustomerService) { }
  submitted: boolean;
  showSuccessMessage: boolean;
  ngOnInit(): void {
  }
  onSubmit()
  {
    if (this.Customerservice.form.get('$key').value ==null)
    {
      this.Customerservice.insertCustomer(this.Customerservice.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
    }
    else
    {
      this.Customerservice.updateCustomer(this.Customerservice.form.value);
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
    }
    
  }
}
