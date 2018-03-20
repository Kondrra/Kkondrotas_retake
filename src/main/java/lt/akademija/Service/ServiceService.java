package lt.akademija.Service;

import java.util.List;

import javax.transaction.Transactional;

import lt.akademija.Model.MyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.CreateServiceCmd;
import lt.akademija.Model.MyService;
import lt.akademija.Model.User;
import lt.akademija.Repository.ServiceRepository;



@Service

public class ServiceService {
	
	@Autowired
	private ServiceRepository serviceRepository;

	@Transactional
	public List<MyService> getService(){
		return serviceRepository.findAll();
	}

	@Transactional
	public void createService(@RequestBody CreateServiceCmd cmd) {
		MyService service = new MyService();
		service.setServiceName(cmd.getserviceNAme());
		service.setCategory(cmd.getCategory());
		service.setPrice(cmd.getPrice());
		service.setDescription(cmd.getDescription());
		service.setPicture(cmd.getPicture());
		service.setProvider(cmd.getProvider());
		serviceRepository.save(service);
	}
	
	@Transactional
	public void updateDoctor(@RequestBody CreateServiceCmd cmd, @PathVariable Long id) {
		MyService newService = serviceRepository.findOne(id);
		newService.setServiceName(cmd.getserviceNAme());
		newService.setCategory(cmd.getCategory());
		newService.setPrice(cmd.getPrice());
		newService.setDescription(cmd.getDescription());
		newService.setPicture(cmd.getPicture());
		newService.setProvider(cmd.getProvider());
		serviceRepository.save(newService);
	}
	

}