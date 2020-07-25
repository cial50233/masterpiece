package fr.masterpiece.back.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import fr.masterpiece.back.dtos.AccountDto;
import fr.masterpiece.back.entities.Account;
import fr.masterpiece.back.entities.Role;
import fr.masterpiece.back.repositories.AccountRepository;
import fr.masterpiece.back.repositories.RoleRepository;

@Service
public class AccountServiceImpl implements AccountService {

	

    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private ModelMapper mapper;


	@Override
	public boolean create(@Valid @RequestBody AccountDto dto) {
		if (!(isAlreadyPresent(dto.getUsername()) || isAlreadyPresent(dto.getEmail()))){
			Account acc = new Account();
			populateAndSave(dto);
			return true;
		}
		return false;
	}

	private void populateAndSave(AccountDto dto) {
/*
		acc.setUsername(dto.getUsername());
		acc.setEmail(dto.getEmail());
		String password = dto.getPassword();
        acc.setPassword(passwordEncoder.encode(password));
		Role defaultRole = roleRepository.findByDefaultRoleTrue();
		Set<Role> set = new HashSet<Role>();
		set.add(defaultRole);
		acc.setRoles(set);
		acc.setEnable(true);
		
		*/
		Account account = mapper.map(dto, Account.class);
		String password = dto.getPassword();
        account.setPassword(passwordEncoder.encode(password));
		Role defaultRole = roleRepository.findByDefaultRoleTrue();
		Set<Role> set = new HashSet<Role>();
		set.add(defaultRole);
		account.setRoles(set);		
		account.setEnable(true);
		
		accountRepository.save(account);

	}

	@Override
	public void delete(Long id) {

		accountRepository.deleteById(id);

	}

	@Override
	public void update(Long id, AccountDto dto) {

		//Account acc = accountRepository.findById(id).get();

		//populateAndSave(dto);

	}

	public boolean isAlreadyPresent(String name) {
		if((accountRepository.findByUsername(name) != null) || (accountRepository.findByEmail(name) != null)) {
			return true;
		};
		return false;
	}

}
