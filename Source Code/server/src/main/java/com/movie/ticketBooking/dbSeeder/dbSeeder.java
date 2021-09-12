package com.movie.ticketBooking.dbSeeder;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;
import org.springframework.boot.CommandLineRunner;

import com.movie.ticketBooking.models.movies;
import com.movie.ticketBooking.models.seats;
import com.movie.ticketBooking.repositories.moviesRepository;


@Component
public class dbSeeder implements CommandLineRunner {
    private moviesRepository moviesRepository;

    public dbSeeder(moviesRepository moviesRepository) {
        this.moviesRepository = moviesRepository;
    }

    // Initialize all the seats for the movie
    List<seats> allSeats = new ArrayList<seats>();  
    public void initializeSeats() {
        for (int columns = 0; columns < 10; columns++) {
            char column = 'A';
            column = (char) (column + columns);

            for (int rows = 0; rows < 9; rows++) {
                String seatId = Character.toString(column) + rows;

                allSeats.add(new seats(seatId, "False"));
            }
        }
    }
    
    @Override
    public void run(String... strings) throws Exception {
        // Initialize the movie database if none is found
        initializeSeats();

        if(moviesRepository.findAll().isEmpty()) {
        this.moviesRepository.save( new movies("1", "Cicakmans Homecoming", allSeats, 6, "13 September 2021, 12.00pm"));
        }
    }
}


