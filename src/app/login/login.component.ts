import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router:Router, private auth: AuthserviceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  submit(){
    if (this.loginForm.valid){
      this.auth.loginUser(this.loginForm.value.email, this.loginForm.value.password)
      this.router.navigate(['movies'])
    }
  }

}
