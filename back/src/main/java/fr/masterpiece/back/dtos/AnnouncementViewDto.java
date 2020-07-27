package fr.masterpiece.back.dtos;

import java.time.LocalDateTime;
import java.util.List;

public interface AnnouncementViewDto {
	Long getId();
	
	String getJobPlace();
	
	String getAddress();
	
	LocalDateTime getStartDate();
	
	LocalDateTime getEndDate();
	
	List<AnimalDto> getAnimals();
	
	Long getOwnerId();
}
