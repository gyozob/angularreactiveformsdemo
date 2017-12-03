import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { PersonForm } from './forms/person.form';
import { EmployeeForm } from './forms/employee.form';
import { ManagerForm } from './forms/manager.form';
import { FormType } from './models/Enums';
import { nameof } from './helpers/utils';
import { Person } from './models/person';
import { IBaseForm } from './forms/base.form';
import { IModel } from './models/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFormType: FormType = FormType.Employee;
  formTypeList: {label: string, value: number}[] = [];
  form: FormGroup;
  formByType: {[key: number]: PersonForm } = {};

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
    const formTypes = Object.getOwnPropertyNames(FormType);
    formTypes.forEach((element) => {
      const isValueProperty = parseInt(element, 10) >= 0;
      if (isValueProperty) {
        return;
      }

      this.formTypeList.push({label: element, value: FormType[element]});
    });

    this.formByType[FormType.Person] = new PersonForm();
    this.formByType[FormType.Employee] = new EmployeeForm();
    this.formByType[FormType.Manager] = new ManagerForm();
    this.form = this.formByType[this.currentFormType];
  }

  formTypeChange() {
    this.form = this.formByType[this.currentFormType];
  }

  submit() {
    console.log('submitted form value', this.formByType[this.currentFormType].value);
  }
}
