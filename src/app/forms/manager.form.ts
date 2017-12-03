import { FormControl, Validators } from '@angular/forms';
import { EmployeeForm } from './employee.form';
import { IBaseForm } from './base.form';
import { Manager } from '../models/manager';
import { HttpClient } from '@angular/common/http';
import { nameof } from '../helpers/utils';

export class ManagerForm extends EmployeeForm {
    constructor() {
        super();
        this.addControl(
            nameof<Manager>(e => e.Department),
            new FormControl('', [Validators.required, Validators.maxLength(100)])
        );
    }
}
