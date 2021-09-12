package com.movie.ticketBooking.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.movie.ticketBooking.models.movies; 

@Repository
public interface moviesRepository extends MongoRepository<movies, String> {}