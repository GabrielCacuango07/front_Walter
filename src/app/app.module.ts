import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "@app/app-routing.module";
import { AppComponent } from "@app/app.component";
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from "@angular/platform-browser/animations";
import { HeaderComponent } from "@app/components/header/header.component";
import { FooterComponent } from "@app/components/footer/footer.component";
import { CartComponent } from "@app/components/cart/cart.component";
import { CheckoutComponent } from "@app/components/checkout/checkout.component";
import { HomeComponent } from "@app/components/home/home.component";
import { ProductComponent } from "@app/components/product/product.component";
import { ThankyouComponent } from "@app/components/thankyou/thankyou.component";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from "ngx-toastr";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "@app/components/login/login.component";
import {
  AuthServiceConfig,
  GoogleLoginProvider,
  SocialLoginModule,
} from "angularx-social-login";
import { RegisterComponent } from "@app/components/register/register.component";
import { HomeLayoutComponent } from "@app/components/home-layout/home-layout.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { HttpClient } from "@angular/common/http";
import { ProfileComponent } from "./components/profile/profile.component";

import { KeyboardShortcutsModule } from "ng-keyboard-shortcuts";


const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "799705726167-vn6184fsovmps0kpbg5c7jabv15r3ias.apps.googleusercontent.com"
    ),
  },
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    ThankyouComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    HomeLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [HttpClient],
      },
    }),
    KeyboardShortcutsModule.forRoot(),
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
