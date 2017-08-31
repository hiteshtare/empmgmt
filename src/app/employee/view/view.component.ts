import { Employee } from './../shared/employee';
import { EmpService } from './../shared/emp.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  employeeId = 0;
  public employee: Employee;

  constructor(private route: ActivatedRoute, private empService: EmpService) { }

  ngOnInit() {
    this.route.params.map(params => params['employeeId']).subscribe((empId) => {
      this.employeeId = +empId; //conversion of string to number 
      this.loadEmployeeDetails();
    });
  }

  loadEmployeeDetails() {
    this.empService.getEmployeeById(this.employeeId).subscribe(fetchedEmployee => {
      this.employee = fetchedEmployee;
    });
  }

}
