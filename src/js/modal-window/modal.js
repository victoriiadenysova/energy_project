export class Modal {
  constructor() {
    // Не шукаємо тут, щоб уникнути null при ініціалізації
    this.overlay = null;
    this.modal = null;
    this.closeButton = null;

    this.closeButtonHandler = () => this.close();
    this.escapeKeyHandler = (event) => this.closeEsc(event);
    this.overlayClickHandler = (event) => this.closeBack(event);
  }

  // Допоміжний метод для ледачої ініціалізації
  initElements() {
    this.overlay = document.querySelector('.overlay');
    this.modal = document.querySelector('.modal-info') || document.querySelector('.modal-get-raiting');
  }

  open(content) {
    this.initElements();

    // Перевірка (Guard Clause) - якщо елемента немає, не "ламаємо" весь скрипт
    if (!this.overlay || !this.modal) {
      console.error("Елементи модального вікна не знайдені в DOM!");
      return;
    }

    this.overlay.innerHTML = content;
    this.overlay.style.zIndex = '3';
    this.overlay.style.display = 'flex';
    this.modal.classList.remove("visually-hidden");

    this.closeButton = document.querySelector('.modal-button-close');

    document.body.classList.add('no-scroll');
    this.closeButton?.addEventListener('click', this.closeButtonHandler);
    document.addEventListener('keydown', this.escapeKeyHandler);
    this.overlay.addEventListener('click', this.overlayClickHandler);
  }

  close() {
    this.initElements();
    if (!this.overlay || !this.modal) return;

    this.overlay.style.display = 'none';
    this.overlay.style.zIndex = '-1';
    this.modal.classList.add("visually-hidden");

    document.body.classList.remove('no-scroll');
    this.closeButton?.removeEventListener('click', this.closeButtonHandler);
    document.removeEventListener('keydown', this.escapeKeyHandler);
    this.overlay.removeEventListener('click', this.overlayClickHandler);
  }
  closeEsc(event) {
    if (event.key === 'Escape') {
        this.close();
    }
  }

  closeBack(event) {
    if (event.target === this.overlay) {
        this.close()
    }
  }
}


export const myModal = new Modal();