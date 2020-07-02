package com.example.sportsleague.controllers;

import com.example.sportsleague.models.Club;
import com.example.sportsleague.repositories.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/clubs")
public class ClubController {

    @Autowired
    ClubRepository clubRepository;

    @GetMapping
    public ResponseEntity<List<Club>> getAllClubs() {
        return new ResponseEntity<>(clubRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity getClub(@PathVariable Long id) {
        return new ResponseEntity<>(clubRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Club> postClub(@RequestBody Club club) {
        clubRepository.save(club);
        return new ResponseEntity<>(club, HttpStatus.CREATED);
    }

    @PatchMapping
    public ResponseEntity<Club> updateClub(@RequestBody Club club) {
        clubRepository.save(club);
        return new ResponseEntity<>(club, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity deleteClub(@PathVariable Long id) {
        Club foundClub = clubRepository.getOne(id);
        clubRepository.delete(foundClub);
        return new ResponseEntity(null, HttpStatus.OK);
    }
}
