package fr.masterpiece.back.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "accounts", uniqueConstraints = {
        @UniqueConstraint(
                name = "accounts_username_UQ",
                columnNames = {"username"}
        ),
        @UniqueConstraint(
                name = "accounts_email_UQ",
                columnNames = {"email"}
        )
})
public class Account extends AbstractEntity {
	
    @Column(length = 50, nullable = false, unique = true)
    private String username;
	
	@Column(length = 50, nullable = false, unique = true)
    private String email;

    @Column(length = 255, nullable = false)
    private String password;
    
    @Column(nullable = true)
    private boolean enable;
	
    @ManyToMany
    @JoinTable(name = "accounts_roles",
            joinColumns = @JoinColumn(name = "account_id", nullable = false),
            foreignKey = @ForeignKey(name = "accounts_roles_account_id_FK"),
            inverseJoinColumns = @JoinColumn(name = "roles_id", nullable = false),
            inverseForeignKey = @ForeignKey(name = "accounts_roles_roles_id_FK"),
            indexes = {
                    @Index(name = "accounts_roles_account_id_IDX", columnList = "account_id"),
                    @Index(name = "accounts_roles_roles_id_IDX", columnList = "roles_id")
            }
    )
    private Set<Role> roles;

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
    
    

}
