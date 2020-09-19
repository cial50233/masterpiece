package fr.masterpiece.back.entities;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.Index;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import fr.masterpiece.back.utilities.BooleanConverter;

@Entity
@Table(name = "accounts", uniqueConstraints = {
		@UniqueConstraint(name = "accounts_username_UQ", columnNames = { "username" }),
		@UniqueConstraint(name = "accounts_email_UQ", columnNames = { "email" }) })
public class Account extends AbstractEntity {

	@Column(length = 50, nullable = false, unique = true)
	private String username;

	@Column(length = 50, nullable = false, unique = true)
	private String email;

	@Column(length = 255, nullable = false)
	private String password;

	@Convert(converter = BooleanConverter.class)
	@Column(length = 1, nullable = false)
	private boolean enabled;
	@Convert(converter = BooleanConverter.class)
	@Column(length = 1, nullable = false)
	private boolean accountNonExpired;
	@Convert(converter = BooleanConverter.class)
	@Column(length = 1, nullable = false)
	private boolean accountNonLocked;
	@Convert(converter = BooleanConverter.class)
	@Column(length = 1, nullable = false)
	private boolean credentialsNonExpired;

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "accounts_roles", joinColumns = @JoinColumn(name = "account_id", nullable = false), foreignKey = @ForeignKey(name = "accounts_roles_account_id_FK"), inverseJoinColumns = @JoinColumn(name = "roles_id", nullable = false), inverseForeignKey = @ForeignKey(name = "accounts_roles_roles_id_FK"), indexes = {
			@Index(name = "accounts_roles_account_id_IDX", columnList = "account_id"),
			@Index(name = "accounts_roles_roles_id_IDX", columnList = "roles_id") })
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

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

	public boolean isAccountNonExpired() {
		return accountNonExpired;
	}

	public void setAccountNonExpired(boolean accountNonExpired) {
		this.accountNonExpired = accountNonExpired;
	}

	public boolean isAccountNonLocked() {
		return accountNonLocked;
	}

	public void setAccountNonLocked(boolean accountNonLocked) {
		this.accountNonLocked = accountNonLocked;
	}

	public boolean isCredentialsNonExpired() {
		return credentialsNonExpired;
	}

	public void setCredentialsNonExpired(boolean credentialsNonExpired) {
		this.credentialsNonExpired = credentialsNonExpired;
	}

	public Set<Role> getRoles() {
		return roles;
	}

	public void setRoles(Set<Role> roles) {
		this.roles = roles;
	}

}
