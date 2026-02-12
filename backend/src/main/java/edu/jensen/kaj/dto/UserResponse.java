package edu.jensen.kaj.dto;

import java.time.LocalDateTime;

import edu.jensen.kaj.entity.User;

public class UserResponse {
    private Long id;
    private String email;
    private String username;
    private LocalDateTime createdAt;
    // ⚠️ password is EXCLUDED for security

    public UserResponse(Long id, String email, String username, LocalDateTime createdAt) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.createdAt = createdAt;
    }

    // ❕ The code below is using the `static factory method` which results in
    // cleaner code. You only need the product as argument, you can remove this
    // section and hardcode getters as arguments.
    public static UserResponse from(User user) {
        return new UserResponse(
                user.getId(),
                user.getEmail(),
                user.getUsername(),
                user.getCreatedAt());
    }

    // Getters only (DTOs are typically immutable)
    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    public String getUsername() {
        return username;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

}
