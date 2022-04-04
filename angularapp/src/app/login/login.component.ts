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

    //Entering into admin portal
    if(this.user.email === "admin" || this.user.password == "admin"){
      localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
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
        localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
        this.router.navigate(['home']);
      }
      else{
        this.openSnackBar('Invalid Login credentials','X');
      }
    })
  }
}
