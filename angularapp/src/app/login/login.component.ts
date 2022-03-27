import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../services/Login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user={
    email:'',
    password:''
  };
  constructor(private _snackBar: MatSnackBar, private router: Router, private userData: LoginService) {
    
  }

  ngOnInit(): void {
  }


  //Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  formSubmit(){
    if(this.user.email == '' || this.user.password == ''){
      this.openSnackBar('Empty input fields','X');
      return;
    }
    console.warn(this.user);

    //Entering into admin portal
    if(this.user.email === "admin" || this.user.password == "admin"){
      this.openSnackBar('Admin portal','X');
      this.router.navigate(['admin']);
    }
    else{
      this.checkUserFormData(this.user);
    }
  }

  //Checking the user credentials in login database 
  checkUserFormData(data: any) {
    this.userData.checkUser(data).subscribe((result) => {
      if(result==true)
      {
        localStorage.setItem('email', this.user.email);
        this.router.navigate(['home']);
      }
      else{
        this.openSnackBar('Invalid Login credentials','X');
      }
    })
  }
}
