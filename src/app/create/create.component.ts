import { Component, OnInit } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Employee } from '../employee';
import { EmpService } from '../emp.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  //Page Data Initialization
  public genders = [];
  public countries = [];
  //Page Data Initialization

  public employee: Employee;

  complexForm: FormGroup;

  constructor(fb: FormBuilder, private empService: EmpService) {
    this.complexForm = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'gender': [null, Validators.required],
      'country': ['', Validators.required]
    });
  }

  errorText = '';
  successText = '';

  // Again we’ll implement our form submit function that will just console.log the results of our form
  submitForm(emp: Employee): void {
    console.log('Reactive Form Data: ')

    this.empService.submitEmployee(emp).subscribe((newEmployee) => {
      this.successText = 'Employee added successfully.';
    }, (err) => {
      this.errorText = `Internal Error Occured : ${err}`;
    });
  }

  ngOnInit() {
    this.genders = this.empService.getGenders();
    this.countries = this.empService.getCountries();

    //Model Initialization
    this.employee = new Employee(99, 'Hitesh', 'M', 'IN');
    //Model Initialization
  }
}
