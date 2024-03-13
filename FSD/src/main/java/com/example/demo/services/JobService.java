package com.example.demo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Job; // Assuming your Job entity class is in the com.example.demo.model package
import com.example.demo.repo.JobRepo;

@Service
public class JobService {
    
    @Autowired
    private JobRepo repo;

    public List<Job> fetchJobList() {
        return repo.findAll();
    }

    public Optional<Job> fetchJobById(int id) {
        return repo.findById(id);
    }

    public Job saveJob(Job job) {
        return repo.save(job);
    }

    public String deleteJobById(int id) {
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
