package fr.masterpiece.back.dtos;

import java.util.Set;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import fr.masterpiece.back.entities.Role;

public class UserDto {

    @NotEmpty
    @Size(max = 100)
    @Pattern(regexp = "[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z]{2,6}", message = "Please enter a valid email")
    private String email;

    @NotEmpty
    @Size(min = 8, max = 40)
    @Pattern(regexp = "[a-zA-Z0-9,;:!§\\/.?²&é\"'(-è_çà)=}\\]@^\\\\`|\\[{#~&]{6,}", message = "Please enter a password that contains at least one upper and one lower cases, one digit and one special character and is min 6 caracters long")
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

	@Override
	public String toString() {
		return "UserDto [email=" + email + ", password=" + password + ", roles=" + roles + ", enable=" + enable + "]";
	}

}
