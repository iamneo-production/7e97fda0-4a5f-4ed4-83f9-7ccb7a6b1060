package com.examly.springapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.examly.springapp.models.User;
import com.examly.springapp.service.UserService;

@RestController
@CrossOrigin(origins = "https://8081-eaeeadbaffecdceaddadfedfeceadbceedce.examlyiopb.examly.io")
// @CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    
    @Autowired
    private UserService userService;

    //Adding credentials to userModel
    @RequestMapping(method = RequestMethod.POST, value = "/signup")
    public ResponseEntity<Boolean> saveUser(@RequestBody User user){
        return new ResponseEntity<>(userService.saveUser(user), HttpStatus.OK);
    }
}
