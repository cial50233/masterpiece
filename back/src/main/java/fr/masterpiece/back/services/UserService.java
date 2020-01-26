package fr.masterpiece.back.services;

import java.util.List;

import fr.masterpiece.back.dtos.UserDto;
import fr.masterpiece.back.dtos.UserViewDto;

public interface UserService {

    void create(UserDto dto);

    void delete(Long id);

    UserViewDto getOne(Long id);

  //  List<UserViewDto> getAll();

    void update(Long id, UserDto dto);

}
