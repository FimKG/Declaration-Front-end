import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Declare_Service } from '../_service/declare-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  adminForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  returnUrl: string;
  error = '';

  constructor
    (
      private router: Router, private adminserv: FormBuilder, private admin_service: Declare_Service
    ) { }

  ngOnInit() {
    this.adminForm = this.adminserv.group({
      username: [null, [
        Validators.required]
      ],
      password: [null, [
        Validators.required]
      ]
    });
  }
  AdminLogIn() {
    this.submitted = true;
    if (this.adminForm.invalid) {
      return;
    }
    this.submitted = true;
    if (this.adminForm.invalid) {
      return;
    }
    this.invalidLogin = true;
    
    return this.admin_service.admin_Login(this.adminForm.value.username, this.adminForm.value.password).subscribe(
      data => {
        if (data.status == 200) {
          // Succesfully Login
          this.router.navigate(['/admin']);
        }
      } , invalid => {
        this.invalidLogin;
        this.error = invalid.message;
      }
    )
    // if (this.adminForm.controls.username.value == '212486884' && this.adminForm.controls.password.value == '123') {
    //   this.router.navigate(['/admin']);
    // } else {
    //   this.invalidLogin = true;
    // }
  }
}

