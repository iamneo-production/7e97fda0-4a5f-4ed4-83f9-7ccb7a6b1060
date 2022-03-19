import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  role: string = "";
  
  getRole = (event: any) => {
    this.role = event;
  }
  
  getInfo = (email: String, password: String) => {
    if(email.search("@") > 0) {
      if(password.length > 5){
        console.log(email, password, this.role);
      }
      else{ 
        alert("Please enter a valid Password!");
      }
    }
    else{
      alert("Please enter a valid Email!");
    }
  }

}
