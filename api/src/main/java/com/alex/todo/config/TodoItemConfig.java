package com.alex.todo.config;

import com.alex.todo.models.TodoItem;
import com.alex.todo.repositories.TodoItemRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;

@Configuration
public class TodoItemConfig {

    @Bean
    CommandLineRunner commandLineRunner(TodoItemRepository repository) {
        return args -> {
            TodoItem todo1 = new TodoItem(
                    "First Task",
                    false,
                    LocalDate.now()
            );
            TodoItem todo2 = new TodoItem(
                    "Second Task",
                    true,
                    LocalDate.now()
            );

            repository.saveAll(
                    List.of(todo1, todo2)
            );
        };
    }
}
