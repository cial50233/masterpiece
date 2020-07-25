package fr.masterpiece.back.controllers;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.masterpiece.back.dtos.AccountDto;
import fr.masterpiece.back.services.AccountService;

@RestController
@RequestMapping("/accounts")
public class AccountController {

	private final AccountService service;

	protected AccountController(AccountService service) {

        this.service = service;

    }

	@PostMapping("/create")
	protected void create(@Valid @RequestBody AccountDto dto) {

		service.create(dto);

	}
	

	@PutMapping("/{id}")
	protected void update(@PathVariable("id") Long id, @Valid @RequestBody AccountDto dto) {

		service.update(id, dto);

	}

	@DeleteMapping("/{id}")
	protected void delete(@PathVariable("id") Long id) {

		service.delete(id);

	}

}
