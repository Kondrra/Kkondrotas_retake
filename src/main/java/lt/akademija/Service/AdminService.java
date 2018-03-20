package lt.akademija.Service;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import lt.akademija.Model.Admin;
import lt.akademija.Model.CreateAdminCmd;
import lt.akademija.Model.CreateUserCmd;
import lt.akademija.Model.User;
import lt.akademija.Repository.AdminRepository;
import lt.akademija.Repository.UserRepository;

@Service

public class AdminService {

	@Autowired
	private AdminRepository adminRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Autowired
	private UserRepository userRepository;

	@Transactional
	public List<Admin> getAdmins() {
		return adminRepository.findAll();
	}
	
	@Transactional
	public Page<Admin> findPaginated(int page, int size){
		return adminRepository.findAll(new PageRequest(page, size));
	}

	@Transactional
	public User getAdmin(@PathVariable Long id) {
		return adminRepository.findOne(id);
	}

	@Transactional
	public void createAdmin(@RequestBody CreateAdminCmd cmd) {
		Admin admin = new Admin();
		admin.setName(cmd.getName());
		admin.setSurname(cmd.getSurname());
		admin.setUsername(cmd.getUsername());
		admin.setPassword(passwordEncoder.encode(cmd.getPassword()));
		admin.setRole("Admin");
		adminRepository.save(admin);
	}

	@Transactional
	public void changePassword(@RequestBody CreateUserCmd cmd, @PathVariable Long id) throws Exception {
		User user = userRepository.findOne(id);
		if(passwordEncoder.matches(cmd.getMatchingPass(), user.getPassword())){
			user.setPassword(passwordEncoder.encode(cmd.getNewPassword()));
		} else {
			throw new Exception();
		}
	}

	@Transactional
	public void updateAdmin(@RequestBody CreateAdminCmd cmd, @PathVariable Long id) {
		Admin newAdmin = adminRepository.findOne(id);
		newAdmin.setName(cmd.getName());
		newAdmin.setSurname(cmd.getSurname());
		newAdmin.setUsername(cmd.getUsername());
		adminRepository.save(newAdmin);
	}
}