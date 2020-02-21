package fr.masterpiece.back.services;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import fr.masterpiece.back.dtos.UserDto;
import fr.masterpiece.back.dtos.UserViewDto;
import fr.masterpiece.back.entities.Users;
import fr.masterpiece.back.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepo;

	public UserServiceImpl(UserRepository userRepo) {

		this.userRepo = userRepo;

	}

	@Override
	public boolean create(@Valid @RequestBody UserDto dto) {
		if (!isAlreadyPresent(dto)) {
			Users user = new Users();
			populateAndSave(dto, user);
			return true;
		}
		return false;
	}

	private void populateAndSave(UserDto dto, Users user) {

		user.setEmail(dto.getEmail());
		user.setPassword(dto.getPassword());
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

		Users user = userRepo.findById(id).get();

		populateAndSave(dto, user);

	}

	@Override
	public boolean isAlreadyPresent(UserDto dto) {
		return userRepo.getOneByEmail(dto.getEmail()).isPresent();
	}

}
