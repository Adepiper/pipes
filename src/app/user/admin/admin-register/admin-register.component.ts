import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  adminForm: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  password2: FormControl;
  constructor( private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.adminForm =  this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
     email: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(4)]],
        password2: ['', Validators.required],
    });
 }

 submit(){
   if (this.adminForm.valid){
     console.log(this.adminForm.value);
     this.router.navigate(['/admin']);
   }
 }


}
