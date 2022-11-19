/**
 * This service contains the requests to communicate with the server.
 * @author Mónica Waterhouse
 * @version version 1.0
 * 
 */
 import { Injectable } from '@angular/core';
 import { environment } from 'src/environments/environment';
 import { LoginInfo, RegisterInfo } from '../_interfaces/user';
 import { SeatState} from '../_interfaces/train-state';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
 
 @Injectable({
   providedIn: 'root'
 })

@Injectable({
  providedIn: 'root'
})
export class TrainControlService {

  constructor(private http: HttpClient) { 
  
  }

  getSeatState(seatState : SeatState){
    return this.http.post(`${environment.apiUrl}/home/get_seat_state`, seatState);
  }

}
