import { Injectable } from '@angular/core';
import { Employee } from './employee';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';

@Injectable()
export class EmpService {

    constructor(private http: Http) { }

    genders = [{ value: 'M', text: 'Male' },
    { value: 'F', text: 'Female' }
    ];

    countries = [{ value: '', text: 'Select Country' },
    { value: 'AF', text: 'Afghanistan' },
    { value: 'HK', text: 'Hong Kong' },
    { value: 'IN', text: 'India' },
    { value: 'JM', text: 'Jamaica' }
    ];

    getGenders() {
        return this.genders;
    }

    getCountries() {
        return this.countries;
    }

    public getEmployeefromJson(obj: Employee): Employee {

        //obj.gender = obj.gender == "M" ? "Male" : "Female";
        return new Employee(obj.id, obj.name, obj.gender, obj.country);
    }

    private handleError(err) {
        console.log("#Error Occurred");
        console.log(err);
        return Observable.throw(err);
    }

    getEmployees(): Observable<Employee[]> {
        let url = '/api/employees/';

        return this.http.get(url).map((resp: Response) => {
            var fetchedEmployees = [];
            for (let emp of resp.json().data) {
                fetchedEmployees.push(this.getEmployeefromJson(emp));
            }
            return fetchedEmployees as Array<Employee>;
        }).catch(this.handleError);
    }

    getEmployeeById(empId: number): Observable<Employee> {
        let id = JSON.stringify(empId);
        let url = `/api/employees/${id}`;

        return this.http.get(url).map((resp: Response) => {
            let emp = resp.json().data;
            let fetchedEmployee = this.getEmployeefromJson(emp);
            return fetchedEmployee as Employee;
        }).catch(this.handleError);
    }

    createEmployee(emp: Employee) {
        let body = JSON.stringify({ name: emp.name, gender: emp.gender, country: emp.country });
        let url = '/api/employees';

        return this.http.post(url, body).map((resp: Response) => {
            console.log(resp.json());
            return this.getEmployeefromJson(resp.json().data);

        }).catch(this.handleError);
    }

    updateEmployee(emp: Employee) {
        let body = JSON.stringify({ id: emp.id, name: emp.name, gender: emp.gender, country: emp.country });
        let url = `/api/employees/${emp.id}`;

        return this.http.put(url, body).map((resp: Response) => {
            console.log(resp);
            if (resp.status == 204) {
                console.log("success!");
            }
            else {
                throw `Error Occurred while fetching ${emp.id}. Recieved status code : ${resp.status}`;
            }

        }).catch(this.handleError);
    }

    deleteEmployee(empId: number) {
        let id = JSON.stringify(empId);
        let url = `/api/employees/${id}`;

        return this.http.delete(url).map((resp: Response) => {
            console.log(resp.json());
        }).catch(this.handleError);
    }

}
