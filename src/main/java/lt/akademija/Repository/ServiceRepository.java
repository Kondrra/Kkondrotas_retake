package lt.akademija.Repository;


import java.util.List;
import lt.akademija.Model.MyService;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ServiceRepository extends JpaRepository <MyService, Long>{
	
	MyService findByServiceName(String search);
}
