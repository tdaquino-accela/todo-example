import { Component, input, output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { TodosFilter } from "../../todos.model";

@Component({
  selector: "anms-todo-list-header",
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule, MatIconModule],
  templateUrl: "./todo-list-header.component.html",
})
export class TodoListHeaderComponent {
  public readonly filter = input.required<TodosFilter | null>();
  public readonly onFilterTodos = output<TodosFilter>();
}