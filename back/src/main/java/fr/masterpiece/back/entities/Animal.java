package fr.masterpiece.back.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.Index;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "animals", uniqueConstraints = {
		@UniqueConstraint(name = "uk_announcement_animal", columnNames = {
				"id_announcement", "animal_name" }) }, indexes = {
					@Index(name = "fk_animals_announcements_idx", columnList = "id_announcement") })
public class Animal extends AbstractEntity {

    @ManyToOne
    @JoinColumn(name = "id_announcement", nullable = false, foreignKey = @ForeignKey(name = "fk_animals_announcements"))
	private Announcement announcement;

	@Column(nullable = false)
	@Enumerated(EnumType.STRING)
	private AnimalType animalType;

	@Column(length = 100, nullable = false, name = "animal_name")
	private String animalName;

}
