package edu.jensen.kaj.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.jensen.kaj.dto.UserResponse;
import edu.jensen.kaj.entity.User;
import edu.jensen.kaj.service.UserService;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}") // ❕ Allow CORS on localhost (.env)
@RequestMapping("/users")
public class UserController {

    // ❕ Real DI is recommended (almost always)
    // - Immutability - field can be set to final
    // - 5 Second vs 30 second test (does not need Spring)
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Create new user
    @PostMapping
    public ResponseEntity<UserResponse> createUser(@RequestBody User user) {
        User createdUser = userService.createUser(
                user.getEmail(),
                user.getUsername(),
                user.getPassword());

        UserResponse response = new UserResponse(
                createdUser.getId(),
                createdUser.getEmail(),
                createdUser.getUsername(),
                createdUser.getCreatedAt());

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // Get All users
    @GetMapping
    public ResponseEntity<List<UserResponse>> getUserAllUsers() {
        List<User> users = userService.getAllUsers();

        List<UserResponse> response = new ArrayList<>();
        for (User user : users) {
            response.add(new UserResponse(
                    user.getId(),
                    user.getEmail(),
                    user.getUsername(),
                    user.getCreatedAt()));
        }

        return ResponseEntity.ok(response);
    }
}
