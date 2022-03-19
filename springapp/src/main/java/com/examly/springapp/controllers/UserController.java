package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.models.User;
import com.examly.springapp.service.UserService;

@RestController
public class UserController {
    
    @Autowired
    private UserService userService;

    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public boolean saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
}
