import { Component, OnInit } from '@angular/core';

import { EmpService } from './../shared/emp.service';
import { Employee } from './../shared/employee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees = [];

  constructor(private empservice: EmpService) { }

  ngOnInit() {
    this.empservice.getEmployees().subscribe((newEmployees) => {
      this.employees = newEmployees;
    });
  }

}
