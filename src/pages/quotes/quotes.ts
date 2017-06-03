import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes.service';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  
  quoteGroup: {category: string, quotes: Quote[], icon: string};
  
  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
    private quotesService: QuotesService){}

  // ionViewDidLoad() {
  //   this.quoteGroup = this.navParams.data;
  // Add elvis operator (?) in template to use
  // }


  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert =this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Confirmation',
      message: 'Are you sure you want to this Quote to Favorites?',
      buttons: [{
        text: 'yeah',
        handler: ()=> {
          this.quotesService.addToFavorites(selectedQuote);
        }

      },
      {
        text: 'nah',
        role: 'cancel',
        handler: () => {
          console.log('cancelled');
        }
      }]
    });

    alert.present();
  }

}
