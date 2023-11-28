import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Client } from "../dtos/client";
import { Observable, map } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    constructor(private http: HttpClient) {
    }

    public getAll(): Observable<Client[]> {
        const uri = `${environment.apiBaseUrl}/clients`;
        const result = this.http.get<Client[]>(uri).pipe(
            map(res => {
                return res.map(({clientId, clientName}) => ({clientId, clientName})) as Client[];
            })
        );

        return result;
    }

    public getById(id: number): Observable<Client> {
        const uri = `${environment.apiBaseUrl}/client/${id}`;
        const result = this.http.get<Client>(uri);

        return result;
    }

    public getByName(name: string): Observable<Client> {
        const uri = `${environment.apiBaseUrl}/clientByName/${name}`;
        const result = this.http.get<Client>(uri);

        return result;
    }

    public post(client: Client): Observable<Client> {
        const uri = `${environment.apiBaseUrl}/clients`;
        const result = this.http.post<Client>(uri, client);

        return result;
    }

    public delete(id: number): Observable<Object> {
        const uri = `${environment.apiBaseUrl}/client/${id}`;
        const result = this.http.delete(uri);

        return result;
    }
}