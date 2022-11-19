import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, switchMap, takeUntil, tap } from 'rxjs';
import { AuthGuardService } from '../_services/auth-guard.service';
import { TrainControlService } from '../_services/train-control.service';
import { SeatState } from '../_interfaces/train-state';
import { first } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  seatV1_1 !: string;
  seatV1_2 !: string;
  seatV1_3 !: string;
  seatV1_4 !: string;
  seatV1_5 !: string;
  seatV1_6 !: string;
  seatV1_7 !: string;
  seatV1_8 !: string;

  seatV2_1 !: string;
  seatV2_2 !: string;
  seatV2_3 !: string;
  seatV2_4 !: string;
  seatV2_5 !: string;
  seatV2_6 !: string;
  seatV2_7 !: string;
  seatV2_8 !: string;

  seatV1_1_state!: number;
  seatV1_2_state !: number;
  seatV1_3_state !: number;
  seatV1_4_state !: number;
  seatV1_5_state !: number;
  seatV1_6_state !: number;
  seatV1_7_state !: number;
  seatV1_8_state !: number;

  seatV2_1_state !: number;
  seatV2_2_state !: number;
  seatV2_3_state !: number;
  seatV2_4_state !: number;
  seatV2_5_state !: number;
  seatV2_6_state !: number;
  seatV2_7_state !: number;
  seatV2_8_state !: number;

  seat !: SeatState;
  seatState !: any;

  email !: string;

  constructor(private auth : AuthGuardService, private trainControlSrv : TrainControlService,  private route : Router) {
    this.auth.usernameAux.subscribe((u: string) => { this.email = u });

  }

  ngOnInit(): void {
    this.checkStates()
    /*setInterval(() => {
      window.location.reload();
    }, 4000);*/
  }

  checkStates(){
    this.getSeatState("V1-1");
    this.getSeatState("V1-2");
    this.getSeatState("V1-3");
    this.getSeatState("V1-4");
    this.getSeatState("V1-5");
    this.getSeatState("V1-6");
    this.getSeatState("V1-7");
    this.getSeatState("V1-8");
    this.getSeatState("V2-1");
    this.getSeatState("V2-2");
    this.getSeatState("V2-3");
    this.getSeatState("V2-4");
    this.getSeatState("V2-5");
    this.getSeatState("V2-6");
    this.getSeatState("V2-7");
    this.getSeatState("V2-8");

  }

  getSeatState(seatCode : string){
    this.seat = {seat : seatCode}
    this.trainControlSrv.getSeatState(this.seat).pipe(first())
    .subscribe(response => { 
      this.seatState = response;
      if(seatCode == "V1-1"){
        this.seatV1_1_state = this.seatState.data.state;
        if(this.seatV1_1_state == 0){
          this.seatV1_1 = "card free-seat";
        }
        else{
          this.seatV1_1 = "card occupied-seat";
        }
      }
      else if(seatCode == "V1-2"){
        this.seatV1_2_state = this.seatState.data.state;
        if(this.seatV1_2_state == 0){
          this.seatV1_2 = "card free-seat";
        }
        else{
          this.seatV1_2 = "card occupied-seat"
        }

      }
      else if(seatCode == "V1-3"){
        this.seatV1_3_state = this.seatState.data.state;
        if(this.seatV1_3_state == 0){
          this.seatV1_3 = "card free-seat";
        }
        else{
          this.seatV1_3 = "card occupied-seat"
        }
        
      }
      else if(seatCode == "V1-4"){
        this.seatV1_4_state = this.seatState.data.state;
        if(this.seatV1_4_state == 0){
          this.seatV1_4 = "card free-seat";
        }
        else{
          this.seatV1_4 = "card occupied-seat"
        }
        
      }
      else if(seatCode == "V1-5"){
        this.seatV1_5_state = this.seatState.data.state;
        if(this.seatV1_5_state == 0){
          this.seatV1_5 = "card free-seat";
        }
        else{
          this.seatV1_5 = "card occupied-seat"
        }
        
      }
      else if(seatCode == "V1-6"){
        this.seatV1_6_state = this.seatState.data.state;
        if(this.seatV1_6_state == 0){
          this.seatV1_6 = "card free-seat";
        }
        else{
          this.seatV1_6 = "card occupied-seat"
        }
        
      }
      else if(seatCode == "V1-7"){
        this.seatV1_7_state = this.seatState.data.state;
        if(this.seatV1_7_state == 0){
          this.seatV1_7 = "card free-seat";
        }
        else{
          this.seatV1_7 = "card occupied-seat"
        }
        
      }
      else if(seatCode == "V1-8"){
        this.seatV1_8_state = this.seatState.data.state;
        if(this.seatV1_8_state == 0){
          this.seatV1_8 = "card free-seat";
        }
        else{
          this.seatV1_8 = "card occupied-seat"
        }
        
      }
      else if(seatCode == "V2-1"){
        this.seatV2_1_state = this.seatState.data.state;
        if(this.seatV2_1_state == 0){
          this.seatV2_1 = "card free-seat";
        }
        else{
          this.seatV2_1 = "card occupied-seat"
        }
        
      }
      else if(seatCode == "V2-2"){
        this.seatV2_2_state = this.seatState.data.state;
        if(this.seatV2_2_state == 0){
          this.seatV2_2 = "card free-seat";
        }
        else{
          this.seatV2_2 = "card occupied-seat"
        }
      }
      else if(seatCode == "V2-3"){
        this.seatV2_3_state = this.seatState.data.state;
        if(this.seatV2_3_state == 0){
          this.seatV2_3 = "card free-seat";
        }
        else{
          this.seatV2_3 = "card occupied-seat"
        }
      }
      else if(seatCode == "V2-4"){
        this.seatV2_4_state = this.seatState.data.state;
        if(this.seatV2_4_state == 0){
          this.seatV2_4 = "card free-seat";
        }
        else{
          this.seatV2_4 = "card occupied-seat"
        }
      }
      else if(seatCode == "V2-5"){
        this.seatV2_5_state = this.seatState.data.state;
        if(this.seatV2_5_state == 0){
          this.seatV2_5 = "card free-seat";
        }
        else{
          this.seatV2_5 = "card occupied-seat"
        }
      }
      else if(seatCode == "V2-6"){
        this.seatV2_6_state = this.seatState.data.state;
        if(this.seatV2_6_state == 0){
          this.seatV2_6 = "card free-seat";
        }
        else{
          this.seatV2_6 = "card occupied-seat"
        }
      }
      else if(seatCode == "V2-7"){
        this.seatV2_7_state = this.seatState.data.state;
        if(this.seatV2_7_state == 0){
          this.seatV2_7 = "card free-seat";
        }
        else{
          this.seatV2_7 = "card occupied-seat"
        }
      }
      else if(seatCode == "V2-8"){
        this.seatV2_8_state = this.seatState.data.state;
        if(this.seatV2_8_state == 0){
          this.seatV2_8 = "card free-seat";
        }
        else{
          this.seatV2_8 = "card occupied-seat"
        }
      }
      else{
        console.log("Invalid seat code")
      }
    })
  }

}
