package fr.masterpiece.back.controllers;

import javax.validation.Valid;
import java.util.List;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.masterpiece.back.dtos.AnimalDto;
import fr.masterpiece.back.dtos.AnnouncementDto;
import fr.masterpiece.back.dtos.AnnouncementViewDto;
import fr.masterpiece.back.services.AnnouncementService;

@RestController
@RequestMapping("/announcements")
@CrossOrigin(origins = "http://localhost:4200")
public class AnnouncementController {

	private final AnnouncementService service;

	//inject service
	protected AnnouncementController(AnnouncementService service) {

		this.service = service;
	}

	@PostMapping
	protected void createAnnouncement(@Valid @RequestBody AnnouncementDto dto) {
		service.createAnnouncement(dto);
	}

	@GetMapping("/{id}")
	public AnnouncementDto getOne(@PathVariable("id") Long id) {
		
		return service.get(id);
	}
	@GetMapping("/owner/{id}")
	public List<AnnouncementViewDto> getByOwner(@PathVariable("id") Long id){
		return service.getByOwner(id);
	}
	
    @PutMapping("/{id}")
    protected void update(@PathVariable("id") Long id, @Valid @RequestBody AnnouncementDto dto) {
        service.update(id, dto);
    }

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		service.delete(id);
	}
	
	@GetMapping
	public List<AnnouncementViewDto> getAll() {
		return service.getAll();
	}
	
	@GetMapping("/ani/{id}")
	public List<AnimalDto> getAnimalByAnnouncement(@PathVariable("id") Long id) {
		
		return service.getAnimalByAnnouncement(id);
	}

}
