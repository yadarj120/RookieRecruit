package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/getUsers")
    public List<User> fetchUserList() {
        return userService.fetchUserList();
    }

    @GetMapping("/getUser/{id}")
    public User fetchUserById(@PathVariable int id) {
        return userService.fetchUserById(id).orElse(null);
    }

    @PostMapping("/addUser")
    public User saveUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @DeleteMapping("/deleteUser/{id}")
    public String deleteUserById(@PathVariable int id) {
        return userService.deleteUserById(id);
    }
}
