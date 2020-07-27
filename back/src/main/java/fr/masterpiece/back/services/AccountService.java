package fr.masterpiece.back.services;

import java.util.List;

import fr.masterpiece.back.dtos.AccountDto;

public interface AccountService {

    void create(AccountDto dto);
    
    AccountDto get(Long id);

    void delete(Long id);

    void update(Long id, AccountDto dto);
        
    boolean uniqueEmail(String value);
    
    boolean uniqueUsername(String value);
    
    List<AccountDto> getAll();


}
