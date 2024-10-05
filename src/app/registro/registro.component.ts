import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {

  RegisterForm: FormGroup

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.RegisterForm = this.formBuilder.group({
      Name: [],
      LastName: [],
      Phone: [],
      UserName: [],
      Email: [],
      Password: [],
      Confirm_Password: []
    })
  }

  Registar() { }

}
