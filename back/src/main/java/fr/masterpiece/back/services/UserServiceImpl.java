package fr.masterpiece.back.services;

import java.util.List;

import org.springframework.stereotype.Service;

import fr.masterpiece.back.dtos.UserDto;
import fr.masterpiece.back.dtos.UserViewDto;
import fr.masterpiece.back.entities.Users;
import fr.masterpiece.back.repositories.UserRepository;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository UserRepo;

	public UserServiceImpl(UserRepository UserRepo) {

	        this.UserRepo = UserRepo;

	    }

	@Override
	public void create(UserDto dto) {

		Users User = new Users();
		populateAndSave(dto, User);

	}

	private void populateAndSave(UserDto dto, Users User) {

		User.setEmail(dto.getEmail());
		User.setPassword(dto.getPassword());
		UserRepo.save(User);

	}

	@Override
	public void delete(Long id) {

		UserRepo.deleteById(id);

	}

	@Override
	public UserViewDto getOne(Long id) {

		return UserRepo.getById(id);

	}

/*	@Override
	public List<UserViewDto> getAll() {

		return UserRepo.getAll();

	}
*/
	@Override
	public void update(Long id, UserDto dto) {

		Users User = UserRepo.findById(id).get();

		populateAndSave(dto, User);

	}

}
