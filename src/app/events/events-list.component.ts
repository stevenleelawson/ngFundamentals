import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular 2 Events</h1>
      <hr />
      <event-thumbnail (eventClick)="handleEventClicked($event)" [event]="event1"></event-thumbnail>
    </div>
  `, 
})
export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '10/27/59',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-sheild.png',
    location: {
      address: '1057 DT',
      city: 'Taco',
      country: 'TacoTown',
    }
  }

  handleEventClicked(data) {
    console.log('received:', data)
  }
}