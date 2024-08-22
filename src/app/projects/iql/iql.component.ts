import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iql',
  templateUrl: './iql.component.html',
  styleUrls: ['./iql.component.scss']
})
export class IqlComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public languages = "typescript";
  public code = `let todos = 
  await db.Todos
    .Where(todo => todo.Deadline < new Date() && todo.Name.includes("front end"))
    .OrderBy(todo => todo.EstimatedDays)
    .ToIqlAsync();
`;
  public code2 = `let todo = await db.Todos.GetWithKeyAsync(1234);
todo.Name = "A new name";
let result = await db.SaveChangesAsync();
if(result.Success) {
  // ...
}
`;
}
