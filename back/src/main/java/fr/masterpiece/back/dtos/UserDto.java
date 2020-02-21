package fr.masterpiece.back.dtos;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class UserDto {

    @NotEmpty
    @Size(max = 100)
    private String email;

    @NotEmpty
    @Size(min = 8, max = 40)
    private String password;

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
