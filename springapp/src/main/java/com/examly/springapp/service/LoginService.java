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
        String role = login.getRole();

        try{
            Optional<Login> details = loginRepository.findById(email);
            Login userDetails = details.get();
            String dbEmail = userDetails.getEmail();
            String dbPassword = userDetails.getPassword();
            String dbRole = userDetails.getRole();
            
            //Validating user credential
            if( (email.equals(dbEmail)) && (password.equals(dbPassword)) && (role.equals(dbRole))){
                return true;
            }
            return false;
        }catch(Exception e){
            return false;
        }

    }


    //Adding user credentials to login table
    public void addUser(Login login){
        loginRepository.save(login);
    }


    //Checking for email
    public boolean checkEmail(String email){
        try{
            Optional<Login> temp = loginRepository.findById(email);
            String dbEmail = temp.get().getEmail();
            if(dbEmail.equals(email)){
                return true;
            }
            return false;
        }
        catch(Exception e){
            return false;
        }
    }

}