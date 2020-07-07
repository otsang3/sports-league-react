package com.example.sportsleague.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
public class Match {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties(value = {
            "matchesPlayed",
            "points",
            "wins",
            "draws",
            "losses",
            "goalsFor",
            "goalsAgainst",
            "goalDifference"

    })
    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Club homeClub;

    @JsonIgnoreProperties(value = {
            "matchesPlayed",
            "points",
            "wins",
            "draws",
            "losses",
            "goalsFor",
            "goalsAgainst",
            "goalDifference"

    })
    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Club awayClub;
    private LocalDateTime date;
    private Long result;
    private int homeScore;
    private int awayScore;

    public Match(Club homeClub, Club awayClub, LocalDateTime date) {
        this.homeClub = homeClub;
        this.awayClub = awayClub;
        this.date = date;
    }

    public Match() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Club getHomeClub() {
        return homeClub;
    }

    public void setHomeClub(Club homeClub) {
        this.homeClub = homeClub;
    }

    public Club getAwayClub() {
        return awayClub;
    }

    public void setAwayClub(Club awayClub) {
        this.awayClub = awayClub;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }

    public Long getResult() {
        return result;
    }

    public void setResult(Long result) {
        this.result = result;
    }

    public int getHomeScore() {
        return homeScore;
    }

    public void setHomeScore(int homeScore) {
        this.homeScore = homeScore;
    }

    public int getAwayScore() {
        return awayScore;
    }

    public void setAwayScore(int awayScore) {
        this.awayScore = awayScore;
    }

    public void createResult(int homeScore, int awayScore) {
        this.setHomeScore(homeScore);
        this.setAwayScore(awayScore);
        if (homeScore > awayScore) {
            this.setResult(this.getHomeClub().getId());
            this.homeClub.win();
            this.awayClub.lose();
        } else if (homeScore < awayScore) {
            this.setResult(this.getAwayClub().getId());
            this.homeClub.lose();
            this.awayClub.win();
        } else {
            this.setResult(0L);
            this.homeClub.draw();
            this.awayClub.draw();
        }
        this.homeClub.addGoals(homeScore);
        this.awayClub.addGoals(awayScore);
    }
}
