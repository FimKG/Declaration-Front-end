import { Component, OnInit, Input,Injectable, Inject } from '@angular/core';
import {ItemsService} from '../../items.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Subscriber } from 'rxjs';



@Component({
  selector: 'app-declare',
  templateUrl: './declare.component.html',
  styleUrls: ['./declare.component.scss']
})
export class DeclareComponent implements OnInit {
  
  public cats = [
    {"id": 1, "name": "Laptop/PC"},
    {"id": 2, "name": "Fridge"},
    {"id": 3, "name": "Speakers"},
    {"id": 4, "name": "Television"},
    {"id": 5, "name": "Microwave Oven"}
  ];

  /**declare validation variables*/
  adminForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  returnUrl: string;
  error = '';
  /**end validation declare */


  @Input ()  itemData = {
    serialNum:  " ", userID: " ", firstName:'', lastName:'', phone:'', itemDescription: " ", itemType: " ", itemBrand: " ",
  }

  @Input() categoryData ={
    id:"", name:""
  }

  optionsSelect: Array<any>;
 
  
  //constructor(private itemsService: ItemsService) { }
  
  categoryName: any;

  

  constructor(
    private adminfmBuilder: FormBuilder,
    @Inject(ItemsService) private itemsService: ItemsService) {
  }
  categories: any;

  ngOnInit() {


    /**validation */
    this.adminForm = this.adminfmBuilder.group({
      studentno: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(9),
        Validators.maxLength(9)]
      ],
      phone: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10),
        Validators.maxLength(10)]
      ],
      serialno: [null, [
        Validators.required]
      ],
      surname: [null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")]
      ],
      name: [null, [
        Validators.required]
      ],
      itemName: [null, [
        Validators.required]
      ],
      itemType: [null, [
        Validators.required]
      ]
    });
    /**end  */
    
    /*
    return this.itemsService.getCategory().subscribe(response =>
      this.categories = response)
      */
     
  
  }
 
  /**validation */

      // if (this.adminForm.controls.studentno.value && this.adminForm.controls.serialno.value &&
      //   this.adminForm.controls.surname.value && this.adminForm.controls.initials.value && this.adminForm.controls.itemName.value) {
  
  
      //   //this.router.navigate(['./admin-dashboard']);
  
      // } else {
      //   this.invalidLogin = true;
      // }
    
    /*end */




    getCatId(e){
      this.categoryData.id = e.id;
      this.itemData.itemType = this.categoryData.id;
      console.log(this.itemData.serialNum);
      console.log(this.itemData.firstName);
      console.log(this.itemData.lastName);
      console.log(this.itemData.phone);
      console.log(this.itemData.itemDescription);
      console.log(this.itemData.itemType);
      console.log(this.itemData.itemBrand);
      
      this.categoryName = e.name;
     
    }

    status: number;
    declareItems(){
      this.itemsService.PostItem(this.itemData).subscribe(
        data =>
          console.log(data)
      );

    
    }
}

