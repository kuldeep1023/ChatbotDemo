import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from '../main/services/auth/auth.service';
import { AuthServiceMock } from '../test/mocks/services/auth-service-mock';

import { LoginComponent } from './login.component';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule, RouterTestingModule],
      providers: [ { provide : AuthService, useClass : AuthServiceMock } ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show loader on component init', () => {
    expect(component.isloader).toBe(false);
  });

  it('should contain a defualt value for the login form', () => {
    expect(component.loginForm.value).toEqual({ email: '', password: '' });
  });

  it('should login user if the form is vaild and should navigate to the dashboard', () => {
  component.loginForm.setValue({email: 'admin@gmail.com', password: 'Admin'});
  spyOn(component.router, 'navigate');
  component.onSubmit();
  expect(component.router.navigate).toHaveBeenCalledWith(['/main']);
  // spyOn(component.authservice, 'userLogin');
  // expect(component.authservice.userLogin).toHaveBeenCalled();
  // expect(component.loginForm.value).toEqual({email: 'admin@gmail.com', password: 'Admin'});
});

  it('should not do login call  user if the form is not vaild', () => {
  component.loginForm.setValue({email: '', password: ''});
  spyOn(component.router, 'navigate');
  component.onSubmit();
  expect(component.router.navigate).not.toHaveBeenCalled();
});

  it('should call loginFailure when server return an error on login form submit', () => {
  component.loginForm.setValue({email: 'admin@gmail.com', password: 'admin'});
  spyOn(component.router, 'navigate');
  spyOn(component, 'loginFailure');
  component.onSubmit();
  expect(component.router.navigate).not.toHaveBeenCalled();
  expect(component.loginFailure).toHaveBeenCalled();
});

});
