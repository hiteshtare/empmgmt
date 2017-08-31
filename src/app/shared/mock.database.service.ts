import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Employee } from './../employee/shared/employee';

export class MockDatabaseService implements InMemoryDbService {

    createDb() {
        let employees = [new Employee(1, 'Lee', 'M', 'HK'), new Employee(2, 'Sanaa', 'F', 'IN')];

        return { 'employees': employees };
    }
}