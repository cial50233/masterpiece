package fr.masterpiece.back.enums;

public enum EnumRole {
	ROLE_USER, ROLE_ADMIN;

	public static final String columnDefinition = "ENUM('ROLE_USER', 'ROLE_ADMIN')";
}
