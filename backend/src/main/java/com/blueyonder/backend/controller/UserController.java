package com.blueyonder.backend.controller;

import java.util.ArrayList;
import java.util.List;


import com.blueyonder.backend.model.User;
import com.blueyonder.backend.services.UserService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUsers")
    public List<User> fetchUserList() {
        return userService.fetchUserList();
    }

    @GetMapping("/getUser/{id}")
    public User fetchUserById(@PathVariable String id) {
        return userService.fetchUserById(id).orElse(null);
    }

    @PostMapping("/addUser")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUserById(@PathVariable String id) {
        return userService.deleteUserById(id);
    }
    
    

    @PostMapping("/login")
    public Boolean loginUser(@RequestBody User user) {
        List<User> userList = userService.fetchUserList(); // Fetch all users from the database
        for (User u : userList) {
            if (u.getUsername().equals(user.getUsername()) && u.getPassword().equals(user.getPassword())
            		) {
                    return true;
            }
        }
        return false;
    }
     
    @PostMapping("/apply")
    public ResponseEntity<String> applyToJob(@RequestBody User request) {
        try {
            java.util.Optional<User> userOptional = userService.fetchUserById(request.getId());
            if (userOptional.isPresent()) {
                User user = userOptional.get();
                if (user.getJobIds() == null) {
                    user.setJobIds(new ArrayList<>()); // Initialize jobIds list if null
                }
                List<String> jobIds = user.getJobIds();
                String newJobId = request.getUsername();
                if (jobIds.contains(newJobId)) {
                    return ResponseEntity.badRequest().body("Job ID already exists for this user");
                } else {
                    user.getJobIds().add(newJobId); // Add new job ID to the list
                    userService.saveUser(user);
                    return ResponseEntity.ok("Job application successful");
                }
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error applying to job");
        }
    }
    
    @GetMapping("/appliedJobs")
    public ResponseEntity<List<String>> getAppliedJobs(@RequestParam String userId) {
        try {
            java.util.Optional<User> userOptional = userService.fetchUserById(userId);
            if (userOptional.isPresent()) {
            	System.out.println("found");
                User user = userOptional.get();
                System.out.println(user.getJobIds());
                List<String> appliedJobs = user.getJobIds(); // Assuming getJobIds() returns a list of applied job IDs
                return ResponseEntity.ok(appliedJobs);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }


    
}
