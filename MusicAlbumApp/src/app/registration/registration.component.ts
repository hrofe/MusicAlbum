import { Component, OnInit } from '@angular/core';
import { DiskService } from '../services/disk/disk.service';
import { Router } from '@angular/router';
import {  FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit {
  form = this.fb.group({
    email: new FormControl('', [Validators.required,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    username: new FormControl('', [Validators.required,Validators.pattern(/^[a-z][a-z0-9]*$/i)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9])*[^\s]*$/)])
  });

  isEditing: boolean = false;
  submitted = false;
  isFormValid = true;

  constructor( private fb: FormBuilder,
    private diskService:DiskService,
    private router:Router
  ){}

  


  ngOnInit(): void {
    this.form.statusChanges.subscribe(status => {
      console.log('statusChanges Status is ' + status);
      this.isFormValid = status === 'VALID';
    });

    console.log("~~~~~~~~ Regestration Form Loaded ~~~~~~~");
  }

  returnToList(){
    this.diskService.setCurrentRoute("HomePage");
    this.router.navigate(['HomePage']);
  }




onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (!this.isFormValid) {
    console.log("Invalid", this.form.errors);
    return;
  }

 
  else {
  
  }


  // clean up
  this.form.reset();
}
}


