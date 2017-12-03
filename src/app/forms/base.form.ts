import { FormGroup } from '@angular/forms';

export interface IBaseForm<TFromModel> {
    getFormValue(): TFromModel;
}
