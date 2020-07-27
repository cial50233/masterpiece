package fr.masterpiece.back.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import fr.masterpiece.back.entities.AnimalType;
import fr.masterpiece.back.entities.Announcement;

public class AnimalDto {
	
	@NotNull
	private AnimalType animalType;

	@NotBlank
	@Size(max = 255)
	private String animalName;
	
	private Announcement announcement;

	public AnimalType getAnimalType() {
		return animalType;
	}

	public void setAnimalType(AnimalType animalType) {
		this.animalType = animalType;
	}

	public String getAnimalName() {
		return animalName;
	}

	public void setAnimalName(String animalName) {
		this.animalName = animalName;
	}

	public Announcement getAnnouncement() {
		return announcement;
	}

	public void setAnnouncement(Announcement announcement) {
		this.announcement = announcement;
	}
	
	

}
