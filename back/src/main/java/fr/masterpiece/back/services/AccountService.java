package fr.masterpiece.back.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import java.util.List;

import fr.masterpiece.back.config.CustomUserDetails;
import fr.masterpiece.back.dtos.AccountDto;
import fr.masterpiece.back.dtos.AccountInfoDto;

public interface AccountService extends UserDetailsService {

    void create(AccountDto dto);
    
    AccountDto get(Long id);

    void delete(Long id);

    void update(Long id, AccountDto dto);
        
    boolean uniqueEmail(String value);
    
    boolean uniqueUsername(String value);
    
    CustomUserDetails loadUserByUsername(String username);
    
    List<AccountDto> getAll();

    AccountInfoDto getCurrentUserInfo(Long id);
    
    
    public List<AccountInfoDto> getAllAccount();

}
