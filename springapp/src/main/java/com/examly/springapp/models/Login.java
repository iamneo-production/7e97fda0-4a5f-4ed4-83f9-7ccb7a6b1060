package com.examly.springapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Login {
    
    @Id
    @Column(name = "email", unique = true, nullable = false)
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    private String role;

    public Login() {

	}
	public Login(String email, String password, String role) {
		super();
		this.email = email;
		this.password = password;
        this.role = role;
	}
	
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
        this.email = email;
	}
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public String getRole() {
		return role;
	}
	public void setRole(String role) {
        this.role = role;
	}
    
}