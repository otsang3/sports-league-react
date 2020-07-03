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
        manUtd.setGoalsFor(12);
        manUtd.setGoalsAgainst(2);
        manUtd.calculateGoalDiff();
        manUtd.calculatePts();
        manUtd.calculateMatchesPlayed();

        manCity.setWins(0);
        manCity.setDraws(5);
        manCity.setLosses(7);
        manCity.setGoalsFor(5);
        manCity.setGoalsAgainst(20);
        manCity.calculatePts();
        manCity.calculateMatchesPlayed();
        manCity.calculateGoalDiff();

        clubRepository.save(manUtd);
        clubRepository.save(manCity);
        clubRepository.save(liverpool);
        clubRepository.save(spurs);
        clubRepository.save(chelsea);
        clubRepository.save(leicesterCity);

        Match match1 = new Match(manUtd, manCity, LocalDateTime.parse("2018-12-30T19:34:50.63"));
        Match match2 = new Match(manCity, manUtd, LocalDateTime.parse("2018-12-30T19:34:50.63"));


        matchRepository.save(match1);
        matchRepository.save(match2);


    }
}
