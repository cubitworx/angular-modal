import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';

// Local
import { AppComponent } from './app.component';

@NgModule({
	bootstrap: [ AppComponent ],
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class AppModule { }
