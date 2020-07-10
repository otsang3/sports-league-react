package com.example.sportsleague.controllers;

import com.example.sportsleague.models.Match;
import com.example.sportsleague.repositories.MatchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/matches")
public class MatchController {

    @Autowired
    MatchRepository matchRepository;

    @GetMapping
    public ResponseEntity<List<Match>> getAllMatches() {
        return new ResponseEntity<>(matchRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity findMatchById(@PathVariable Long id) {
        return new ResponseEntity<>(matchRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity postNewMatch(@RequestBody Match match) {
        return new ResponseEntity<>(matchRepository.save(match), HttpStatus.CREATED);
    }

    @PostMapping(value = "/createResult/{homeScore}/{awayScore}")
    public ResponseEntity createResult
            (@RequestBody Match match, @PathVariable("homeScore") int homeScore, @PathVariable("awayScore") int awayScore) {
        Match.createResult(match, homeScore, awayScore);
        return new ResponseEntity<>(matchRepository.save(match), HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity updateMatch(@RequestBody Match match) {
        return new ResponseEntity<>(matchRepository.save(match), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Match> deleteMatch(@PathVariable Long id) {
        Match foundMatch = matchRepository.getOne(id);
        matchRepository.delete(foundMatch);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
