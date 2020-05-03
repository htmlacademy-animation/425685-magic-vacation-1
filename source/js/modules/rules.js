export default () => {
  const lastRuleElement = document.querySelector(`.rules__item:last-child`);

  lastRuleElement.addEventListener(`animationend`, () => {
    document.querySelector(`.rules__link`).classList.add(`rules__link--animated`);
  });
};
