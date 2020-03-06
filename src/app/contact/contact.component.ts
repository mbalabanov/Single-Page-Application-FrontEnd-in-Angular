import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

	info = new FormGroup({
		userName: new FormControl('',Validators.required),
		userEmail: new FormControl('',Validators.required),
		userMessage: new FormControl('',Validators.required)
	})

	constructor() { }

	ngOnInit(): void {
	}

	onSubmit(){
		if (this.info.valid) {
			var a = this.info.value;
			window.alert('Thank you! Your message was sent.');
		} else {
			window.alert('Please fill out the contact form.');
		}
	}
}
