package fr.masterpiece.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@JsonIgnoreProperties(ignoreUnknown = true)
@Table(name="USERS")
public class Users extends AbstractEntity {
	
    @Column(length = 50, nullable = false)
    private String email;

    @Column(length = 40, nullable = false)
    private String password;

	public String getEmail() {
		return email;
	}
	
	public Users() {

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
		return "Users [email=" + email + ", password=" + password + "]";
	}

}
