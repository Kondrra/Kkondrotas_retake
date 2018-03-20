package lt.akademija.Model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import com.fasterxml.jackson.annotation.JsonBackReference;
import org.hibernate.validator.constraints.NotBlank;

@Entity
public class Record {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(unique = true)
	private Long id;
	@Pattern(regexp = "[3-6]{1}[0-9]{10}")
	private String personalId; // asmens kodas reik su pacientu sujungt
	@NotBlank
	private String duration; // vizito laikas
	@Pattern(regexp = "[A-Z]{1}[\\d]{2}[-][A-Z]{1}[\\d]{2}")
	private String tlk; // ICD-10/TLK10
	private String appDesc; // vizito aprasas
	@NotBlank
	private String vlk; // kompensuojamas ar ne
	@NotBlank
	private String repeated; // pakartotinis
	private String date; // vizito data

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "doctorId")
	@JsonBackReference
	private Doctor doctor;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	@JoinColumn(name = "patientId")
	@JsonBackReference
	private Patient patient;

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPersonalId() {
		return personalId;
	}

	public void setPersonalId(String personalId) {
		this.personalId = personalId;
	}

	public String getVlk() {
		return vlk;
	}

	public void setVlk(String vlk) {
		this.vlk = vlk;
	}

	public String getTlk() {
		return tlk;
	}

	public void setTlk(String tlk) {
		this.tlk = tlk;
	}

	public String getAppDesc() {
		return appDesc;
	}

	public void setAppDesc(String appDesc) {
		this.appDesc = appDesc;
	}

	public String getRepeated() {
		return repeated;
	}

	public void setRepeated(String repeated) {
		this.repeated = repeated;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

}