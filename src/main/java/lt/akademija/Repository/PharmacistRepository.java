package lt.akademija.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import lt.akademija.Model.Pharmacist;

public interface PharmacistRepository  extends JpaRepository <Pharmacist, Long>{
	
	List<Pharmacist> findByUsername(String search);

}
