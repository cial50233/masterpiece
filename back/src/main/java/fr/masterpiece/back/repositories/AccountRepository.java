package fr.masterpiece.back.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.masterpiece.back.dtos.AccountViewDto;
import fr.masterpiece.back.entities.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

	
	Account findByEmail(String email);
	Optional<AccountViewDto> findByUsername(String name);
	
	boolean existsByEmail(String value);
	boolean existsByUsername(String value);
	
    int countByUsername(String name);
    int countByEmail(String name);
}
