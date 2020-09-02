package fr.masterpiece.back.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import java.util.List;

import fr.masterpiece.back.dtos.AccountDto;

public interface AccountService extends UserDetailsService {

    void create(AccountDto dto);
    
    AccountDto get(Long id);

    void delete(Long id);

    void update(Long id, AccountDto dto);
        
    boolean uniqueEmail(String value);
    
    boolean uniqueUsername(String value);
    
    UserDetails loadUserByUsername(String username);
    
    List<AccountDto> getAll();


}
