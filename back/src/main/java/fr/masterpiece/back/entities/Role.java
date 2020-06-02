package fr.masterpiece.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "roles", uniqueConstraints = {
        @UniqueConstraint(
                name = "roles_code_UQ",
                columnNames = "code"
        )
})
public class Role extends AbstractEntity{
	
	@Column(length = 10, nullable = false, unique = true)
	private String code;
	
	@Column(length = 50, nullable = true, unique = true)
	private String label;
	
	@Column(nullable = false)
	private boolean defaultRole;

	public Role() {

	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public boolean isDefaultRole() {
		return defaultRole;
	}

	public void setDefaultRole(boolean defaultRole) {
		this.defaultRole = defaultRole;
	}
	
	

}
