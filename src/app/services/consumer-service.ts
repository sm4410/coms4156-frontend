import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Consumer } from "../dtos/consumer";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth-service";

@Injectable({
    providedIn: 'root'
})
export class ConsumerService {
    constructor(private http: HttpClient,
        private authService: AuthService) {
    }

    public post(consumer: Consumer): Observable<Consumer> {
        const client = this.authService.client();
        const uri = `${environment.apiBaseUrl}/client/${client?.clientId}/consumer`;
        const result = this.http.post<Consumer>(uri, consumer);

        return result;
    }

    public getByName(name: string): Observable<Consumer> {
        const client = this.authService.client();
        const uri = `${environment.apiBaseUrl}/client/${client?.clientId}/consumer/${name}`;
        const result = this.http.get<Consumer>(uri);

        return result;
    }
}