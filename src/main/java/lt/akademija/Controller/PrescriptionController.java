package lt.akademija.Controller;

import java.util.List;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lt.akademija.Model.CreatePrescriptionCmd;
import lt.akademija.Model.Prescription;
import lt.akademija.Service.PrescriptionService;

@RestController
@Api(value = "Prescription")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class PrescriptionController {
	private static final Logger log = LogManager.getLogger(PrescriptionController.class);
	@Autowired
	private PrescriptionService prescriptionService;
	
	
	@GetMapping(value = "/prescriptions")
	@ApiOperation(value = "Get prescription list", notes = "Returns list of all prescriptions")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor') or hasRole('Pharmacist')")
	public List<Prescription> getPrescriptions(){
		log.info("Request to return all prescriptions");
		return prescriptionService.getPrescriptions();
	}
	
	@GetMapping(value = "/validPrescriptions")
	@ApiOperation(value = "Get all valid prescriptions", notes = "Returns list of all valid prescriptions")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor') or hasRole('Pharmacist')")
	public List<Prescription> getValidPrescriptions(){
		log.info("Request to return all valid prescriptions");
		return prescriptionService.getValidPrescriptions();
	}
	
	@GetMapping(value = "/soldPrescriptions/{id}")
	@ApiOperation(value = "Get all sold prescriptions by pharmacist Id", notes = "Returns list of all sold prescriptions by pharmacist id")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor') or hasRole('Pharmacist')")
	public List<Prescription> getSoldPrescriptions(@PathVariable Long id){
		log.info("Request to return a list of all sold prescriptions by pharmacist's id");
		return prescriptionService.getSoldPrescriptions(id);
	}
	
	@GetMapping(value = "/prescriptions/{id}")
	@ApiOperation(value = "Get prescription", notes = "Returns a single prescription")
	@PreAuthorize("hasRole('Admin') or hasRole('Patient') or hasRole('Doctor') or hasRole('Pharmacist')")
	public Prescription getPrescription(@PathVariable Long id) {
		log.info("Request to return a prescription");
		return prescriptionService.getPrescription(id);
	}
	
	@PostMapping(value = "/prescriptions/new/{doctorId}/{patientId}")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create prescriptions", notes = "Creates prescription")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor')")
	public void createPrescription(@RequestBody CreatePrescriptionCmd cmd, @PathVariable Long doctorId, @PathVariable Long patientId) {
		log.info("Request to create a prescription");
		prescriptionService.createPrescription(cmd, doctorId, patientId);
	}
	
	@PutMapping(value = "/prescriptions/{id}")
	@ApiOperation(value = "Update prescription", notes = "Updates prescription details")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor') or hasRole('Pharmacist')")
	public void updatePrescription(@RequestBody CreatePrescriptionCmd cmd, @PathVariable Long id) {
		log.info("Request to update prescription details");
		prescriptionService.updatePrescription(cmd, id);
	}
	
	@PutMapping(value = "/prescription/{prescriptionId}/{pharmacistId}")
	@ApiOperation(value = "Sell prescription", notes = "Sells prescription and signs")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor') or hasRole('Pharmacist')")
	public void sellPrescription(@PathVariable Long prescriptionId, @PathVariable Long pharmacistId) {
		log.info("Request to sell and sign a prescription");
		prescriptionService.sellPrescription(prescriptionId, pharmacistId);
	}
	
}


