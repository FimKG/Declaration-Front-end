import { Component, OnInit, Input, Directive } from '@angular/core';
import { FormBuilder, Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Declare_Service } from 'src/app/_service/declare-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  savedChanges: boolean = false;

  constructor(
    private adminfmBuilder: FormBuilder,
    private admin_service: Declare_Service,
    private router: Router
    

  ) { }
  
  @Input() registerUser = {staffNo:'', fName:'',lName:'',email:'',phoneNo:'',address:'',password:''}
  
  ngOnInit() {

        /**validation 
        this.adminForm = this.adminfmBuilder.group({
          staffno: [null, [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(9),
            Validators.maxLength(9)]
          ],
          password:[null,[
            Validators.required,
            Validators.minLength(8)
             ]
          ],
          phone: [null, [
            Validators.required,
            Validators.pattern("^[0-9]*$"),
            Validators.minLength(10),
            Validators.maxLength(10)]
          ],
          surname: [null, [
            Validators.required,
            Validators.pattern("[a-zA-Z ]*")]
          ],
          name: [null, [
            Validators.required]
          ],
          gender: [null, [
            Validators.required]
          ]
        });
        /**end  */
  }

  registerUsers(){

    this.dataLoading = true;
    // console.log(this.registerUser)
    return this.admin_service.RegisterStaff(this.registerUser)
    .subscribe(
      res => {
        // if (res["errorCode"] != 0) {
          console.log(res.data)
         
        // } else {
        //   this.error = true;
        //   this.errorMessage =res["errorMessage"];
        //   this.dataLoading = false;
        // }
        // console.log(res)
    
    },
      err => {
        this.error = true;
        this.errorMessage = err.message;
        this.dataLoading = false;
        console.log(err.message)
      }
      // ,
      
      // () => {
      //   this.dataLoading = false;}
      ); 

    }

}

@Directive({
  selector: '[appConfirmPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting : ConfirmPassword,
    multi: true
  }]
})
export class ConfirmPassword implements Validator {
  @Input() appConfirmPassword: string;
   validate(control: AbstractControl): {[key: string]: any} | null {
     const controlToCompare = control.parent.get(this.appConfirmPassword);
     if (controlToCompare && controlToCompare.value !== control.value) { 
       return { 'notEqual': true };
     }
     return null;
   }
}
