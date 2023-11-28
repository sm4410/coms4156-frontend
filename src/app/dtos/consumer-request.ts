import { TupleDateTime } from "./tupledatetime";

export interface ConsumerRequest {
    preferredProviderID: number,
    consumerId: number,
    requestDate: TupleDateTime,
    serviceType: string,
}