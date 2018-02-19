import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    constructor(private userService: UserService) { }

    ngOnInit() {
    }

    onRegister(form: NgForm) {
        this.userService.register(form.value.name, form.value.email, form.value.password)
            .subscribe(
            response => console.log(response),
            error => console.log(error)
            );
    }


}
