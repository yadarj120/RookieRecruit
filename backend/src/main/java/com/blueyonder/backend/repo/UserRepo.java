package com.blueyonder.backend.repo;

import com.blueyonder.backend.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepo extends MongoRepository<User, Integer> {

}
