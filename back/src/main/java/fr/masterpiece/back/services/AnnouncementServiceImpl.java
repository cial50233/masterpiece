package fr.masterpiece.back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.masterpiece.back.dtos.AnimalDto;
import fr.masterpiece.back.dtos.AnnouncementDto;
import fr.masterpiece.back.entities.Account;
import fr.masterpiece.back.entities.Animal;
import fr.masterpiece.back.entities.Announcement;
import fr.masterpiece.back.repositories.AccountRepository;
import fr.masterpiece.back.repositories.AnimalRepository;
import fr.masterpiece.back.repositories.AnnouncementRepository;

@Service
public class AnnouncementServiceImpl implements AnnouncementService {

	@Autowired
    private AccountRepository accountRepository;
	
	@Autowired
    private AnnouncementRepository announcementRepository;
	
	@Autowired
    private AnimalRepository animalRepository;
	
	@Override
	public void createAnnouncement(AnnouncementDto dto) {

        Announcement ann = new Announcement();
        ann.setJobPlace(dto.getJobPlace());
        ann.setAddress(dto.getAddress());
        ann.setStartDate(dto.getStartDate());
        ann.setEndDate(dto.getEndDate());

        Account account = accountRepository.findById(dto.getOwnerId()).get();
        ann.setOwner(account);

        announcementRepository.save(ann);
        
        for (AnimalDto anima : dto.getAnimals()) {

    	    Animal animal = new Animal();
    	    animal.setAnimalName(anima.getAnimalName());
    	    animal.setAnimalType(anima.getAnimalType());
    	    animal.setAnnouncement(ann);
		    animalRepository.save(animal);

    	}

	}

}
