package fr.masterpiece.back.services;

import fr.masterpiece.back.dtos.AccountDto;

public interface AccountService {

    void create(AccountDto dto);

    void delete(Long id);

    void update(Long id, AccountDto dto);
    
    boolean isAlreadyPresent(String name);
    
    boolean uniqueEmail(String value);
    
    boolean uniqueUsername(String value);

}
