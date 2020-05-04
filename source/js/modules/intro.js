import AccentTypographyBuild from '../classes/AccentTypographyBuild';

export default () => {
  const introTitle = new AccentTypographyBuild(`.intro__title`, 700, `active`, `transform`);
  const introDate = new AccentTypographyBuild(`.intro__date`, 700, `active`, `transform`);
  const introMessage = document.querySelector(`.intro__message`);
  const introLabel = document.querySelector(`.intro__label`);

  introMessage.addEventListener(`transitionend`, () => {
    introLabel.classList.add(`animated`);
    introDate.runAnimation();
  });

  setTimeout(() => {
    introTitle.runAnimation();
  }, 500);
};
