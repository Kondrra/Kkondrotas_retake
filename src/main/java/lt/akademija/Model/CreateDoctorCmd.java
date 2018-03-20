package lt.akademija.Model;

import javax.persistence.*;


public class CreateDoctorCmd extends CreateUserCmd {
	
	private String specialisation;

	public String getSpecialisation() {
		return specialisation;
	}

	public void setSpecialisation(String specialisation) {
		this.specialisation = specialisation;
	}

	
}
