package com.example.sportsleague.repositories;

import com.example.sportsleague.models.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match, Long> {
}
