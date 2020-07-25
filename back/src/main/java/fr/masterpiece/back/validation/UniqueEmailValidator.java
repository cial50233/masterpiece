package fr.masterpiece.back.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import fr.masterpiece.back.services.AccountService;

public class UniqueEmailValidator implements ConstraintValidator<UniqueEmail, String> {

	@Autowired
	private AccountService service;

	@Override
	public boolean isValid(String value, ConstraintValidatorContext context) {
		return service.uniqueEmail(value);
	}
}
