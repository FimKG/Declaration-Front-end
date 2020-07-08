//import { Component, OnInit } from '@angular/core';
//import {FormControl} from "@angular/forms";
import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
//import {MdbTableDirective} from "PATH-TO-MDB-ANGULAR";
import { MdbTableDirective } from "angular-bootstrap-md";
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Declare_Service } from '../_service/declare-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;



  // validatingForm: FormGroup;


  adminForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  returnUrl: string;
  error = '';

  /* */
  headElements = ['Student Number', 'Serial Number', 'Surname & Initials', 'Item Type', 'Item Name','Date','Change Ownership'];
  declared_items = [];
  cat_items = [];
  /* */

  searchText: string = '';
  previous: string;


  constructor
    (
      private router: Router,
      private adminfmBuilder: FormBuilder,
      private admin_service: Declare_Service
    ) { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
    /* Declared Items */
    this.found_Items();
    /* Dropdown */
    this.get_Cat_item()

    // this.selected_cat();
    // this.validatingForm = new FormGroup({
    //   modalFormDarkEmail: new FormControl('', Validators.email),
    //   modalFormDarkPassword: new FormControl('', Validators.required)
    // });
    // 
    this.adminForm = this.adminfmBuilder.group({
      studentno: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(9),
        Validators.maxLength(9)]
      ],
      serialno: [null, [
        Validators.required]
      ],
      surname: [null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")]
      ],
      initials: [null, [
        Validators.required]
      ],
      itemName: [null, [
        Validators.required]
      ],
      itemType: [null, [
        Validators.required]
      ]
    });


  }
  // -----------------------------------------------------------------------------
  found_Items() {
    return this.admin_service.get_declared_Item().subscribe(
      data => {
        this.declared_items = data;
        this.mdbTable.setDataSource(this.declared_items);
        this.previous = this.mdbTable.getDataSource();
      }
    )
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();

    if (!this.searchText) {
      this.mdbTable.setDataSource(this.previous);
      this.declared_items = this.mdbTable.getDataSource();
    } else {
      this.declared_items = this.mdbTable.searchLocalDataBy(this.searchText);
      this.mdbTable.setDataSource(prev);
    }
  }

  get_Cat_item() {
    this.admin_service.get_item_cat().subscribe(data => {
      this.cat_items = data;
    })
  }
  // ---------------------------------------------------------git --------------------

  saveData() {
    this.submitted = true;
    if (this.adminForm.invalid) {
      return;
    }
    this.invalidLogin = true;
    console.log(this.adminForm.value)
    return this.admin_service.declare(this.adminForm.value).subscribe(
      data => {
        if (data.status == 200) {
          // Succesfully Registered
        }
      },
      invalid => {
        this.invalidLogin;
        this.error = invalid.message;
      }
    )

    // if (this.adminForm.controls.studentno.value && this.adminForm.controls.serialno.value &&
    //   this.adminForm.controls.surname.value && this.adminForm.controls.initials.value && this.adminForm.controls.itemName.value) {


    //   //this.router.navigate(['./admin-dashboard']);

    // } else {
    //   this.invalidLogin = true;
    // }
  }


  // get modalFormDarkEmail() {
  //   return this.validatingForm.get('modalFormDarkEmail');
  // }

  // get modalFormDarkPassword() {
  //   return this.validatingForm.get('modalFormDarkPassword');
  // }
}

