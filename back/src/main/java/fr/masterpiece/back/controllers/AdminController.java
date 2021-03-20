package fr.masterpiece.back.controllers;

import java.util.List;

import org.springframework.security.access.annotation.Secured;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.masterpiece.back.dtos.AccountInfoDto;
import fr.masterpiece.back.services.AccountService;

@RestController
@RequestMapping("/admin")
public class AdminController {

	private final AccountService accountService;

	public AdminController(AccountService accountService) {
		this.accountService = accountService;
	}

	@PreAuthorize("hasRole('ADMIN')") // == @Secured("ROLE_ADMIN")
	@GetMapping
	public String admin() {
		return "Hello admin!";
	}

	@Secured("ROLE_ADMIN")
	@GetMapping("/users")
	protected List<AccountInfoDto> getAll() {
		return accountService.getAllAccount();
	}
	
	@Secured("ROLE_ADMIN")
	@DeleteMapping("/{id}")
	protected void delete(@PathVariable("id") Long id) {

		accountService.delete(id);

	}
}
