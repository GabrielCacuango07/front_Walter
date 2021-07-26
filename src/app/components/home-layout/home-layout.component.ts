import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { KeyboardShortcutsHelpComponent, ShortcutEventOutput, ShortcutInput } from 'ng-keyboard-shortcuts';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit, AfterViewInit {
  @ViewChild(KeyboardShortcutsHelpComponent) private keyboard: KeyboardShortcutsHelpComponent;

  shortcuts: ShortcutInput[] = [];
  isBotOpen = false;

  constructor(private router: Router) { }


  ngAfterViewInit(): void {
    this.shortcuts.push(
      {
        key: "ctrl + c",
        label: 'Atajos de teclado',
        description: 'Ir al carrito de compras',
        preventDefault: true,
        command: () => this.goToCart(),
      },
      {
        key: "ctrl + h",
        label: 'Atajos de teclado',
        description: 'Ir a la pagina de inicio',
        preventDefault: true,
        command: () => this.goToHome(),
      },
      {
        key: "ctrl + b",
        label: 'Atajos de teclado',
        description: "Abrir/cerrar el chat bot.",
        preventDefault: true,
        command: () => this.openBot(),
      }
    );
  }

  ngOnInit(): void {
  }


  goToCart() {
    this.router.navigateByUrl('/cart')
  }

  goToHome() {
    this.router.navigateByUrl('/')
  }

  openBot() {
    const botBtn: HTMLButtonElement = document.querySelector('#sntch_button')
    const closeBtn: HTMLButtonElement = document.querySelector('#sntch_close')

    this.isBotOpen
      ? closeBtn.click()
      : botBtn.click()

    this.isBotOpen = !this.isBotOpen
  }

  showHelpModal() {
    this.keyboard.reveal();
  }
}
