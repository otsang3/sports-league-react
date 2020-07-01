package com.example.sportsleague.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;

    @OneToMany(mappedBy = "club")
    private List<Player> players;

    public Club(String name) {
        this.name = name;
        this.players = new ArrayList<>();
    }
}
