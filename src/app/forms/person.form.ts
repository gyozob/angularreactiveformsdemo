import { FormControl, Validators, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { nameof } from '../helpers/utils';
import { Person } from '../models/person';
import { IBaseForm } from './base.form';
import { HttpClient } from '@angular/common/http';

export class PersonForm extends FormGroup {
    constructor() {
    const _controls = {};
    _controls[nameof<Person>(p => p.FirstName)] = new FormControl('', [Validators.required,
        Validators.maxLength(20)]);
    _controls[nameof<Person>(p => p.LastName)] = new FormControl('', [Validators.required,
       Validators.maxLength(20)]);
    _controls[nameof<Person>(p => p.PersonalIdentifier)] = new FormControl('', [Validators.required,
                 Validators.pattern(new RegExp('^\\d+$')),
                 Validators.maxLength(13)]);
    super(_controls);
    }

    // TODO: sample async validator
    // private isDuplicate = (control: AbstractControl): Promise<ValidationErrors> => {
    //     const promise = new Promise((resolve, reject) => {
    //       this.http.get('').subscribe(result => {
    //         if (result === false) {
    //           resolve({'isDuplicate': true});
    //           return;
    //         }

    //         resolve(null);
    //       });
    //     });

    //     return promise;
    //   }
}
