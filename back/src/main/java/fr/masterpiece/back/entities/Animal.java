package fr.masterpiece.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "animals")
public class Animal extends AbstractEntity {

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private AnimalType animalType;

	@Column(length = 100, nullable = false, name = "animal_name")
	private String animalName;
	
	@Column(length = 255)
	private String indication;

	@ManyToOne
	@JoinColumn(name = "id_announcement", nullable = false, foreignKey = @ForeignKey(name = "fk_animals_announcements"))
	private Announcement announcement;
	
	public Announcement getAnnouncement() {
		return announcement;
	}

	public void setAnnouncement(Announcement announcement) {
		this.announcement = announcement;
	}

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

	public String getIndication() {
		return indication;
	}

	public void setIndication(String indication) {
		this.indication = indication;
	}

}
