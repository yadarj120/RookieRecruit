package com.blueyonder.backend.services;

import java.util.List;
import java.util.Optional;

import com.blueyonder.backend.model.User;
import com.blueyonder.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    
    @Autowired
    private UserRepo repo;

    public List<User> fetchUserList() {
        return repo.findAll();
    }

    public Optional<User> fetchUserById(int id) {
        return repo.findById(id);
    }

    public User saveUser(User user) {
        return repo.save(user);
    }

    public String deleteUserById(int id) {
        String result;
        try {
            repo.deleteById(id);
            result = "Deleted ";
        } catch (Exception e) {
            result = "Not Deleted";
        }
        return result;
    }
}
