package com.blueyonder.backend.model;

import java.util.List;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;


@Document("User")
public class User {
   private String id;
   private String username;
   private String password;
   private List<String> jobIds;
public String getId() {
	return id;
}
public void setId(String id) {
	this.id = id;
}
public List<String> getJobIds() {
	return jobIds;
}
public void setJobIds(List<String> jobIds) {
	this.jobIds = jobIds;
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
