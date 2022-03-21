package com.examly.springapp.service;

import com.examly.springapp.models.User;
import com.examly.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.models.Login;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LoginService loginService;
    
    public boolean saveUser(User user) {
        String email = user.getEmail();
        
        //Checking wheather user already exists
        if(loginService.checkEmail(email) == true){
            return false;
        }

        Login tempLogin = new Login(user.getEmail(), user.getPassword());
        //Adding credentials to loginModel
        loginService.addUser(tempLogin);

        //Adding credentials to userModel
        userRepository.save(user);
        return true;
    }
    
}
