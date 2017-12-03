import { IModel } from './model';

export class Person implements IModel {
    constructor(
        public Id?: number,
        public FirstName?: string,
        public LastName?: string,
        public PersonalIdentifier?: number,
    ) {
    }
}
