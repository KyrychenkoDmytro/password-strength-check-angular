import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { PASSWORD_ERROR_MAP } from '../_enums/password-error.enum';

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const controlValue: string = control.value.trim();

  const checkOnLetter: RegExp = new RegExp(/[a-zA-Z]/);
  const checkOnNumber: RegExp = new RegExp(/[0-9]/);
  const checkOnSpecialSign: RegExp = new RegExp(/[!@#$%^&*_]/);

  switch (true) {
    case controlValue.length === 0:
      return { [PASSWORD_ERROR_MAP.ALL_GREY]: true };

    case controlValue.length < 8:
      return { [PASSWORD_ERROR_MAP.ALL_RED]: true };

    case checkOnLetter.test(controlValue)
    && checkOnNumber.test(controlValue)
    && checkOnSpecialSign.test(controlValue):
      return { [PASSWORD_ERROR_MAP.ALL_GREEN]: true };

    case checkOnLetter.test(controlValue) && checkOnNumber.test(controlValue)
    || checkOnLetter.test(controlValue) && checkOnSpecialSign.test(controlValue)
    || checkOnNumber.test(controlValue) && checkOnSpecialSign.test(controlValue):
      return { [PASSWORD_ERROR_MAP.YELLOW_YELLOW_GREY]: true };

    case checkOnNumber.test(controlValue)
    || checkOnLetter.test(controlValue)
    || checkOnSpecialSign.test(controlValue):
      return { [PASSWORD_ERROR_MAP.RED_GREY_GREY]: true };
  }

  return null;
};
