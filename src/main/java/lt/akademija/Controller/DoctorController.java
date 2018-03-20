package lt.akademija.Controller;

import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.akademija.Model.CreateServiceCmd;
import lt.akademija.Model.Patient;
import lt.akademija.Model.Prescription;
import lt.akademija.Model.Record;
import lt.akademija.Model.User;
import lt.akademija.Service.ServiceService;

@RestController
@Api(value = "Doctor")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class DoctorController {
	private static final Logger log = LogManager.getLogger(DoctorController.class);
	@Autowired
	private ServiceService doctorService;


	


	@GetMapping(value = "/doctors/{id}")
	@ApiOperation(value = "Get doctor", notes = "Returns a single doctor")
	public User getDoctor(@PathVariable Long id) {
		log.info("Request to return a single doctor");
		return doctorService.getDoctor(id);
	}

	@GetMapping(value = "/doctors/{id}/patients")
	@ApiOperation(value = "Get all doctor patients", notes = "Returns all doctor patients")
	public List<Patient> getDoctorPatients(@PathVariable Long id) {
		log.info("Request to return all doctor's patients");
		return doctorService.getDoctorPatients(id);
	}

	@GetMapping(value = "/doctors/{id}/records")
	@ApiOperation(value = "Get all doctor records", notes = "Returns all doctor records")
	public List<Record> getDoctorRecords(@PathVariable Long id) {
		log.info("Request to return all doctor's records");
		return doctorService.getDoctorRecords(id);
	}

	@GetMapping(value = "/doctors/{id}/prescriptions")
	@ApiOperation(value = "Get all doctor prescriptions", notes = "Returns all doctor prescriptions")
	public List<Prescription> getDoctorPrescriptions(@PathVariable Long id) {
		log.info("Request to return all doctor's prescriptions");
		return doctorService.getDoctorPrescriptions(id);
	}

	@PostMapping(value = "admin/doctors/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create doctors", notes = "Creates doctor")
	public void createDoctor(@RequestBody CreateServiceCmd cmd) {
		log.info("Request to create a doctor");
		doctorService.createDoctor(cmd);
	}

	@PutMapping(value = "/doctors/{id}")
	@ApiOperation(value = "Update doctor", notes = "Updates doctor details")
	public void updateDoctor(@RequestBody CreateServiceCmd cmd, @PathVariable Long id) {
		log.info("Request to update a doctor");
		doctorService.updateDoctor(cmd, id);
	}

}
