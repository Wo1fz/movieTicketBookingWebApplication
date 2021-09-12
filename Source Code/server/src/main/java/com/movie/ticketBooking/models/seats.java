package com.movie.ticketBooking.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

// Model for all seats in each movie
@Document
public class seats {
    @Id
    private String seatId;

    @Field
    private String seatOccupied;

    public seats() {
    }

    public seats(String seatId, String seatOccupied) {
        this.seatId = seatId;
        this.seatOccupied = seatOccupied;
    }

    public String getId() {
        return seatId;
    }

    public void setId(String seatId) {
        this.seatId = seatId;
    }
    
    public String getSeatOccupied() {
        return seatOccupied;
    }

    public void setSeatOccupied(String seatOccupied) {
        this.seatOccupied = seatOccupied;
    }
}
