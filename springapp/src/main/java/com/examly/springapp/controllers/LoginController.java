package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.models.Login;
import com.examly.springapp.service.LoginService;

@RestController
class LoginController{

    @Autowired
    private LoginService loginService;

    //Checking whether user credentials are present
    @RequestMapping(method = RequestMethod.POST, value = "/login")
    public ResponseEntity<Boolean> checkUser(@RequestBody Login login){
        return new ResponseEntity<>(loginService.checkUser(login) ,HttpStatus.OK);
    }


	
}
