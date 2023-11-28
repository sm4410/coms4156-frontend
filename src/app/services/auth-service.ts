import { Injectable } from "@angular/core";

import * as CryptoJS from 'crypto-js';

import { environment } from "src/environments/environment";
import { Consumer } from "../dtos/consumer";
import { Client } from "../dtos/client";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private TOKEN: string = "token";
    private CLIENT: string = "client";

    public login(consumer: Consumer): void {
        const consumerJson = JSON.stringify(consumer);
        const encryptedData = this.encrypt(consumerJson);
        localStorage.setItem(this.TOKEN, encryptedData);
    }

    public saveClient(client: Client): void {
        const clientJson = JSON.stringify(client);
        const encryptedData = this.encrypt(clientJson);
        localStorage.setItem(this.CLIENT, encryptedData);
    }

    public logout(): void {
        localStorage.removeItem(this.TOKEN);
        localStorage.removeItem(this.CLIENT);
    }

    public user(): Consumer | undefined {
        const encryptedData = localStorage.getItem(this.TOKEN);
        const consumer = encryptedData ? JSON.parse(this.deencrypt(encryptedData)) as Consumer : undefined;

        return consumer;
    }

    public client(): Client | undefined {
        const encryptedData = localStorage.getItem(this.CLIENT);
        const client = encryptedData ? JSON.parse(this.deencrypt(encryptedData)) as Client : undefined;

        return client;
    }

    public isAuthenticated(): boolean {
        const token = localStorage.getItem(this.TOKEN);
        return !!token;
    }

    private encrypt(text: string): string {
        const passphrase = environment.passphrase;
        return CryptoJS.AES.encrypt(text, passphrase).toString();
    }

    private deencrypt(ciphertext: string): string {
        const passphrase = environment.passphrase;
        const bytes = CryptoJS.AES.decrypt(ciphertext, passphrase);
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        return originalText;
    }
}