import { NgModule } from '@angular/core';
import { TodosComponent } from './components/todos/todos.component';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TodosService } from './services/todos.service';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
];

@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {}
