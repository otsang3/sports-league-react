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

    @OneToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Club homeClub;

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

    public static void removeResult(Match prevMatch, Match newMatch) {
        newMatch.getHomeClub().removeGoalsConceded(prevMatch.getAwayScore());
        newMatch.getHomeClub().removeGoalsFor(prevMatch.getHomeScore());
        newMatch.getAwayClub().removeGoalsConceded(prevMatch.getHomeScore());
        newMatch.getAwayClub().removeGoalsFor(prevMatch.getAwayScore());

        if (prevMatch.getHomeScore() > prevMatch.getAwayScore()) {
            newMatch.getHomeClub().removeResult("win");
            newMatch.getAwayClub().removeResult("loss");
        } else if (prevMatch.getHomeScore() < prevMatch.getAwayScore()) {
            newMatch.getHomeClub().removeResult("loss");
            newMatch.getAwayClub().removeResult("win");
        } else {
            newMatch.getHomeClub().removeResult("draw");
            newMatch.getAwayClub().removeResult("draw");
        }
        newMatch.homeClub.calculateGoalDiff();
        newMatch.awayClub.calculateGoalDiff();
    }

    public static void deleteResult(Match match) {
        match.getHomeClub().removeGoalsConceded(match.getAwayScore());
        match.getHomeClub().removeGoalsFor(match.getHomeScore());
        match.getAwayClub().removeGoalsConceded(match.getHomeScore());
        match.getAwayClub().removeGoalsFor(match.getAwayScore());

        if (match.getHomeScore() > match.getAwayScore()) {
            match.getHomeClub().removeResult("win");
            match.getAwayClub().removeResult("loss");
        } else if (match.getHomeScore() < match.getAwayScore()) {
            match.getHomeClub().removeResult("loss");
            match.getAwayClub().removeResult("win");
        } else { match.getHomeClub().removeResult("draw");
            match.getAwayClub().removeResult("draw");
        }
        match.homeClub.calculateGoalDiff();
        match.awayClub.calculateGoalDiff();
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
        match.homeClub.concedeGoals(awayScore);
        match.awayClub.concedeGoals(homeScore);
        match.homeClub.calculateGoalDiff();
        match.awayClub.calculateGoalDiff();
    }
}
