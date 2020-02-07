var contactsButton = document.querySelector("#contacts-button");
var feedbackModal = document.querySelector(".modal-feedback");
var closeFeedbackModal = feedbackModal.querySelector(".button-close");
var feedbackName = feedbackModal.querySelector("[name=feedback-name]");
var feedbackForm = feedbackModal.querySelector(".feedback-form");
var feedbackEmail = feedbackModal.querySelector("[name=feedback-email]");
var feedbackMessage = feedbackModal.querySelector("[name=feedback-message");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("feedbackName");
  storageEmail = localStorage.getItem("feedbackEmail");
} catch (err) {
  isStorageSupport = false;
}

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackModal.classList.add("show");
  if (storageName || storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackMessage.focus();
  } else {
    feedbackName.focus();
  }
});

closeFeedbackModal.addEventListener("click", function () {
  feedbackModal.classList.remove("show");
  feedbackModal.classList.remove("error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
    evt.preventDefault();
    feedbackModal.classList.remove("error");
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add("error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedbackName", feedbackName.value);
      localStorage.setItem("feedbackEmail", feedbackEmail.value);
      localStorage.setItem("feedbackMessage", feedbackMessage.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (feedbackModal.classList.contains("show")) {
      feedbackModal.classList.remove("show");
      feedbackModal.classList.remove("error");
    }
  }
});


var mapButton = document.querySelector(".contacts-map");
var mapModal = document.querySelector(".modal-map");
var closeMapModal = mapModal.querySelector(".modal-map .button-close");

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.add("show");
});

closeMapModal.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapModal.classList.remove("show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (mapModal.classList.contains("show")) {
      mapModal.classList.remove("show");
    }
  }
});
