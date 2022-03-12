package com.examly.springapp.service;

import com.examly.springapp.repository.LoginRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import com.examly.springapp.models.Login;

@Service
public class LoginService {
    
    @Autowired
    private LoginRepository loginRepository;

    public boolean checkUser(Login login) {

        String email = login.getEmail();
        String password = login.getPassword();

        try{
            Optional<Login> details = loginRepository.findById(email);
            Login userDetails = details.get();
            String dbEmail = userDetails.getEmail();
            String dbPassword = userDetails.getPassword();
            if( (email.equals(dbEmail)) && (password.equals(dbPassword)) ){
                return true;
            }
            return false;
        }catch(Exception e){
            return false;
        }

    }

}