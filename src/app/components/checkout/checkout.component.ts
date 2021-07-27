import {Component, OnInit} from '@angular/core';
import {CartService} from '@app/services/cart.service';
import {OrderService} from '@app/services/order.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {CartModelServer} from '@app/models/cart.model';
import {UserService} from '@app/services/user.service';

declare var gtag;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  cartTotal: number;
  cartData: CartModelServer;
  userId;
  time: number;

  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router,
              private spinner: NgxSpinnerService,
              private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.cartService.cartData$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
    this.userService.userData$.subscribe(data => {
      // @ts-ignore
      this.userId = data.userId || data.id;
      console.log(this.userId);
    });
    this.time = performance.now()

    console.log('object')
    gtag('event', 'transaccion', {
      eventCategory: 'begin',
      eventLabel: "User want to make a payment",
    })
  }

  onCheckout() {

    console.log('generar comprar pyapal');
    if (this.cartTotal > 0) {
      this.spinner.show().then(p => {
        this.cartService.CheckoutFromCart(this.userId, this.time);
      });

    } else {
      return;
    }


  }
}
