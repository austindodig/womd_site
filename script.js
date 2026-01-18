const buttons = document.querySelectorAll(".nav-btn");
const panels = document.querySelectorAll(".panel");

const setActivePanel = (target) => {
  panels.forEach((panel) => {
    panel.classList.toggle("active", panel.id === `panel-${target}`);
  });

  buttons.forEach((button) => {
    button.classList.toggle("active", button.dataset.target === target);
    button.setAttribute(
      "aria-selected",
      button.dataset.target === target ? "true" : "false"
    );
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", () => setActivePanel(button.dataset.target));
});
