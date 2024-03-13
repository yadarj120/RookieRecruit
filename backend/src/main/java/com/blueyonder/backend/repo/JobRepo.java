package com.blueyonder.backend.repo;

import com.blueyonder.backend.model.Job;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRepo extends MongoRepository<Job, Integer> {

}
