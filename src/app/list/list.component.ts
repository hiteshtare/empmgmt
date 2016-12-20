import { Component, OnInit } from '@angular/core';

import { Employee } from '../employee';
import { EmpService } from '../emp.service';

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
