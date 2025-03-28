package service;
import model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser() {
        User user = new User();
        user.setUsername("John Doe");
        user.setEmail("john@example.com");
        userRepository.save(user);
    }
}
