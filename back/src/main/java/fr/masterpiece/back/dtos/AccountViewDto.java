package fr.masterpiece.back.dtos;

import java.util.Set;

import fr.masterpiece.back.entities.Role;

//DTO for front
public interface AccountViewDto {

    Long getId();
    String getUsername();

    Set<Role> getRoles();
}
