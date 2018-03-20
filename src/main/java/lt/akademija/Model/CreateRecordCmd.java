package lt.akademija.Model;

public class CreateRecordCmd {

	private Long id;
	private String personalId; // asmens kodas reik su pacientu sujungt
	private String duration; // vizito laikas
	private String tlk; // ICD-10/TLK10
	private String appDesc; // vizito aprasas
	private String vlk; // kompensuojamas ar ne? bool?
	private String repeated; // pakartotinis? bool ar ne?
	private String date; // vizito data

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

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
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

	public String getVlk() {
		return vlk;
	}

	public void setVlk(String vlk) {
		this.vlk = vlk;
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

}
