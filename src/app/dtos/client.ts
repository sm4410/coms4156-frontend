import { ServiceProvider } from "./service-provider";

export interface Client {
    clientId: number,
    clientName: string,
    serviceProviders: ServiceProvider[]
}