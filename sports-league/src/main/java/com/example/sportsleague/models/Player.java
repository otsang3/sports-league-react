package com.example.sportsleague.models;

import javax.persistence.*;

@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "club_id")
    private Club club;

    public Player(String name, Club club) {
        this.name = name;
        this.club = club;
    }

    
}
