package fr.masterpiece.back.dtos;

import java.time.LocalDateTime;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.*;

public class AnnouncementDto {
	
	@NotBlank
    @Size(max = 255)
	private String title;
	
	@NotBlank
    @Size(max = 25)
	private String jobPlace;
	

    @Size(max = 255)
	private String address;
	
	@NotNull
    @FutureOrPresent(message = "Start date should be at present or in the futur")
	private LocalDateTime startDate;
	
	@NotNull
    @FutureOrPresent(message = "End date should be at present or in the futur")
	private LocalDateTime endDate;
	
	@NotNull
	private Long ownerId;
	
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Long getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(Long ownerId) {
		this.ownerId = ownerId;
	}

	@Size(min = 1, max = 50)
    List<@Valid AnimalDto> animals;

	public String getJobPlace() {
		return jobPlace;
	}

	public void setJobPlace(String jobPlace) {
		this.jobPlace = jobPlace;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LocalDateTime getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDateTime startDate) {
		this.startDate = startDate;
	}

	public LocalDateTime getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDateTime endDate) {
		this.endDate = endDate;
	}

	public List<AnimalDto> getAnimals() {
		return animals;
	}

	public void setAnimals(List<AnimalDto> animals) {
		this.animals = animals;
	}

}
