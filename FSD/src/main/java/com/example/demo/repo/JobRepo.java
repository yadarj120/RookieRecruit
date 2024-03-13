package com.example.demo.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.demo.model.Job; // Assuming your Job entity class is in the com.example.demo.model package

public interface JobRepo extends MongoRepository<Job, Integer> {

}
