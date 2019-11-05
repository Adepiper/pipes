import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isError: boolean = false;
  constructor(private formBuilder: FormBuilder,private router:Router, private auth: AuthserviceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  submit(){
      this.auth.loginUser(this.loginForm.value.email, this.loginForm.value.password)
        .subscribe((data: any) => {
          console.log(data)
          this.router.navigate(['movies'])
        },
        (err: HttpErrorResponse )=> {
          this.isError = true;
        })
  }

}
