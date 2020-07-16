package fr.masterpiece.back.entities;

import java.sql.Date;
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
    @JoinColumn(name = "id_owner", nullable = false, foreignKey = @ForeignKey(name = "fk_announcements_users"))
	private User owner;

	@Column(name = "job_place", nullable = false)
	private String jobPlace;
	
	@Column(length = 250)
	private String address;
	
	@Column(nullable = false)
	private LocalDateTime startDate;
	
	private LocalDateTime endDate;

}
