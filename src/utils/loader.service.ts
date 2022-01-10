import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private loading: HTMLIonLoadingElement;
    private isShowing = false;

    constructor(private loadingCtrl: LoadingController) { }

    public async show(): Promise<void> {
        if (!this.isShowing) {
            this.loading = await this.loadingCtrl.create({
                spinner: 'bubbles',
                backdropDismiss: false,
                message: 'Please wait ...'
            });
            this.isShowing = true;
            return await this.loading.present();
        }
    }

    public async hide(): Promise<void> {
        if (this.loading && this.isShowing) {
            this.isShowing = false;
            await this.loading.dismiss();
        }
    }
}
