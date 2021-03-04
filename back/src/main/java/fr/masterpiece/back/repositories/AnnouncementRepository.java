package fr.masterpiece.back.repositories;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.masterpiece.back.entities.Account;
import fr.masterpiece.back.entities.Announcement;

public interface AnnouncementRepository extends JpaRepository<Announcement, Long>{
	
	List<Announcement> findByStartDateBetween(LocalDate date1, LocalDate date2);
	
	List<Announcement> findByJobPlace(String jobPlace);
	
	List<Announcement> findByAddressContainingOrderByAddress(String address);
	
	List<Announcement> findByOwnerIdOrderByLastUpDateDesc(Account owner);
	
	List<Announcement> findByOwnerId(Optional<Account> acc);
	
	List<Announcement> findAllByOrderByLastUpDateDesc();

}
