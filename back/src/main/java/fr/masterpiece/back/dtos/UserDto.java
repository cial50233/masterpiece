package fr.masterpiece.back.dtos;

import java.util.Set;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import fr.masterpiece.back.entities.Role;

public class UserDto {

    @NotEmpty
    @Size(max = 100)
    private String email;

    @NotEmpty
    @Size(min = 8, max = 40)
    private String password;
    
    @NotEmpty
    private Set<Role> roles;
    
    private boolean enable;
    

	public boolean isEnable() {
		return enable;
	}

	public void setEnable(boolean enable) {
		this.enable = enable;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

	public UserDto() {

	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

}
