import { Component, OnInit } from "@angular/core";

@Component({
    selector:'welcome-component',
    templateUrl:'./welcome.component.html'
})
export class WelcomeComponent implements OnInit
{
    ngOnInit(): void {
        
        alert("hi");
    }
    
}