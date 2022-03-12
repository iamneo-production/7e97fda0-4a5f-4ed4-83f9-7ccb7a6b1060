package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.models.Login;
import com.examly.springapp.service.LoginService;

@RestController
class LoginController{

    @Autowired
    private LoginService loginService;
    
    @RequestMapping("/login")
    public boolean checkUser(@RequestBody Login login){
        return loginService.checkUser(login);
    }


	
}
