package fr.masterpiece.back.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.masterpiece.back.dtos.UserDto;
import fr.masterpiece.back.dtos.UserViewDto;
import fr.masterpiece.back.services.UserService;

@RestController
@RequestMapping("/user")

public class UserController {

	private final UserService service;

	protected UserController(UserService service) {

        this.service = service;

    }

	@PostMapping("/create")
	protected boolean create(@Valid @RequestBody UserDto dto) {

		return service.create(dto);

	}

	@GetMapping("/{id}")
	protected UserViewDto getOne(@PathVariable("id") Long id) {

		return service.getOne(id);

	}
	

  /*  @GetMapping
    protected List<UserViewDto> getAll() {

        return service.getAll();

    }
*/

	@PutMapping("/{id}")
	protected void update(@PathVariable("id") Long id, @Valid @RequestBody UserDto dto) {

		service.update(id, dto);

	}

	@DeleteMapping("/{id}")
	protected void delete(@PathVariable("id") Long id) {

		service.delete(id);

	}

}
