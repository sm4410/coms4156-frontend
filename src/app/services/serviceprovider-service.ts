import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ServiceProvider } from "../dtos/service-provider";
import { ProviderService } from "../dtos/provider-service";

@Injectable({
    providedIn: 'root'
})
export class ServiceProviderService {
    constructor(private http: HttpClient) {
    }

    public saveProvider(serviceProvider: ServiceProvider): Observable<ServiceProvider> {
        const uri = `${environment.apiBaseUrl}/client/${serviceProvider.parentClientId}/serviceProvider`;
        const result = this.http.post<ServiceProvider>(uri, serviceProvider);

        return result;
    }

    public saveService(clientId: number, service: ProviderService): Observable<ProviderService> {
        const uri = `${environment.apiBaseUrl}/client/${clientId}/service`;
        const result = this.http.post<ProviderService>(uri, service);

        return result;
    }
}