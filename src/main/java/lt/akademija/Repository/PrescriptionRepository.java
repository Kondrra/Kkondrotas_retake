package lt.akademija.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import lt.akademija.Model.Patient;
import lt.akademija.Model.Prescription;


public interface PrescriptionRepository extends JpaRepository <Prescription, Long>{
	
	List<Prescription> findByPersonalId(String search);
	List<Prescription> findByDoctorUsername(String search);
	List<Prescription> findByDoctorId(Long search);
	List<Prescription> findByPatientId(Long search);
	List<Prescription> findBySoldFalse();
	List<Prescription> findBySoldTrueAndPharmacistId(Long search);

}
