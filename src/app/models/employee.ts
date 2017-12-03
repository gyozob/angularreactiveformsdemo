import { Person } from './person';

export class Employee extends Person {
    constructor(
        Id: number,
        FirstName: string,
        LastName,
        PersonalIdentifier: number,
        public Company: string,
        public ManagerId?: number,
    ) {
        super(Id, FirstName, LastName, PersonalIdentifier);
    }
}
