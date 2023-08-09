package com.alex.todo.models;

import jakarta.persistence.*;

import java.text.SimpleDateFormat;
import java.util.Date;

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
    private String date;

    SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");

    public TodoItem() {}

    public TodoItem(Long Id, String description, boolean complete) {
        this.Id = Id;
        this.description = description;
        this.complete = complete;
    }

    public TodoItem(String description, boolean complete) {
        this.description = description;
        this.complete = complete;
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

    public String getDate() {
        return date;
    }

    @PrePersist
    public void setDate() {
        this.date = dateFormat.format(new Date());
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
