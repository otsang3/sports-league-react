package com.example.sportsleague.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Club {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int matchesPlayed;
    private int points;
    private int wins;
    private int draws;
    private int losses;
    private int goalsFor;
    private int goalsAgainst;
    private int goalDifference;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "club")
    private List<Player> players;

    public Club(String name) {
        this.name = name;
        this.players = new ArrayList<>();
    }

    public Club() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }

    public int getWins() {
        return wins;
    }

    public void setWins(int wins) {
        this.wins = wins;
    }

    public int getDraws() {
        return draws;
    }

    public void setDraws(int draws) {
        this.draws = draws;
    }

    public int getLosses() {
        return losses;
    }

    public void setLosses(int losses) {
        this.losses = losses;
    }

    public int getGoalsFor() {
        return goalsFor;
    }

    public void setGoalsFor(int goalsFor) {
        this.goalsFor = goalsFor;
    }

    public int getGoalsAgainst() {
        return goalsAgainst;
    }

    public void setGoalsAgainst(int goalsAgainst) {
        this.goalsAgainst = goalsAgainst;
    }

    public int getGoalDifference() {
        return goalDifference;
    }

    public void setGoalDifference(int goalDifference) {
        this.goalDifference = goalDifference;
    }

    public int getPoints() {
        return points;
    }

    public int getMatchesPlayed() {
        return matchesPlayed;
    }

    public void setMatchesPlayed(int matchesPlayed) {
        this.matchesPlayed = matchesPlayed;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public void addPlayer(Player player) {
        this.players.add(player);
    }

    public void calculatePts() {
        this.points = (this.wins * 3) + (this.draws);
    }

    public void calculateGoalDiff() {
        this.goalDifference = this.goalsFor - this.goalsAgainst;
    }

    public void calculateMatchesPlayed() {
        this.matchesPlayed = this.wins + this.draws + this.losses;
    }

    public void win() {
        this.wins += 1;
        this.calculateMatchesPlayed();
    }

    public void draw() {
        this.draws += 1;
        this.calculateMatchesPlayed();
    }

    public void lose() {
        this.losses += 1;
        this.calculateMatchesPlayed();
    }

    public void addGoals(int goals) {
        this.goalsFor += goals;
    }

    public void removeGoalsFor(int goals) {
        this.goalsFor -= goals;
    }

    public void concedeGoals(int goals) {
        this.goalsAgainst += goals;
    }

    public void removeGoalsConceded(int goals) {
        this.goalsAgainst -= goals;
    }

    public void removeResult(String result) {
        if (result == "win") {
            this.wins -= 1;
        } else if (result == "loss") {
            this.losses -= 1;
        } else {
            this.draws -= 1;
        }

        this.matchesPlayed -= 1;
    }

    public void removeWin() {
        this.wins -=1;
        this.matchesPlayed -=1;
    }
}
