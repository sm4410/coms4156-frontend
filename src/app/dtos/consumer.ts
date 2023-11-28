export interface Consumer {
    consumerId: number,
    consumerName: string,
    parentClientId: number,
    address: string,
    location: number[]
}