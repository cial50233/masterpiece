package fr.masterpiece.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.masterpiece.back.entities.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long>{

}
