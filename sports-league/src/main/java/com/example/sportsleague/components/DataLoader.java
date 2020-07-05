package com.example.sportsleague.components;

import com.example.sportsleague.models.Club;
import com.example.sportsleague.models.Match;
import com.example.sportsleague.models.Player;
import com.example.sportsleague.repositories.ClubRepository;
import com.example.sportsleague.repositories.MatchRepository;
import com.example.sportsleague.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import java.time.LocalDateTime;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ClubRepository clubRepository;

    @Autowired
    PlayerRepository playerRepository;

    @Autowired
    MatchRepository matchRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        Club manUtd = new Club("Manchester United");
        Club manCity = new Club("Manchester City");
        Club liverpool = new Club("Liverpool");
        Club spurs = new Club("Tottenham Spurs");
        Club chelsea = new Club("Chelsea");
        Club leicesterCity = new Club("Leicester City");

        manUtd.setWins(5);
        manUtd.setDraws(2);
        manUtd.setLosses(1);
        manUtd.setGoalsFor(12);
        manUtd.setGoalsAgainst(2);
        manUtd.calculateGoalDiff();
        manUtd.calculatePts();
        manUtd.calculateMatchesPlayed();

        manCity.setWins(4);
        manCity.setDraws(3);
        manCity.setLosses(1);
        manCity.setGoalsFor(14);
        manCity.setGoalsAgainst(9);
        manCity.calculatePts();
        manCity.calculateMatchesPlayed();
        manCity.calculateGoalDiff();

        liverpool.setWins(5);
        liverpool.setDraws(0);
        liverpool.setLosses(3);
        liverpool.setGoalsFor(11);
        liverpool.setGoalsAgainst(9);
        liverpool.calculatePts();
        liverpool.calculateMatchesPlayed();
        liverpool.calculateGoalDiff();

        chelsea.setWins(2);
        chelsea.setDraws(4);
        chelsea.setLosses(2);
        chelsea.setGoalsFor(7);
        chelsea.setGoalsAgainst(8);
        chelsea.calculatePts();
        chelsea.calculateMatchesPlayed();
        chelsea.calculateGoalDiff();

        spurs.setWins(3);
        spurs.setDraws(3);
        spurs.setLosses(2);
        spurs.setGoalsFor(10);
        spurs.setGoalsAgainst(7);
        spurs.calculatePts();
        spurs.calculateMatchesPlayed();
        spurs.calculateGoalDiff();

        leicesterCity.setWins(1);
        leicesterCity.setDraws(3);
        leicesterCity.setLosses(4);
        leicesterCity.setGoalsFor(6);
        leicesterCity.setGoalsAgainst(11);
        leicesterCity.calculatePts();
        leicesterCity.calculateMatchesPlayed();
        leicesterCity.calculateGoalDiff();

        clubRepository.save(manUtd);
        clubRepository.save(manCity);
        clubRepository.save(liverpool);
        clubRepository.save(spurs);
        clubRepository.save(chelsea);
        clubRepository.save(leicesterCity);

        Match match1 = new Match(manUtd, manCity, LocalDateTime.parse("2020-07-04T12:45:00.00"));
        Match match2 = new Match(spurs, chelsea, LocalDateTime.parse("2020-07-04T15:00:00.00"));
        Match match3 = new Match(leicesterCity, liverpool, LocalDateTime.parse("2020-07-05T17:45:00.00"));

        match1.setResult(manUtd.getId());
        matchRepository.save(match3);
        matchRepository.save(match1);
        matchRepository.save(match2);



    }
}
