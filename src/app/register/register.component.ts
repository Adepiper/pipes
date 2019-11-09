import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { User } from '../user.model';

import { TOASTR_TOKEN, Toastr } from '../service/toastr.service';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


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
  constructor(private formBuilder: FormBuilder, @Inject(TOASTR_TOKEN) private toastr: Toastr,
              private auth: AuthserviceService, private router: Router ) { }

  ngOnInit() {

    this.registerForm =  this.formBuilder.group ({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
     email: ['', [Validators.required, Validators.email]],
      phone: ['' , Validators.required],
        password: ['', [Validators.required, Validators.minLength(4)]],
        password2: ['', Validators.required, this.confirm]
})

  }

    confirm(control: AbstractControl){
      const pass = control.parent.get('password').value;
      const confirmPass = control.parent.get('password2').value;
      return new Promise((resolve, reject) => {
        if (pass === confirmPass){
          resolve (true)
        }
        resolve('Password missmatch')
      });
    }

  submit(){
  this.auth.registerUser(this.registerForm.value)
    .subscribe((data: any) => {
        console.log(data);
    },
    err => {
      if (err instanceof HttpErrorResponse){
        const errorMessages = new Array<{propName: string; errors: string}>();

        if (err.status === 400){
          Object.keys(Validators).forEach(prop => {
            const formControl = this.registerForm.get(prop);
            if (formControl){
              // tslint:disable-next-line:label-position
              serverError: Validators[prop]
            }
          })
        }
      }
    }
    );
  this.toastr.success('You can now log in');
  this.router.navigate(['Login']);
  }

}
