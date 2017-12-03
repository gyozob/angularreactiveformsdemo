import { FormControl, Validators } from '@angular/forms';
import { PersonForm } from './person.form';
import { IBaseForm } from './base.form';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { nameof } from '../helpers/utils';

export class EmployeeForm extends PersonForm {
    constructor() {
        super();
        this.addControl(
            nameof<Employee>(e => e.Company),
            new FormControl('', [Validators.required, Validators.maxLength(100)])
        );
        this.addControl(
            nameof<Employee>(e => e.ManagerId),
            new FormControl('', [Validators.required, Validators.pattern(new RegExp('^\\d+$'))])
        );
    }
}
