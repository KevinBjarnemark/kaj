package edu.jensen.kaj.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import edu.jensen.kaj.dto.UserResponse;
import edu.jensen.kaj.entity.User;
import edu.jensen.kaj.service.UserService;

@RestController
@CrossOrigin(origins = "${FRONTEND_URL}")
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

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

    @GetMapping("/{id}")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        UserResponse response = new UserResponse(id, user.getEmail(), user.getUsername(), user.getCreatedAt());
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponse> updateUserById(@PathVariable Long id,
            @RequestBody User user) {
        try {
            User updated = userService.updateUserById(id,
                    user.getUsername(),
                    user.getEmail());

            UserResponse response = new UserResponse(
                    updated.getId(),
                    updated.getUsername(),
                    updated.getEmail(),
                    updated.getCreatedAt());

            return ResponseEntity.ok(response);

        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

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

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserById(@PathVariable Long id) {
        try {
            userService.deleteUserById(id);
            return ResponseEntity.noContent().build();

        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

}
