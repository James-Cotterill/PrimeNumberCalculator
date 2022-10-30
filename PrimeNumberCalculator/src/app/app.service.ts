import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient) {
  }

  getPrimeNumbers(enteredInt: number): Observable<any> {
    const url = '/API/GetPrimeNumbers';
    let queryParams = new HttpParams();
    queryParams = queryParams.append("enteredInt", enteredInt);
    return this.http.get(url,{params:queryParams});
  }
}
