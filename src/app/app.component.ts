import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { PasswordErrorStateMatcher } from './_error-state-matcher/password-error-state-matcher';
import { PASSWORD_ERROR_MAP } from './_enums/password-error.enum';
import { passwordValidator } from './_validators/paswword-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public readonly PASSWORD_ERROR_MAP: typeof PASSWORD_ERROR_MAP = PASSWORD_ERROR_MAP;

  public passwordErrorStateMatcher: ErrorStateMatcher = new PasswordErrorStateMatcher();
  public passwordControl: FormControl = new FormControl<string>('', [passwordValidator]);
}
