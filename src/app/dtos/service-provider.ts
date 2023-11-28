import { ProviderService } from "./provider-service";
import { TupleDateTime } from "./tupledatetime";

export interface ServiceProvider {
    id: number,
    parentClientId: number,
    providerName: string,
    address: string,
    location: number[],
    services: ProviderService[],
    availabilities: TupleDateTime[]
}