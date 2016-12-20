import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Employee } from './employee';

export class MockDatabaseService implements InMemoryDbService {
    
    createDb() {
        let employees = [new Employee(1, 'Lee', 'Male', 'Hong Kong'), new Employee(2, 'Sanaa', 'Female', 'India')];

        return { 'employees': employees };
    }
}