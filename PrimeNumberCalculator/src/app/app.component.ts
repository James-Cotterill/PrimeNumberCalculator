import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {AppService} from "./app.service";
import {first} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {

  title = 'Prime Number Calculator';
  returnedPrimedNumbers: any;

  constructor(http: HttpClient, private appService: AppService) {
  }

  onEnter() {
    const input = document.getElementById('userIntInput') as HTMLInputElement | null;

    if (!input?.value || Number(input.value) < 1 || Number(input.value) > 100) {
      alert("Please enter a number between 1 and 100")
    } else {

      this.appService.getPrimeNumbers(Number(input?.value)).pipe(first()).subscribe({
        next: (response: any) => {
          this.returnedPrimedNumbers = response;
          input.value = ""
        },
        error: (error: any) => {
          alert(error.error)
          this.returnedPrimedNumbers = null;
          input.value = ""
        }
      });
    }
  }

}
