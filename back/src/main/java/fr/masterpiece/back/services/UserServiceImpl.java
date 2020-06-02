package fr.masterpiece.back.services;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.validation.Valid;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import fr.masterpiece.back.dtos.UserDto;
import fr.masterpiece.back.dtos.UserViewDto;
import fr.masterpiece.back.entities.Role;
import fr.masterpiece.back.entities.User;
import fr.masterpiece.back.repositories.RoleJPARepository;
import fr.masterpiece.back.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepo;
	
	private final RoleJPARepository roleRepo;

	public UserServiceImpl(UserRepository userRepo, RoleJPARepository roleRepo) {

		this.userRepo = userRepo;
		this.roleRepo = roleRepo;
	}

	@Override
	public boolean create(@Valid @RequestBody UserDto dto) {
		if (!isAlreadyPresent(dto)) {
			User user = new User();
			populateAndSave(dto, user);
			return true;
		}
		return false;
	}

	private void populateAndSave(UserDto dto, User user) {

		user.setEmail(dto.getEmail());
		user.setPassword(dto.getPassword());
		Role defaultRole = roleRepo.findByDefaultRoleTrue();
		Set<Role> set = new HashSet<Role>();
		set.add(defaultRole);
		user.setRoles(set);
		user.setEnable(true);
		userRepo.save(user);

	}

	@Override
	public void delete(Long id) {

		userRepo.deleteById(id);

	}

	@Override
	public UserViewDto getOne(Long id) {

		return userRepo.getById(id);

	}

	/*
	 * @Override public List<UserViewDto> getAll() {
	 * 
	 * return userRepo.getAll();
	 * 
	 * }
	 */
	@Override
	public void update(Long id, UserDto dto) {

		User user = userRepo.findById(id).get();

		populateAndSave(dto, user);

	}

	@Override
	public boolean isAlreadyPresent(UserDto dto) {
		return userRepo.getOneByEmail(dto.getEmail()).isPresent();
	}

}
