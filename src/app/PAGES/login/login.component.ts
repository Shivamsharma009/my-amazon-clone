import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {AuthService} from './../../SERVICE/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup
  

  constructor(private fb: FormBuilder,
    private auth: AuthService) { }

  ngOnInit(): void {
    this.createForm()
    
  }

  createForm() {
    this.LoginForm = this.fb.group({
      email:  [''],
      password: ['']
    })
  }


  signIn() {
    //console.log('values', this.LoginForm.value.email, 'password' , this.LoginForm.value.password);
    this.auth.signIn(this.LoginForm.value.email, this.LoginForm.value.password);
  }


  createAccount(){
    this.auth.signUp(this.LoginForm.value.email, this.LoginForm.value.password);
  }
  
}
