import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  reactiveForm: FormGroup | any;
  hide = true;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,]),
      lastName: new FormControl('', [Validators.required,]),
      email:  new FormControl('', [Validators.required, Validators.email],),
      password:  new FormControl('', [Validators.required, Validators.pattern(/[A-Z]/)]),
      dateOfBirth: new FormControl('', [Validators.required]),
    })
  }

  handleSubmit() {
    console.log("this.form.value");
    console.log(this.reactiveForm.value);
    this.reactiveForm.reset();
  }

  getErrorMessage() {
    if (this.reactiveForm.controls['email'].hasError('required')) {
      return 'You must enter a email. Required!';
    }
    return this.reactiveForm.controls['email'].hasError('email') ? 'Not a valid email' : '';
  }

  getErrorPassword() {
    if (this.reactiveForm.controls['password'].hasError('required')) {
      return 'You must enter a password. Required!';
    }
    return this.reactiveForm.controls['password'].hasError('pattern') ? 'Password must contain  at least one letter  with upper case': '';
  }
}
