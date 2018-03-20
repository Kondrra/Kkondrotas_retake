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
import lt.akademija.Model.CreateAdminCmd;
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

public class PatientService {

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private DoctorRepository doctorRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private RecordRepository recordRepository;

	@Autowired
	private PrescriptionRepository prescriptionRepository;

	@Transactional
	public List<Patient> getPatients() {
		return patientRepository.findAll();

	}

	@Transactional
	public User getPatient(@PathVariable Long id) {
		return patientRepository.findOne(id);
	}
	
	@Transactional
	public Page<Patient> findPaginated(int page, int size){
		return patientRepository.findAll(new PageRequest(page, size));
	}

	@Transactional
	public List<Record> getPatientRecords(@PathVariable Long id) {
		return recordRepository.findByPatientId(id);
	}

	@Transactional
	public List<Prescription> getPatientPrescriptions(@PathVariable Long id) {
		return prescriptionRepository.findByPatientId(id);
	}

	@Transactional
	public void createPatient(@RequestBody CreatePatientCmd cmd) {
		Patient patient = new Patient();
		patient.setName(cmd.getName());
		patient.setSurname(cmd.getSurname());
		patient.setUsername(cmd.getUsername());
		patient.setPassword(passwordEncoder.encode(cmd.getPassword()));
		patient.setDateOfBirth(cmd.getDateOfBirth());
		patient.setPersonalId(cmd.getPersonalId());
		patient.setRole("Patient");
		patientRepository.save(patient);
	}

	@Transactional
	public void updatePatient(@RequestBody CreatePatientCmd cmd, @PathVariable Long id) {
		Patient newPatient = patientRepository.findOne(id);
		newPatient.setName(cmd.getName());
		newPatient.setSurname(cmd.getSurname());
		newPatient.setUsername(cmd.getUsername());
		newPatient.setDateOfBirth(cmd.getDateOfBirth());
		newPatient.setPersonalId(cmd.getPersonalId());
		patientRepository.save(newPatient);
	}

	@Transactional
	public void assignPatient(Long patientId, Long doctorId) {
		Patient patient = patientRepository.findOne(patientId);
		patient.setDoctor(doctorRepository.findOne(doctorId));
		patientRepository.save(patient);
	}

}
