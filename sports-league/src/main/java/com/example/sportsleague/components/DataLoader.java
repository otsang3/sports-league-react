package com.example.sportsleague.components;

import com.example.sportsleague.models.Club;
import com.example.sportsleague.models.Player;
import com.example.sportsleague.repositories.ClubRepository;
import com.example.sportsleague.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    ClubRepository clubRepository;

    @Autowired
    PlayerRepository playerRepository;

    public DataLoader() {
    }

    public void run(ApplicationArguments args) {

        Club manUtd = new Club("Manchester United");
        Club manCity = new Club("Manchester City");
        Club liverpool = new Club("Liverpool");
        Club tottenhamSpurs = new Club("Tottenham Spurs");
        Club chelsea = new Club("Chelsea");
        Club leicesterCity = new Club("Leicester City");

        clubRepository.save(manUtd);
        clubRepository.save(manCity);
        clubRepository.save(liverpool);
        clubRepository.save(tottenhamSpurs);
        clubRepository.save(chelsea);
        clubRepository.save(leicesterCity);


    }
}
