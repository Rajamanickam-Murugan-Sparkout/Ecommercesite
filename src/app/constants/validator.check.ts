import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class ValidatorCheck {
    static strongPassword(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value || '';
            const errors: ValidationErrors = {};

            if (!/[A-Z]/.test(value)) {
                errors['uppercase'] = 'Password must contain at least one uppercase letter.';
            }
            if (!/[a-z]/.test(value)) {
                errors['lowercase'] = 'Password must contain at least one lowercase letter.';
            }
            if (!/\d/.test(value)) {
                errors['number'] = 'Password must contain at least one number.';
            }
            if (!/[@$!%*?&]/.test(value)) {
                errors['special'] = 'Password must contain at least one special character.';
            }
            if (value.length < 8) {
                errors['minlength'] = 'Password must be at least 8 characters long.';
            }

            return Object.keys(errors).length ? errors : null;
        };
    }
  
    static customEmailValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value || '';
            const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.(com|in|co.in|yahoo.com)$/;
            const errors: ValidationErrors = {};

            if (!value) {
                errors['required'] = 'Email is required.';
            } else if (!emailPattern.test(value)) {
                errors['email'] = 'Invalid email format. Only lowercase letters are allowed and it should end with .com, .in, .co.in, or @yahoo.com';
            }

            return Object.keys(errors).length ? errors : null;
        };
    }
    static nameValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value || '';
            const namePattern = /^[A-Za-z\s]+$/;
            const errors: ValidationErrors = {};

            if (!value) {
                errors['required'] = 'Name is required.';
            } else {
                if (!namePattern.test(value)) {
                    errors['invalidCharacters'] = 'Name must contain only alphabetic characters and spaces.';
                }
                if (value.length < 5) {
                    errors['minlength'] = 'Name must be at least 5 characters long.';
                }
            }

            return Object.keys(errors).length ? errors : null;
        };
    }
}
