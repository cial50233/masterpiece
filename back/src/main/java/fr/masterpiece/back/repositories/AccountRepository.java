package fr.masterpiece.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.masterpiece.back.entities.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

	
	Account findByEmail(String email);
	Account findByUsername(String name);
	
    int countByUsername(String name);
    int countByEmail(String name);
}
