package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreatePrescriptionCmd;
import lt.akademija.Model.Pharmacist;
import lt.akademija.Model.Prescription;
import lt.akademija.Repository.DoctorRepository;
import lt.akademija.Repository.PatientRepository;
import lt.akademija.Repository.PharmacistRepository;
import lt.akademija.Repository.PrescriptionRepository;

@Service

public class PrescriptionService {
	
	@Autowired
	private PrescriptionRepository prescriptionRepository;
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private PharmacistRepository pharmacistRepository;

	
	@Transactional
	public List<Prescription> getPrescriptions(){
		return prescriptionRepository.findAll();
	}
	
	@Transactional
	public List<Prescription> getValidPrescriptions(){
		return prescriptionRepository.findBySoldFalse();
	}
	
	
	@Transactional
	public List<Prescription> getSoldPrescriptions(@PathVariable Long id){
		return prescriptionRepository.findBySoldTrueAndPharmacistId(id);
	}
	
	@Transactional
	public Prescription getPrescription(@PathVariable Long id) {
		return prescriptionRepository.findOne(id);
	}
	
	@Transactional
	public void createPrescription(@RequestBody CreatePrescriptionCmd cmd, @PathVariable Long doctorId, @PathVariable Long patientId) {
		Prescription prescription = new Prescription();
		prescription.setPersonalId(cmd.getPersonalId());
		prescription.setActiveMat(cmd.getActiveMat());
		prescription.setActiveMatQuantity(cmd.getActiveMatQuantity());
		prescription.setUnit(cmd.getUnit());
		prescription.setDesc(cmd.getDesc());
		prescription.setValidUntil(cmd.getValidUntil());
		prescription.setTimestamp(cmd.getTimestamp());
		prescription.setFullName(cmd.getFullName());
		prescription.setDoctor(doctorRepository.findOne(doctorId));
		prescription.setPatient(patientRepository.findOne(patientId));
		prescriptionRepository.save(prescription);
	}
	
	@Transactional 
	public void updatePrescription(@RequestBody CreatePrescriptionCmd cmd, @PathVariable Long id) {
		Prescription prescription = prescriptionRepository.findOne(id);
		prescription.setActiveMat(cmd.getActiveMat());
		prescription.setActiveMatQuantity(cmd.getActiveMatQuantity());
		prescription.setUnit(cmd.getUnit());
		prescription.setDesc(cmd.getDesc());
		prescription.setValidUntil(cmd.getValidUntil());
		prescription.setSold(cmd.isSold());
		prescriptionRepository.save(prescription);
	}
	
	@Transactional
	public void signPrescription(Long doctorId, Long prescriptionId, Long patientId) {
		Prescription prescription = prescriptionRepository.findOne(prescriptionId);
		prescription.setDoctor(doctorRepository.findOne(doctorId));
		prescription.setPatient(patientRepository.findOne(patientId));
		prescriptionRepository.save(prescription);
	}
	

	@Transactional
	public void sellPrescription(Long prescriptionId, Long pharmacistId) {
		Prescription prescription = prescriptionRepository.findOne(prescriptionId);
		prescription.setPharmacist(pharmacistRepository.findOne(pharmacistId));
		prescriptionRepository.save(prescription);
	}

}
