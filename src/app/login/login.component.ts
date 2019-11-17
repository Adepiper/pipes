import { Component, OnInit, Inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { HttpErrorResponse } from '@angular/common/http';
import { TOASTR_TOKEN, Toastr } from '../service/toastr.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isError: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthserviceService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.auth
        .loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe(
          (data: any) => {
            console.log(data);
            localStorage.setItem('user', data);
            this.router.navigate(['movies']);
            this.toastr.success('welcome');
          },
          err => this.toastr.warning('Invalid email and password')
        )
      // this.router.navigate(['movies'])
    }
  }
}
