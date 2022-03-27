package com.examly.springapp.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Column;
// import javax.persistence.GeneratedValue;
// import org.hibernate.annotations.GenericGenerator;

@Entity
public class User {

    @Id
    @Column(name = "email", unique = true, nullable = false)
	private String email;

    @Column(name = "password")
	private String password;

    @Column(name = "userName")
	private String userName;

    @Column(name = "mobileNo")
	private String mobileNo;

    @Column(name = "active")
	private boolean active;

    @Column(name = "role")
	private String role;
	
	public User() {
		super();
	}

	public User(String email, String password, String userName, String mobileNo, boolean active, String role) {
		super();
		this.email = email;
		this.password = password;
		this.userName = userName;
		this.mobileNo = mobileNo;
		this.active = active;
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

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		this.active = active;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
}

