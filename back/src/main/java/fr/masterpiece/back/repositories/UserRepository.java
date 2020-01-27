package fr.masterpiece.back.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.masterpiece.back.dtos.UserViewDto;
import fr.masterpiece.back.entities.Users;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    UserViewDto getById(Long id);

   // List<UserViewDto> getAll();
}
