package com.blueyonder.backend.controller;

import java.util.List;

import com.blueyonder.backend.model.Job;
import com.blueyonder.backend.services.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class JobController {

    @Autowired
    private JobService service;

    @GetMapping("/getJob")
    public List<Job> fetchJobList() {
        return service.fetchJobList();
    }

    @GetMapping("/getJob/{id}")
    public Job fetchJobById(@PathVariable int id) {
        return service.fetchJobById(id).orElse(null);
    }

    @PostMapping("/addJob")
    public Job saveJob(@RequestBody Job job) {
        return service.saveJob(job);
    }

    @DeleteMapping("/deleteJob/{id}")
    public String deleteJobById(@PathVariable int id) {
        return service.deleteJobById(id);
    }
}
