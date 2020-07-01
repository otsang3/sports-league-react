package com.example.sportsleague.models;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Player {

    @Id
    private int id;
    private String name;

    public Player(int id, String name) {
        this.id = id;
        this.name = name;
    }

    
}
