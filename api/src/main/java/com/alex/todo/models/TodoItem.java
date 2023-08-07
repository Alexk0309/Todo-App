package com.alex.todo.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table
public class TodoItem {

    @Id
    @SequenceGenerator(
            name = "todo_sequence",
            sequenceName = "todo_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "todo_sequence"
    )
    private Long Id;
    private String description;
    private boolean complete;
    private LocalDate date;

    public TodoItem() {}

    public TodoItem(Long Id, String description, boolean complete, LocalDate date) {
        this.Id = Id;
        this.description = description;
        this.complete = complete;
        this.date = date;
    }

    public TodoItem(String description, boolean complete, LocalDate date) {
        this.description = description;
        this.complete = complete;
        this.date = date;
    }

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isComplete() {
        return complete;
    }

    public void setComplete(boolean complete) {
        this.complete = complete;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    @Override
    public String toString() {
        return "TodoItem{" +
                "Id=" + Id +
                ", description='" + description + '\'' +
                ", complete=" + complete +
                ", date=" + date +
                '}';
    }
}
