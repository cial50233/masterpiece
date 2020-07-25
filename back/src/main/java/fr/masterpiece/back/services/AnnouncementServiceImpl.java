package fr.masterpiece.back.services;

import org.modelmapper.ModelMapper;
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
	
    @Autowired
    private ModelMapper mapper;
	
	@Override
	public void createAnnouncement(AnnouncementDto dto) {

        Announcement announcement = mapper.map(dto, Announcement.class);

        Account account = accountRepository.findById(dto.getOwnerId()).get();
        announcement.setOwner(account);

        announcementRepository.save(announcement);
        
        for (AnimalDto animalDto : dto.getAnimals()) {

    	    Animal animal = mapper.map(animalDto, Animal.class);
    	    animal.setAnnouncement(announcement);
		    animalRepository.save(animal);

    	}

	}

}
