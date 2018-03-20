package lt.akademija.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;


import lt.akademija.Model.Admin;


public interface AdminRepository extends JpaRepository <Admin, Long>{
	
	List<Admin> findByUsername(String search);

}