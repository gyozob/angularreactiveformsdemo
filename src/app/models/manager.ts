import { Employee } from './employee';

export class Manager extends Employee {
    constructor(
        Id: number,
        FirstName: string,
        LastName,
        PersonalIdentifier: number,
        Company: string,
        public Department: string,
        ManagerId?: number,
    ) {
        super(Id, FirstName, LastName, PersonalIdentifier, Company, ManagerId);
    }
}
