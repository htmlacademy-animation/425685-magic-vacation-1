export default class AccentTypographyBuild {
  constructor(
      elementSelector,
      offsetDelta,
      classForActivate
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._classForActivate = classForActivate;
    this._element = document.querySelector(this._elementSelector);
    this._offsetDelta = offsetDelta;
    this._timeOffset = 0;
    this._letterIndex = 0;

    this.prePareText();
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.transitionDelay = `${this._timeOffset}ms`;
    this._timeOffset += this.calculateDelay(this._letterIndex);
    this._letterIndex += 1;
    return span;
  }

  calculateDelay(currentIndex) {
    switch (true) {
      case (currentIndex % 6 === 1):
      case (currentIndex % 6 === 4):
        return -1 * this._offsetDelta;
      default:
        return this._offsetDelta * 2;
    }
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(`accent-typography`);
    const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = [...word].reduce((fragment, latter) => {
        fragment.appendChild(this.createElement(latter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`accent-typography__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
