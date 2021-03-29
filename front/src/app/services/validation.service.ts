
export class ValidationService {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    let config = {
      required: 'Required',
      invalidUsername: 'Invalid username',
      invalidEmailAddress: 'Invalid email address',
      invalidPassword:
        'Invalid password. Password must be at least 8 characters long, and contain a number, a capital letter and a special char.',
      minlength: `Minimum length ${validatorValue.requiredLength}`
    };

    return config[validatorName];
  }

  static emailValidator(control) {
    // email regex
    if (
      control.value.match(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
      )
    ) {
      return null;
    } else {
      return { invalidEmailAddress: true };
    }
  }

  static passwordValidator(control) {
    // {8,30}            - Assert password is between 8 and 30 characters
    // (?=.*[0-9])       - Assert a string has at least one number
    if (control.value.match(/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*~{}&.,§+=°_();\/]).{8,30}/)) {
      return null;
    } else {
      return { invalidPassword: true };
    }
  }

  static userNameValidator(control) {
    /*  
    Usernames can consist of lowercase and capitals
    Usernames can consist of alphanumeric characters
    Usernames can consist of underscore and hyphens and spaces
    Cannot be two underscores, two hypens or two spaces in a row
    Cannot have a underscore, hypen or space at the start or end
    */
    if (control.value.match(/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/)) {
      return null;
    } else {
      return { invalidUsername: true };
    }
  }
}