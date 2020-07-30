package fr.masterpiece.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.masterpiece.back.entities.Animal;
import fr.masterpiece.back.entities.Announcement;

public interface AnimalRepository extends JpaRepository<Animal, Long>{
	
	List<Animal> findByAnnouncement(Announcement announcement);
	

}
