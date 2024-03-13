package com.blueyonder.backend.model;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

//@Entity
//@Getter
@Document("Job")
public class Job {
	@Id
	private int id;
	private String name;
	private String desc;
	private String location;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public String getlocation() {
		return location;
	}
	public void setPrice(String location) {
		this.location = location;
	}
	
	 
}
