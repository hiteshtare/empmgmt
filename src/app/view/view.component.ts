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

  employeeId = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.map(params => params['employeeId']).subscribe((empId) => {
      this.employeeId = empId;
      console.log(empId);
    });
  }

}
