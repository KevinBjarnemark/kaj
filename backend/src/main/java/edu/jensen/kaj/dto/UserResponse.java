package edu.jensen.kaj.dto;

import java.time.LocalDateTime;

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
