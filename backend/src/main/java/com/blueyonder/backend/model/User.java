package com.blueyonder.backend.model;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;


@Document("User")
public class User {
   private String id;
   private String username;
   private String password;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public String getUsername() {
	return username;
}
public void setUsername(String username) {
	this.username = username;
}
public String getPassword() {
	return password;
}
public void setPassword(String password) {
	this.password = password;
}
   
   
}
