package com.blueyonder.backend.services;

import java.util.List;
import java.util.Optional;

import com.blueyonder.backend.model.Job;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.blueyonder.backend.repo.JobRepo;

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
