package fr.masterpiece.back.dtos;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import fr.masterpiece.back.entities.AnimalType;

public class AnimalDto {
	
	@NotNull
	private AnimalType animalType;

	@NotBlank
	@Size(max = 255)
	private String animalName;

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

}
