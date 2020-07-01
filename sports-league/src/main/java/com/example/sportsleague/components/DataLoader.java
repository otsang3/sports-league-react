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

        Club barcelonaFC = new Club("Barcelona FC");
        Player messi = new Player("Lionel Messi", barcelonaFC);

        clubRepository.save(barcelonaFC);
        playerRepository.save(messi);
        barcelonaFC.addPlayer(messi);
    }
}
