package fr.masterpiece.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import fr.masterpiece.back.enums.EnumRole;

@Entity
@Table(name = "roles", uniqueConstraints = {
        @UniqueConstraint(
                name = "roles_code_UQ",
                columnNames = "code"
        )
})
public class Role extends AbstractEntity{
	
	@Column(name = "code", nullable = false, columnDefinition = EnumRole.columnDefinition)
    @Enumerated(EnumType.STRING)
    private EnumRole code;
	
	@Column(length = 50, nullable = true, unique = true)
	private String label;
	
	@Column(nullable = false)
	private boolean defaultRole;

	public Role() {

	}

	public EnumRole getCode() {
		return code;
	}

	public void setCode(EnumRole code) {
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
