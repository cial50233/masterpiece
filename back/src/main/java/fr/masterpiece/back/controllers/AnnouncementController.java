package fr.masterpiece.back.controllers;

import javax.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.masterpiece.back.dtos.AnnouncementDto;
import fr.masterpiece.back.services.AnnouncementService;

@RestController
@RequestMapping("/announcements")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AnnouncementController {

	private final AnnouncementService service;

	protected AnnouncementController(AnnouncementService service) {

		this.service = service;
	}

	@PostMapping("/create")
	protected void createAnnouncement(@Valid @RequestBody AnnouncementDto dto) {
		service.createAnnouncement(dto);
	}

	@GetMapping("/{id}")
	public AnnouncementDto getOne(@PathVariable("id") Long id) {
		//AnnouncementDto announcement = service.getAnnouncementById(id);
		//return announcement;
		
		return service.get(id);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		service.delete(id);
	}
	
	@GetMapping
	public List<AnnouncementDto> getAll() {
		return service.getAll();
	}

}
