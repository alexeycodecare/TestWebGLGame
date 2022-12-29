function onInit(unityInstance) {
  const fullscreenButton = document.querySelector("#unity-fullscreen-button");
  const menuButton = document.querySelector("#menu-button");

  fullscreenButton.addEventListener('click', () => {
    unityInstance.SetFullscreen(1);
  });

  menuButton.addEventListener('click', () => {
    unityInstance.SendMessage('GameManager', 'GoToMainMenu');
  })
};
