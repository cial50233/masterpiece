package fr.masterpiece.back.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.masterpiece.back.dtos.AnnouncementDto;
import fr.masterpiece.back.services.AnnouncementService;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/announcements")
public class AnnouncementController {
	
    private final AnnouncementService service;
    
    protected AnnouncementController(AnnouncementService service) {

    	this.service = service;
	}


	@PostMapping("/create")
    protected void createAnnouncement(@Valid @RequestBody AnnouncementDto dto) {
        service.createAnnouncement(dto);
    }

}
