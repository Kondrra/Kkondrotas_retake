package lt.akademija.Model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Provider")
@PrimaryKeyJoinColumn(name = "adminId")
@DiscriminatorValue("Admin")
public class Admin extends User {

	
}
