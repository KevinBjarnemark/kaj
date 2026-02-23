package edu.jensen.kaj.service;

import java.util.List;

import edu.jensen.kaj.exception.UserNotFoundException;
import org.springframework.stereotype.Service;

import edu.jensen.kaj.entity.User;
import edu.jensen.kaj.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Create a new user
    public User createUser(String email, String username, String password) {

        // Check if email already exists
        if (userRepository.existsByEmail(email)) {
            throw new RuntimeException("Email already exists: " + email);
        }

        // Create user object
        User user = new User(email, username, password);
        // ❕ SQL INSERT happens automatically
        return userRepository.save(user);
    }

    // Get user by id
    public User getUserById(Long id) {
        // ❕ SELECT * FROM users WHERE id = ?
        return userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }

    public User updateUser(Long id, String username, String email) {
        User user = userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));

        if (username != null) {
            user.setUsername(username);
        }
        if (email != null) {
            user.setEmail(email);
        }

        return userRepository.save(user);
    }

    // Get all users
    public List<User> getAllUsers() {
        // ❕ SELECT * FROM users
        return userRepository.findAll();
    }

}
