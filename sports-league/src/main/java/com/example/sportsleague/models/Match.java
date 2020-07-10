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

    public static void createResult(Match match, int homeScore, int awayScore) {
        match.setHomeScore(homeScore);
        match.setAwayScore(awayScore);
        if (homeScore > awayScore) {
            match.setResult(match.getHomeClub().getId());
            match.homeClub.win();
            match.awayClub.lose();
        } else if (homeScore < awayScore) {
            match.setResult(match.getAwayClub().getId());
            match.homeClub.lose();
            match.awayClub.win();
        } else {
            match.setResult(0L);
            match.homeClub.draw();
            match.awayClub.draw();
        }
        match.homeClub.addGoals(homeScore);
        match.awayClub.addGoals(awayScore);
    }
}
