package com.example.sportsleague.repositories;

import com.example.sportsleague.models.Club;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClubRepository extends JpaRepository<Club, Long> {
}
