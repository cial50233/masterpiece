package fr.masterpiece.back.services;

import java.util.List;

import fr.masterpiece.back.dtos.AnimalDto;
import fr.masterpiece.back.dtos.AnnouncementDto;
import fr.masterpiece.back.dtos.AnnouncementViewDto;

public interface AnnouncementService {
	
	void createAnnouncement(AnnouncementDto dto);
	
	AnnouncementDto get(Long id);
	
	void update(Long id, AnnouncementDto dto);

    void delete(Long id);
    
    List<AnnouncementViewDto> getAll();
    
    List<AnimalDto> getAnimalByAnnouncement(Long id);
    
    List<AnnouncementDto> getByOwner(Long id);

}
