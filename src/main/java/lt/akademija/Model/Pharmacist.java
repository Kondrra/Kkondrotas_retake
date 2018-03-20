package lt.akademija.Model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.validator.constraints.NotBlank;

@Entity
@Table(name = "PHARMACIST")
@PrimaryKeyJoinColumn(name = "pharmacistId")
@DiscriminatorValue("Pharmacist")
public class Pharmacist extends User {
	@NotBlank
	private String companyType;
	private String companyName;

	public String getCompanyType() {
		return companyType;
	}

	public void setCompanyType(String companyType) {
		this.companyType = companyType;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

}
