package fr.masterpiece.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.masterpiece.back.entities.Animal;

public interface AnimalRepository extends JpaRepository<Animal, Long>{

}
