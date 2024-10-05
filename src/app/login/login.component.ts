import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  LoginForm: FormGroup;
  ErrorUserNameOrEmail: boolean = false

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.LoginForm = this.formBuilder.group({
      User_Email: ['', [Validators.required]],
      Password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get DatosLogin() { return this.LoginForm.value }

  usernameOrEmailValidator(User_Email: string) {
    //const value = control.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const usernamePattern = /^[a-zA-Z0-9]+$/;

    if (emailPattern.test(User_Email) || usernamePattern.test(User_Email)) {
      console.log("null username or email")
      this.ErrorUserNameOrEmail = false
      return null;
    }
    console.log({ 'invalidUsernameOrEmail': true })
    this.ErrorUserNameOrEmail = true
    return { 'invalidUsernameOrEmail': true };
  }



  login() {
    console.log(this.DatosLogin)
    this.usernameOrEmailValidator(this.DatosLogin.User_Email)
  }

}
