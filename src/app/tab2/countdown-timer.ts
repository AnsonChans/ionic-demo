import { OnInit, OnDestroy, Component } from '@angular/core';

@Component({
    selector:'app-countdown-timer',
    template:`<p>{{message}}</p>`
})

export class CountdownTimerComponent implements OnInit,OnDestroy{

    intervalId = 0;
    message ='';
    seconds=11;

    clearTimer(){clearInterval(this.intervalId)};
    
    ngOnInit(){
        this.start();
    }

    ngOnDestroy(){
        this.clearTimer();
    }

    stop(){
        this.clearTimer();
        this.message = `Holding at T-${this.seconds} seconds`
    }
    start(){
        this.countDown();
    }

    private countDown(){
        this.clearTimer();
        this.intervalId = window.setInterval(()=>{
            this.seconds -=1;
            if(this.seconds==0){
                this.message = `Blast off!`
            }else{
                if(this.seconds<0){
                    this.seconds=10;
                }
                this.message = `T-${this.seconds} seconds and counting`
            }
        },1000)
    }

}