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

import lt.akademija.Model.Admin;
import lt.akademija.Model.CreateDoctorCmd;
import lt.akademija.Model.CreatePatientCmd;
import lt.akademija.Model.Doctor;
import lt.akademija.Model.Patient;
import lt.akademija.Model.Prescription;
import lt.akademija.Model.Record;
import lt.akademija.Model.User;
import lt.akademija.Repository.DoctorRepository;
import lt.akademija.Repository.PatientRepository;
import lt.akademija.Repository.PrescriptionRepository;
import lt.akademija.Repository.RecordRepository;


@Service

public class DoctorService {
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private PrescriptionRepository prescriptionRepository;

	
	@Transactional
	public List<Doctor> getDoctors(){
		return doctorRepository.findAll();
	}
	
	@Transactional
	public Page<Doctor> findPaginated(int page, int size){
		return doctorRepository.findAll(new PageRequest(page, size));
	}
	
	@Transactional
	public User getDoctor(@PathVariable Long id) {
		return doctorRepository.findOne(id);
	}
	
	@Transactional
	public List<Patient> getDoctorPatients(@PathVariable Long id) {
		return patientRepository.findByDoctorId(id);
	}
	
	@Transactional 
	public List<Record> getDoctorRecords(@PathVariable Long id) {
		return recordRepository.findByDoctorId(id);
	}
	
	@Transactional
	public List<Prescription> getDoctorPrescriptions(@PathVariable Long id) {
		return prescriptionRepository.findByDoctorId(id);
	}
	
	@Transactional
	public void createDoctor(@RequestBody CreateDoctorCmd cmd) {
		Doctor doctor = new Doctor();
		doctor.setName(cmd.getName());
		doctor.setSurname(cmd.getSurname());
		doctor.setUsername(cmd.getUsername());
		doctor.setPassword(passwordEncoder.encode(cmd.getPassword()));
		doctor.setSpecialisation(cmd.getSpecialisation());
		doctor.setRole("Doctor");
		doctorRepository.save(doctor);
	}
	
	@Transactional
	public void updateDoctor(@RequestBody CreateDoctorCmd cmd, @PathVariable Long id) {
		Doctor newDoctor = doctorRepository.findOne(id);
		newDoctor.setName(cmd.getName());
		newDoctor.setSurname(cmd.getSurname());
		newDoctor.setUsername(cmd.getUsername());
		newDoctor.setSpecialisation(cmd.getSpecialisation());
		doctorRepository.save(newDoctor);
	}
	

}