import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../main/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isloader = false;
  loginForm: FormGroup;
  constructor(public router: Router, public authservice: AuthService) {}

  ngOnInit(): void {
    this.fieldValidation();
    this.isloader = false;
  }

  fieldValidation(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  fieldValues(): any {
    return this.loginForm.value;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.isloader = true;
      this.authservice.userLogin(this.loginForm.value).subscribe(
        (result) => {
          if (result) {
            this.loginSuccess();
          } else { 
            this.loginFailure('Something went wrong');
          }
        },
        (err) => {
          this.loginFailure(err);
        }
      );
    }
  }

  loginSuccess(): void {
    const formval = this.loginForm.value;
    localStorage.setItem('Email', formval.email);
    this.router.navigate(['/main']);
  }

  loginFailure(error: string): void {
    alert(error);
  }
}
