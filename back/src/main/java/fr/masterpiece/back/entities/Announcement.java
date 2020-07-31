package fr.masterpiece.back.entities;

import java.time.LocalDateTime;
import java.util.Optional;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "announcements")
public class Announcement extends AbstractEntity {

	@Column(name = "title", nullable = false, length = 25)
	private String title;

	@ManyToOne
	@JoinColumn(name = "owner_id", nullable = false)
	private Account owner;

	@Column(name = "job_place", nullable = false)
	private String jobPlace;

	@Column(length = 255)
	private String address;

	@Column(nullable = false)
	private LocalDateTime startDate;

	private LocalDateTime endDate;

	
	public Announcement() {

	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Account getOwner() {
		return owner;
	}

	public void setOwner(Account account) {
		this.owner = account;
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
