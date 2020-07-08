import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Declare_Service } from 'src/app/_service/declare-service.service';
import { MdbTableDirective } from "angular-bootstrap-md";

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.scss'],
/*
  template: `<div>
   <p>Today is {{today | date}}</p>
   <p>Or if you prefer, {{today | date:'fullDate'}}</p>
   <p>The time is {{today | date:'h:mm a z'}}</p>
 </div>` */

})
export class ViewItemsComponent implements OnInit {
  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
   /* */
   headElements = ['Serial Number', 'Student Number','First Name','Last Name','Phone',"item Description" ,'Item Type', 'Item Name', 'Change Ownership'];
   declared_items = [];
   cat_items = [];
   /* */
  /**declare */
  adminForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  returnUrl: string;
  error = '';
  /*end */
   searchText: string = '';
   previous: string;
  constructor
    (
      private admin_service: Declare_Service,
      private adminfmBuilder: FormBuilder
    ) 
    { }

  @HostListener('input') oninput() {
    this.searchItems();
  }

  ngOnInit() {
     /* Declared Items */
     this.found_Items();
     /* Dropdown */
     this.get_Cat_item()


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
  found_Items() {
    return this.admin_service.get_declared_Item().subscribe(
      data => {
        this.declared_items = data.data;
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

  
}
