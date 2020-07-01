package com.example.sportsleague.controllers;

import com.example.sportsleague.repositories.ClubRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClubController {

    @Autowired
    ClubRepository clubRepository;
}
