package com.example.sportsleague.controllers;

import com.example.sportsleague.models.Match;
import com.example.sportsleague.repositories.ClubRepository;
import com.example.sportsleague.repositories.MatchRepository;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/matches")
public class MatchController {

    @Autowired
    MatchRepository matchRepository;

    @Autowired
    ClubRepository clubRepository;

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
        clubRepository.save(match.getHomeClub());
        clubRepository.save(match.getAwayClub());
        return new ResponseEntity<>(matchRepository.save(match), HttpStatus.OK);
    }

    @PatchMapping
    public ResponseEntity updateMatch(@RequestBody Match match) {
        return new ResponseEntity<>(matchRepository.save(match), HttpStatus.OK);
    }

    @PatchMapping(value = "/results")
    public ResponseEntity updateResult(@RequestBody Match match) {

        Match prevResult = matchRepository.findById(match.getId()).orElse(null);

        Match.removeResult(prevResult, match);
        Match.createResult(match, match.getHomeScore(), match.getAwayScore());

        clubRepository.save(match.getHomeClub());
        clubRepository.save(match.getAwayClub());
        return new ResponseEntity<>(matchRepository.save(match), HttpStatus.OK);
    }

    @DeleteMapping(value = "/results/{id}")
    public ResponseEntity<Match> deleteResult(@PathVariable Long id) {
        Match match = matchRepository.findById(id).orElse(null);
        Match.deleteResult(match);
        matchRepository.save(match);
        clubRepository.save(match.getHomeClub());
        clubRepository.save(match.getAwayClub());
        Match foundMatch = matchRepository.getOne(id);
        matchRepository.delete(foundMatch);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Match> deleteMatch(@PathVariable Long id) {
        Match foundMatch = matchRepository.getOne(id);
        matchRepository.delete(foundMatch);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }


}
