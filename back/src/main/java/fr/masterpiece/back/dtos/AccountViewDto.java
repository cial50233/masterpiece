package fr.masterpiece.back.dtos;

import java.util.Set;

import fr.masterpiece.back.entities.Role;

public interface AccountViewDto {

    Long getId();
    String getUsername();

    Set<Role> getRoles();
}
