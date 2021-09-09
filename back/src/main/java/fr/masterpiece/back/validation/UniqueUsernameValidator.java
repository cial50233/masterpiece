package fr.masterpiece.back.validation;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

import fr.masterpiece.back.services.AccountService;

//unique username validator
public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String> {
    @Autowired
    private AccountService service;

    public boolean isValid(String username, ConstraintValidatorContext context) {
        return service.uniqueUsername(username);
    }

}
