import {Component, OnInit, Output} from '@angular/core';
import {CartModelServer} from '../../models/cart.model';
import {CartService} from '../../services/cart.service';
import {UserService} from '../../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { EventEmitter } from '@angular/core';

declare var gtag;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() help: EventEmitter<any> = new EventEmitter();

  cartData: CartModelServer;
  cartTotal: number;
  public activeLang = 'es';
  authState: boolean;
  contadorAyuda: number=0;


  constructor(public cartService: CartService,
    private translate: TranslateService,
              public userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);

    this.cartService.cartData$.subscribe(data => this.cartData = data);

    this.userService.authState$.subscribe(authState => this.authState = authState);
  }


  public cambiarLenguaje(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

  public showHelp() {
    this.help.emit('');
    this.contadorAyuda +=1;
    console.log('ayuda aplastado',this.contadorAyuda);
    gtag("event", "help_functions", {
      eventCategory: 'help',
      eventLabel: "User help button"
    });
  }


}
