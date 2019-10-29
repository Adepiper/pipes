import { Component, OnInit, Inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  FormBuilder
} from '@angular/forms';
import { User } from '../user.model';
import { inject } from '@angular/core/testing';
import { TOASTR_TOKEN, Toastr } from '../service/toastr.service';
import { AuthserviceService } from '../service/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;

  registerForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  phone: FormControl;
  password: FormControl;
  password2: FormControl;
  constructor(
    private formBuilder: FormBuilder,
    @Inject(TOASTR_TOKEN) private toastr: Toastr,
    private auth: AuthserviceService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(4)]],
        password2: ['', Validators.required, this.confirm]
      } /* ,
      { validator: this.checkPasswords } */
      // Validation Option 2);
    );
  }

  passwordConfirming() {
    if (this.password === this.password2) {
      return this.password2.valid;
    }
  }

  // Use either validation 1 or 2

  // Validation Option 1 "Validate the individual formcontrol"
  confirm(control: AbstractControl) {
    const pass = control.parent.get('password').value;
    const confirmPass = control.parent.get('password2').value;
    return new Promise((resolve, reject) => {
      if (pass === confirmPass) {
        resolve(true);
      }
    });
  }

  // Validation Option 2 "Validate the entire formgroup"
  checkPasswords(group: FormGroup) {
    // here we have the 'passwords' group
    const pass = group.get('password').value;
    const confirmPass = group.get('password2').value;

    return pass === confirmPass ? null : { notSame: true };
  }

  submit() {
    this.auth.registerUser(this.registerForm.value).subscribe((data: any) => {
      console.log(data);
    });
  }
}
