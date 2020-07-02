package com.example.sportsleague.controllers;

import com.example.sportsleague.models.Player;
import com.example.sportsleague.repositories.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/players")
public class PlayerController {

    @Autowired
    PlayerRepository playerRepository;

    @GetMapping
    public ResponseEntity<List<Player>> getAllPlayers() {
        return new ResponseEntity<>(playerRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getPlayer(@PathVariable Long id) {
        return new ResponseEntity<>(playerRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping()
    public ResponseEntity<Player> postPlayer(@RequestBody Player player) {
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/{id}")
    public ResponseEntity<Player> updatePlayer(@RequestBody Player player) {
        playerRepository.save(player);
        return new ResponseEntity<>(player, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Player> deletePlayer(@PathVariable Long id) {
        Player foundPlayer = playerRepository.getOne(id);
        playerRepository.delete(foundPlayer);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
