package fr.masterpiece.back.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.masterpiece.back.dtos.UserViewDto;
import fr.masterpiece.back.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    UserViewDto getById(Long id);
    
    Optional<User> getOneByEmail(String email);

   // List<UserViewDto> getAll();
    
    User findByEmail(String email);
    User findByUsername(String name);
    
    int countByUsername(String name);
    int countByEmail(String name);
}
