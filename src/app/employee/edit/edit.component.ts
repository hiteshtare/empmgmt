import { EmpService } from './../shared/emp.service';
import { Employee } from './../shared/employee';
import { NotifyService } from './../../shared/notify.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  //Page Data Initialization
  public genders = [];
  public countries = [];
  //Page Data Initialization

  employeeId = 0;
  errorText = '';
  successText = '';

  public employee: Employee;

  complexForm: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private empService: EmpService, private notifyService: NotifyService) {
    this.createForm();
  }

  //Initialise form with validations
  createForm() {
    this.complexForm = this.fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(10)])],
      'gender': ['', Validators.required],
      'country': ['', Validators.required]
    });
  }


  ngOnInit() {
    this.route.params.map(params => params['employeeId']).subscribe((empId) => {
      this.employeeId = +empId; //conversion of string to number 
      this.loadEmployeeDetails();
    });

    this.genders = this.empService.getGenders();
    this.countries = this.empService.getCountries();
  }

  loadEmployeeDetails() {
    this.empService.getEmployeeById(this.employeeId).subscribe(fetchedEmployee => {
      this.employee = fetchedEmployee;
      console.log(this.employee);
    });
  }

  updateEmp(emp: Employee): void {
    emp.id = this.employeeId
    this.empService.updateEmployee(emp).subscribe((existingEmployee) => {
      this.notifyService.toastMessage('info', 'Updation', 'Employee updated successfully.');
    }, (err) => {
      this.errorText = `Internal Error Occured : ${err}`;
    });
  }
}
