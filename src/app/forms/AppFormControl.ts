import { FormControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';

export class AppFormControl extends FormControl {
    constructor(
        formState?: any,
        validator?: ValidatorFn | ValidatorFn[] | null,
        asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null,
        public isDisabled?: boolean,
    ) {
        super(formState, validator, asyncValidator);
    }
}
