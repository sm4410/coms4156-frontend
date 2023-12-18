import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map } from "rxjs";
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


    public getProviders(clientId: number): Observable<ServiceProvider[]> {
        const uri = `${environment.apiBaseUrl}/client/${clientId}/allProviders`;
        const result = this.http.get<ServiceProvider[]>(uri).pipe(
            map(res => {
                return res.map(({id, parentClientId, providerName, address, location, services, availabilities}) => ({id, parentClientId, providerName, address, location, services, availabilities})) as ServiceProvider[];
            })
        );

        return result;
    }
}