package fr.masterpiece.back.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import fr.masterpiece.back.dtos.AccountDto;

public interface AccountService extends UserDetailsService {

    void create(AccountDto dto);

    void delete(Long id);

    void update(Long id, AccountDto dto);
    
    boolean isAlreadyPresent(String name);
    
    boolean uniqueEmail(String value);
    
    boolean uniqueUsername(String value);
    
    UserDetails loadUserByUsername(String username);

}
