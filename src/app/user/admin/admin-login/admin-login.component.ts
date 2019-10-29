import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  adminLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.adminLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  login(){
    if (this.adminLogin.valid) {
      console.log(this.adminLogin.value);
      this.router.navigate(['update']);
    }
  }

}
