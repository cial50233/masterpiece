package fr.masterpiece.back.dtos;

public interface UserViewDto {
	
    Long getId();
    
    String getUsername();

    String getEmail();

    String getPassword();
    
    String getRoles();
    
    Boolean isEnable();

}
