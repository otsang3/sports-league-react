package com.example.sportsleague;

import com.example.sportsleague.models.Club;
import com.example.sportsleague.models.Match;
import com.example.sportsleague.repositories.ClubRepository;
import com.example.sportsleague.repositories.MatchRepository;
import org.junit.Before;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class MatchTesting {

    @Autowired
    ClubRepository clubRepository;

    @Autowired
    MatchRepository matchRepository;

    @Test
    public void canCreateResult() {
        Club manUtd = new Club("Manchester United");
        Club manCity = new Club("Manchester City");
        Match match1 = new Match(manUtd, manCity, LocalDateTime.parse("2020-07-04T12:45:00.00"));
        Match.createResult(match1,5,0);

        assertEquals(1, manUtd.getWins());
        assertEquals(1, manCity.getLosses());
        assertEquals(1, manUtd.getMatchesPlayed());
        assertEquals(1, manUtd.getMatchesPlayed());
        assertEquals(5, manUtd.getGoalsFor());
        assertEquals(0, manCity.getGoalsFor());
    }
}
