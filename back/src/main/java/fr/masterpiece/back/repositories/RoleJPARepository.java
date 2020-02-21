package fr.masterpiece.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.masterpiece.back.entities.Role;

@Repository
public interface RoleJPARepository extends JpaRepository<Role, Long> {
	
	Role findByDefaultRole(boolean defaultRole);

}
