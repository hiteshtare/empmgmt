import { Component, OnInit } from '@angular/core';
// We will need to import a couple of specific API’s for dealing with reactive forms
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NotifyService } from './../../shared/notify.service';
import { EmpService } from './../shared/emp.service';
import { Employee } from './../shared/employee';

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

  constructor(private fb: FormBuilder, private empService: EmpService, private notifyService: NotifyService) {
    this.createForm();
  }

  //Initialise form with validations
  createForm() {
    this.complexForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'gender': [null, Validators.required],
      'country': ['', Validators.required]
    });
  }

  errorText = '';
  successText = '';

  ngOnInit() {
    this.genders = this.empService.getGenders();
    this.countries = this.empService.getCountries();

    //Model Initialization
    this.employee = new Employee(99, '', '', '');
    //Model Initialization
  }

  // Again we’ll implement our form submit function that will just console.log the results of our form
  createEmp(emp: Employee): void {
    console.log('Reactive Form Data: ')

    this.empService.createEmployee(emp).subscribe((newEmployee) => {
      this.notifyService.toastMessage('info', 'Creation', 'Employee added successfully.');
      this.createForm();
    }, (err) => {
      this.errorText = `Internal Error Occured : ${err}`;
    });
  }

  //Clear of the input fields
  clearFields() {
    this.createForm();
  }

}
