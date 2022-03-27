import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from '../services/User/signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private router: Router, private userData: SignupService) {}
  user={
    email:'',
    active:"true",
    password:'',
    userName:'',
    mobileNo:'',
    role:'customer'
  };
  reEnteredpassword:'' | undefined;
  ngOnInit(): void {
  }

  //Snackbar
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }

  //Form validation
  formSubmit(){
    if(this.user.email == '' || this.user.password == '' || this.user.mobileNo == '' || this.user.userName == '' || this.reEnteredpassword == ''){
      this.openSnackBar('Empty input fields','X');
    }
    else if(this.user.email.search("@") < 0){
      this.openSnackBar('Invalid email','X');
    }
    else if(this.user.password.length < 5){
      this.openSnackBar('Password length must be at least 5 characters','X');
    }
    else if(this.user.password != this.reEnteredpassword){
      this.openSnackBar('Password mismatch','X');
    }
    else if(this.user.mobileNo.length != 10){
      this.openSnackBar('Invalid mobilenumber','X');
    }
    else if(this.user.userName.length < 4){
      this.openSnackBar('Username length must be at least 4 characters','X');
    }
    else{

      localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");

      console.warn(this.user);
      this.getUserFormData(this.user);

    }
  }
  
  //Posting User credentials to Database
  getUserFormData(data: any){
    
    this.userData.saveUser(data).subscribe((result) => {
      if(result==true)
      {
        localStorage.setItem('email', this.user.email);
        this.openSnackBar('Successfully Registered','X');
        this.router.navigate(['home']);
      }
      else{
        this.openSnackBar('User already exists','X');
      }
    })
  }
}


