package com.blueyonder.backend.controller;

import java.util.List;

import com.blueyonder.backend.model.User;
import com.blueyonder.backend.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
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
