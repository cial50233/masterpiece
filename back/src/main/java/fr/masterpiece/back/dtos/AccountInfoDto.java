package fr.masterpiece.back.dtos;

import java.util.Set;

import fr.masterpiece.back.entities.Role;

public interface AccountInfoDto {
	
	
    Long getId();
    String getUsername();
    String getEmail();
    Set<Role> getRoles();


}
