import { TupleDateTime } from "./tupledatetime";

export interface ConsumerAppointment {
    providerID: number,
    consumerId: number,
    appointmentTime: TupleDateTime,
    serviceType: string
}