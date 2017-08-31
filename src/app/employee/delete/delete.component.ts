import { Employee } from './../shared/employee';
import { EmpService } from './../shared/emp.service';
import { NotifyService } from './../../shared/notify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  employeeId = 0;
  errorText = '';
  successText = '';

  public employee: Employee;

  constructor(private route: ActivatedRoute, private empService: EmpService, private router: Router, private confirmationService: ConfirmationService, private notifyService: NotifyService) { }

  ngOnInit() {
    this.route.params.map(params => params["employeeId"]).subscribe((empId) => {
      this.employeeId = +empId;
      this.loadEmployeeDetails();
    });
  }

  loadEmployeeDetails() {
    this.empService.getEmployeeById(this.employeeId).subscribe(fetchedEmployee => {
      this.employee = fetchedEmployee;
      console.log(this.employee);
    });
  }

  deleteEmp() {
    this.empService.deleteEmployee(this.employeeId).subscribe((deletedEmployee) => {
      this.notifyService.toastMessage('warn','Deletion','Employee deleted successfully!');
      this.router.navigate(["/list"]);
    }, (err) => {
      this.errorText = `Internal Error Occured : ${err}`;
    });
  }

  confirmDeletion() {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'fa fa-trash',
      accept: () => {
        this.deleteEmp();
      }
    });
  }

}
