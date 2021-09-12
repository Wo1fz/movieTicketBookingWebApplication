package com.movie.ticketBooking.controllers;

import java.util.List;

import com.movie.ticketBooking.models.movies;
import com.movie.ticketBooking.repositories.moviesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
 
@RestController
@CrossOrigin(origins = "https://usmovie-my.netlify.app/", methods={RequestMethod.GET, RequestMethod.PATCH})
public class movieController {
    @Autowired
    private final moviesRepository moviesRepository;
    
    @Autowired
    public movieController(moviesRepository moviesRepository) {
        this.moviesRepository = moviesRepository;
    }
    
    // Returning all the seats data
    @GetMapping("/movies")
    public List<movies> fetchMovies() {
        return moviesRepository.findAll();
    }
    
    // Update the db for purchase
    @PatchMapping("/movies/purchase/{id}")
    public List<movies> updateMovies(@PathVariable String id, @RequestBody movies movie) {
        // Get movie with id from the payload
        movies updateMovie = moviesRepository.findById(id).orElseThrow(
                () -> new RuntimeException("Cannot find movie by the id = " + id));

        // Update seat status for purchase
        updateMovie.setAllSeats(movie.getAllSeats());
        moviesRepository.save(updateMovie);
        
        return moviesRepository.findAll();
    }
}