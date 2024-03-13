package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.User; // Assuming your Job entity class is in the com.example.demo.model package

public interface UserRepo extends MongoRepository<User, Integer> {

}
