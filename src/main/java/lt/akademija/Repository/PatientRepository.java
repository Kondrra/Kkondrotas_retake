package lt.akademija.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.akademija.Model.Patient;

public interface PatientRepository extends JpaRepository <Patient, Long>{
	
	Patient findByUsername(String search);
	
	List<Patient> findByDoctorUsername(String search);
	List<Patient> findByDoctorId(Long id);

    //List<Patient> findByUsernameContainingOrNameContainingOrSurnameContaining (String search);
}
