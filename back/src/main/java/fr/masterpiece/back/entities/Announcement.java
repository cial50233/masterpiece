package fr.masterpiece.back.entities;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "announcements")
public class Announcement extends AbstractEntity{
	
    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false, foreignKey = @ForeignKey(name = "fk_announcements_users"))
	private Account owner;

	@Column(name = "job_place", nullable = false)
	private String jobPlace;
	
	@Column(length = 250)
	private String address;
	
	@Column(nullable = false)
	private LocalDateTime startDate;
	
	private LocalDateTime endDate;

	public Account getOwner() {
		return owner;
	}
	
	public Announcement() {

	}

	public void setOwner(Account owner) {
		this.owner = owner;
	}

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
	
	

}
