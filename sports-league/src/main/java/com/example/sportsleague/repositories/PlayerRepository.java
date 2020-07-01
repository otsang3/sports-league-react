package com.example.sportsleague.repositories;

import com.example.sportsleague.models.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepository extends JpaRepository<Player, Long> {

}
