let buttonsOpenModals = document.querySelectorAll('[data-modal-open]'),
    buttonsCloseModals = document.querySelectorAll('[data-modal-close]'),
    formFeedback = document.querySelector(`[data-modal=feedback]`),
    formFeedbackName = formFeedback.querySelector(`[name=fullname]`),
    formFeedbackEmail = formFeedback.querySelector(`[name=email]`),
    formFeedbackEMessage = formFeedback.querySelector(`[name=message]`);

buttonsOpenModals.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.preventDefault();
    let el = evt.target.tagName == "A" ? evt.target : evt.target.parentNode;
    let nameForm = el.getAttribute('data-modal-open'),
        modalWindow = document.querySelector(`[data-modal=${nameForm}]`);
    modalWindow.classList.add('modal-show');
  });
});

function removeClass(elm, cls) {
  if (elm.classList.contains(cls)) {
    elm.classList.remove(cls)
  }
}

buttonsCloseModals.forEach((item) => {
  item.addEventListener("click",  (evt) => {
    evt.preventDefault();
    let el = evt.target;
    let nameForm = el.getAttribute('data-modal-close'),
        modalWindow = document.querySelector(`[data-modal=${nameForm}]`);
    modalWindow.classList.remove('modal-show');
    removeClass(modalWindow, 'modal-error');
  });
});

formFeedback.addEventListener('submit', (evt) => {
  if (!formFeedbackName.value || !formFeedbackEmail.value || !formFeedbackEMessage.value) {
    evt.preventDefault();
    formFeedback.classList.remove('modal-error');
    formFeedback.classList.add('modal-error');
  }
})

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    removeClass(document.querySelector('.modal-show'), 'modal-show')
  }
});
