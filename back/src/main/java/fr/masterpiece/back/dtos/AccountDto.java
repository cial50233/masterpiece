package fr.masterpiece.back.dtos;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import fr.masterpiece.back.validation.UniqueEmail;
import fr.masterpiece.back.validation.UniqueUsername;

public class AccountDto {
	
	private Long id;
	
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@NotBlank
    @Size(max = 20)
    @UniqueUsername
    private String username;

    @Email
	@NotBlank
    @Size(max = 100)
    @UniqueEmail
    @Pattern(regexp = "[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z]{2,6}", message = "Please enter a valid email")
    private String email;

    @NotNull
    @Size(min = 8, max = 40)
    @Pattern(regexp = "[a-zA-Z0-9,;:!§\\/.?²&é\"'(-è_çà)=}\\]@^\\\\`|\\[{#~&]{6,}", message = "Please enter a password that contains at least one upper and one lower cases, one digit and one special character and is min 6 caracters long")
    private String password;
    
    

	public AccountDto() {

	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
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
		return "UserDto [username=" + username + ", email=" + email + ", password=" + password +"]";
	}



}
