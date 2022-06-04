import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task-tracker';
  showAddTask: boolean = false;
  Subscription: Subscription | undefined;

  constructor(private UiService: UiService, private router: Router) { 
    this.Subscription = this.UiService.onToggle()
    .subscribe( (value) => ( this.showAddTask = value ));
  }

  ngOnInit(): void {
  }
  toggleAddTask(){
    // console.log("toggle")
    this.UiService. toggleAddTask();
  }

  hasRoute(route: string){
    return this.router.url===route;
  }

}
