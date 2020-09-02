package fr.masterpiece.back.dtos;

import java.util.Set;

import fr.masterpiece.back.entities.Role;

public interface AccountAuthDto {
	
    Long getId();
    String getUsername();
    String getPassword();
    Set<Role> getRoles();

}
