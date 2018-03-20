package lt.akademija.Controller;

import java.util.List;

import lt.akademija.Model.CreateServiceCmd;
import lt.akademija.Model.MyService;
import lt.akademija.Service.ServiceService;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lt.akademija.Model.CreatePatientCmd;
import lt.akademija.Model.User;
import lt.akademija.Service.UserService;

@RestController
@Api(value = "Patient")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class ServiceController {
	private static final Logger log = LogManager.getLogger(ServiceController.class);
	@Autowired
	private ServiceService serviceService;

	@Autowired
	private UserService userService;

	@GetMapping(value = "/patients")
	@ApiOperation(value = "Get patient list", notes = "Returns list of all patients")
	public List<MyService> getPatients() {
		log.info("Returned a list of all doctors");
		return serviceService.getService();
	}


	@PostMapping(value = "admin/services/new")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create patients", notes = "Creates patient")
	public void createService(@RequestBody CreateServiceCmd cmd) {
		log.info("Request to create a patient");
		serviceService.createService(cmd);
	}

	@PutMapping(value = "/services/{id}")
	@ApiOperation(value = "Update patient", notes = "Updates patient details")
	public void updatePatient(@RequestBody CreatePatientCmd cmd, @PathVariable Long id) {
		log.info("Request to update a patient");
		patientService.updatePatient(cmd, id);
	}

	@PutMapping(value = "/patient/{patientId}/{doctorId}")
	@ApiOperation(value = "Assign patient to doctor", notes = "Assigns patient to doctor")
	public void assignDoctorToPatient(@PathVariable Long patientId, @PathVariable Long doctorId) {
		log.info("Request to assign a patient to a doctor");
		patientService.assignPatient(patientId, doctorId);
	}

}