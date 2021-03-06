package fr.masterpiece.back.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.masterpiece.back.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	
	Role findByDefaultRoleTrue();

}
