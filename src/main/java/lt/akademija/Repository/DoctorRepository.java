package lt.akademija.Repository;


import lt.akademija.Model.Doctor;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface DoctorRepository extends JpaRepository <Doctor, Long>{
	
	Doctor findByUsername(String search);
	Doctor findById(Long id);
}
