package com.alex.todo.controllers;

import com.alex.todo.models.TodoItem;
import com.alex.todo.repositories.TodoItemRepository;
import jakarta.transaction.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping("/api/v1/todoitems")
public class TodoItemController {
    private final TodoItemRepository todoItemRepository;

    public TodoItemController(TodoItemRepository todoItemRepository) {
        this.todoItemRepository = todoItemRepository;
    }

    @GetMapping
    public List<TodoItem> getAllItems() {
        return (List<TodoItem>) todoItemRepository.findAll();
    }

    @PostMapping
    public void addItem(@RequestBody TodoItem todoItem) {
        todoItemRepository.save(todoItem);
    }

    @DeleteMapping(path="{Id}")
    public void deleteItem(@PathVariable("Id") Long Id) {
        boolean exist = todoItemRepository.existsById(Id);
        if (!exist) {
            throw new IllegalStateException("Item " + Id + " does not exist");
        }
        todoItemRepository.deleteById(Id);
    }

    @PutMapping(path="{Id}")
    @Transactional
    public void updateItem(@PathVariable("Id") Long Id,
                           @RequestParam(required = false) String description,
                           @RequestParam(required = false) boolean complete) {
        TodoItem todoItem = todoItemRepository.findById(Id)
                .orElseThrow(() -> new IllegalStateException(
                        "Item " + Id + " does not exist"
        ));

        if (description != null &&
                !description.isEmpty() &&
                !Objects.equals(todoItem.getDescription(), description)) {
            todoItem.setDescription(description);
        }

        if (!Objects.equals(todoItem.isComplete(), complete)) {
            todoItem.setComplete(complete);
        }
    }

}
