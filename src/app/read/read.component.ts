import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../reservation.service';



@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  reservations: any[] = [];

  constructor(private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getAllReservations();
  }

  getAllReservations(): void {
    this.reservationService.getAll()
      .subscribe((reservations: any[]) => {
        this.reservations = reservations;
      });
  }

  deleteReservation(id: any): void {
    if (confirm('Are you sure you want to delete this reservation?')) {
      this.reservationService.delete(id)
        .subscribe(() => {
          // Refresh the list of reservations after deletion
          this.getAllReservations();
        });
    }
  }
}
