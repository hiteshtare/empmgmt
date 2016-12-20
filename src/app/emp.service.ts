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

    employees = [new Employee(1, 'Lee', 'Male', 'Hong Kong'), new Employee(2, 'Sanaa', 'Female', 'India')];

    getGenders() {
        return this.genders;
    }

    getCountries() {
        return this.countries;
    }

    public getEmployeefromJson(obj: Employee): Employee {

        obj.gender = obj.gender == "M" ? "Male" : "Female";

        return new Employee(obj.id, obj.name, obj.gender, obj.country);
    }

    private handleError(err) {
        console.log(err);
        return Observable.throw(err);
    }

    getEmployees(): Observable<Employee[]> {
        return this.http.get('/api/employees').map((resp: Response) => {
            console.log(resp.json());
            var fetchedEmployees = [];
            for (let emp of resp.json().data) {
                fetchedEmployees.push(this.getEmployeefromJson(emp));
            }
            return fetchedEmployees as Array<Employee>;
        }).catch(this.handleError);
    }

    submitEmployee(emp: Employee) {
        let body = JSON.stringify({ name: emp.name, gender: emp.gender, country: emp.country });

        return this.http.post('/api/employees', body).map((resp: Response) => {
            console.log(resp.json());
            return this.getEmployeefromJson(resp.json().data);

        }).catch(this.handleError);
    }

}
