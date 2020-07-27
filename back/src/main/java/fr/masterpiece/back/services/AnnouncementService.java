package fr.masterpiece.back.services;

import java.util.List;

import fr.masterpiece.back.dtos.AnnouncementDto;
import fr.masterpiece.back.entities.Announcement;

public interface AnnouncementService {
	
	void createAnnouncement(AnnouncementDto dto);
	
	AnnouncementDto get(Long id);

    void delete(Long id);
    
    List<AnnouncementDto> getAll();

}
