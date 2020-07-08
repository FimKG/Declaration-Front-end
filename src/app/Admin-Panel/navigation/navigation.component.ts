import { Component, OnInit } from '@angular/core';
import { LandingComponent } from 'src/app/landing/landing.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  adminForm: FormGroup;

  constructor(
    private adminfmBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.adminForm = this.adminfmBuilder.group({
      studentno: [null, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(9),
        Validators.maxLength(9)]
      ],
      password: [null, [
        Validators.required,
        Validators.minLength(8)
        ]
      ],
      surname: [null, [
        Validators.required,
        Validators.pattern("[a-zA-Z ]*")]
      ],
      initials: [null, [
        Validators.required]
      ]
    
  
    });

  }

}
