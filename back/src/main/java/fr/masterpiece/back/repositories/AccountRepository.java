package fr.masterpiece.back.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.masterpiece.back.dtos.AccountAuthDto;
import fr.masterpiece.back.dtos.AccountInfoDto;
import fr.masterpiece.back.entities.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

	Account findByEmail(String email);
	Optional<AccountAuthDto> findByUsername(String name);
	
	Optional<AccountInfoDto> getById(Long id);
	
	boolean existsByEmail(String value);
	boolean existsByUsername(String value);
	
    int countByUsername(String name);
    int countByEmail(String name);
    
    List<AccountInfoDto> findAllByOrderByUsernameAsc();
}
