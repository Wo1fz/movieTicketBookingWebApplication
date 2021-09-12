package com.movie.ticketBooking.models;

import java.util.ArrayList;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

// Model for all movies
@Document(collection = "movies")
public class movies {
    @Id
    private String movieId;

    @Field
    private String movieName;

    @Field
    private List<seats> allSeats;

    @Indexed
    private int seatPrice;

    @Field
    private String movieDateTime;

    protected movies() { this.allSeats = new ArrayList<>(); }

    public movies(String movieId, String movieName, List<seats> allSeats, int seatPrice, String movieDateTime) {
        this.movieId = movieId;
        this.movieName = movieName;
        this.allSeats = allSeats;
        this.seatPrice = seatPrice;
        this.movieDateTime = movieDateTime;
    }

    public String getMovieId() {
        return movieId;
    }

    public void setMovieId(String movieId) {
        this.movieId = movieId;
    }

    public String getMovieName() {
        return movieName;
    }

    public void setMovieName(String movieName) {
        this.movieName = movieName;
    }

    public List<seats> getAllSeats() {
        return allSeats;
    }

    public void setAllSeats(List<seats> allSeats) {
        this.allSeats = allSeats;
    }

    public int getSeatPrice() {
        return seatPrice;
    }

    public void setSeatPrice(int seatPrice) {
        this.seatPrice = seatPrice;
    }

    public String getMovieDateTime() {
        return movieDateTime;
    }

    public void setMovieDateTime(String movieDateTime) {
        this.movieDateTime = movieDateTime;
    }
}
