package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreateRecordCmd;
import lt.akademija.Model.Prescription;
import lt.akademija.Model.Record;
import lt.akademija.Repository.DoctorRepository;
import lt.akademija.Repository.PatientRepository;
import lt.akademija.Repository.RecordRepository;

@Service

public class RecordService {
	
	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private DoctorRepository doctorRepository;
	
	@Autowired
	private PatientRepository patientRepository;

	
	@Transactional
	public List<Record> getRecords(){
		return recordRepository.findAll();
	}
	
	@Transactional
	public Record getRecord(@PathVariable Long id) {
		return recordRepository.findOne(id);
	}
	
	@Transactional
	public void createRecord(@RequestBody CreateRecordCmd cmd, @PathVariable Long doctorId, @PathVariable Long patientId) {
		Record record = new Record();
		record.setPersonalId(cmd.getPersonalId());
		record.setDuration(cmd.getDuration());
		record.setTlk(cmd.getTlk());
		record.setAppDesc(cmd.getAppDesc());
		record.setVlk(cmd.getVlk());
		record.setRepeated(cmd.getRepeated());
		record.setDate(cmd.getDate());
		record.setDoctor(doctorRepository.findOne(doctorId));
		record.setPatient(patientRepository.findOne(patientId));
		recordRepository.save(record);
	}
	
	@Transactional 
	public void updateRecord(@RequestBody CreateRecordCmd cmd, @PathVariable Long id) {
		Record record = recordRepository.findOne(id);
		record.setDuration(cmd.getDuration());
		record.setTlk(cmd.getTlk());
		record.setAppDesc(cmd.getAppDesc());
		record.setVlk(cmd.getVlk());
		record.setRepeated(cmd.getRepeated());
		record.setDate(cmd.getDate());
		recordRepository.save(record);
	}
	
	@Transactional
	public void signRecord(Long doctorId, Long recordId, Long patientId) {
		Record record = recordRepository.findOne(recordId);
		record.setDoctor(doctorRepository.findOne(doctorId));
		record.setPatient(patientRepository.findOne(patientId));
		recordRepository.save(record);
	}
	

}
