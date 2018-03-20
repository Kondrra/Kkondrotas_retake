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
import lt.akademija.Model.CreateRecordCmd;
import lt.akademija.Model.Record;
import lt.akademija.Service.RecordService;

@RestController
@Api(value = "Record")
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/api")
public class RecordController {
	private static final Logger log = LogManager.getLogger(RecordController.class);
	@Autowired
	private RecordService recordService;
	
	
	@GetMapping(value = "/records")
	@ApiOperation(value = "Get record list", notes = "Returns list of all records")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor')")
	public List<Record> getRecords(){
		log.info("Request to return a list of all records");
		return recordService.getRecords();
	}
	
	@GetMapping(value = "/records/{id}")
	@ApiOperation(value = "Get record", notes = "Returns a single record")
	@PreAuthorize("hasRole('Admin') or hasRole('Patient') or hasRole('Doctor')")
	public Record getRecord(@PathVariable Long id) {
		log.info("Request to return a record");
		return recordService.getRecord(id);
	}
	
	@PostMapping(value = "/records/new/{doctorId}/{patientId}")
	@ResponseStatus(HttpStatus.CREATED)
	@ApiOperation(value = "Create records", notes = "Creates record")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor')")
	public void createRecord(@RequestBody CreateRecordCmd cmd, @PathVariable Long doctorId, @PathVariable Long patientId) {
		log.info("Request to create a record");
		recordService.createRecord(cmd, doctorId, patientId);
	}
	
	@PutMapping(value = "/records/{id}")
	@ApiOperation(value = "Update record", notes = "Updates record details")
	@PreAuthorize("hasRole('Admin') or hasRole('Doctor')")
	public void updateRecord(@RequestBody CreateRecordCmd cmd, @PathVariable Long id) {
		log.info("Request to update record's details");
		recordService.updateRecord(cmd, id);
	}
}

