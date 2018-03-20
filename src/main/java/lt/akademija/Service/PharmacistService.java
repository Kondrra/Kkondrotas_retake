package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreateDoctorCmd;
import lt.akademija.Model.CreatePharmacistCmd;
import lt.akademija.Model.Doctor;
import lt.akademija.Model.Patient;
import lt.akademija.Model.Pharmacist;
import lt.akademija.Model.User;
import lt.akademija.Repository.PharmacistRepository;

@Service

public class PharmacistService {

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private PharmacistRepository pharmacistRepository;

	@Transactional
	public List<Pharmacist> getPharmacists() {
		return pharmacistRepository.findAll();
	}
	
	@Transactional
	public Page<Pharmacist> findPaginated(int page, int size){
		return pharmacistRepository.findAll(new PageRequest(page, size));
	}

	@Transactional
	public User getPharmacist(@PathVariable Long id) {
		return pharmacistRepository.findOne(id);
	}

	@Transactional
	public void createPharmacist(@RequestBody CreatePharmacistCmd cmd) {
		Pharmacist pharmacist = new Pharmacist();
		pharmacist.setName(cmd.getName());
		pharmacist.setSurname(cmd.getSurname());
		pharmacist.setUsername(cmd.getUsername());
		pharmacist.setPassword(passwordEncoder.encode(cmd.getPassword()));
		pharmacist.setCompanyType(cmd.getCompanyType());
		pharmacist.setCompanyName(cmd.getCompanyName());
		pharmacist.setRole("Pharmacist");
		pharmacistRepository.save(pharmacist);
	}

	@Transactional
	public void updatePharmacist(@RequestBody CreatePharmacistCmd cmd, @PathVariable Long id) {
		Pharmacist newPharmacist = pharmacistRepository.findOne(id);
		newPharmacist.setName(cmd.getName());
		newPharmacist.setSurname(cmd.getSurname());
		newPharmacist.setUsername(cmd.getUsername());
		newPharmacist.setCompanyType(cmd.getCompanyType());
		newPharmacist.setCompanyName(cmd.getCompanyName());
		pharmacistRepository.save(newPharmacist);
	}

}
