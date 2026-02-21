import "./create-session.css";
import { debounce } from "./utils/debounce";
import { startSession } from "./session-view";
import STORAGE_KEYS from "./common/storage-keys";
import { saveToStorage } from "./utils/storage";

// ===== PUBLIC API =====
export const setupSessionCreation = (sessionForm) => {
  document.querySelector("#focus-flow #create-session-form").classList.remove("hidden");
  sessionForm.addEventListener("input", debounce(onFormInput, 300));
  sessionForm.addEventListener("submit", createNewSession);
};

// if history found then display
function showHistory() {
  const historyString = localStorage.getItem("sessionHistory");
  
  if (!historyString) {
    return;
  }
  const history = JSON.parse(historyString);
  if (history.length === 0) {
    return;
  }

  const historyTag = document.getElementById("history");

  historyTag.innerHTML = "Session History:";

  history.forEach(session => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p><strong>Title:</strong> ${session.name}</p>
      <p><strong>Study Time:</strong> ${session.studyTime}</p>
    `;

    historyTag.appendChild(div);
  });
}
showHistory();

// ===== FORM SUBMISSION HANDLER =====
function createNewSession(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const name = formData.get("session-name");
  const duration = formData.get("duration");
  const breakDuration = formData.get("break-duration");
  const cycles = formData.get("cycles");
  
  console.log({ name, duration, breakDuration, cycles });
  
  const sessionId = crypto.randomUUID();
  const newSession = { sessionId, name, duration, breakDuration, cycles };
  
  document.querySelector("#focus-flow #create-session-form").classList.add("hidden");
  
  saveToStorage(newSession, STORAGE_KEYS.CURRENT_SESSION);
  startSession(newSession);
}

// ===== INPUT VALIDATION HANDLER =====
const onFormInput = (event) => {
  const target = event.target;
  
  if (target.name === "session-name") {
    validateForMinLength(target, 1); //3
  }
  if (target.name === "duration") {
    validateForMinValue(target, 1); //5
  }
  if (target.name === "break-duration") {
    validateForMinValue(target, 1);
  }
  if (target.name === "cycles") {
    validateForMinValue(target, 1);
  }
  
  document.querySelector("#start-session").disabled = !areAllFieldsValid();
};

// ===== VALIDATION FUNCTIONS =====
function validateForMinLength(field, value) {
  if (field.value?.length < value) {
    showValidationForField(field);
    return false;
  } else {
    hideValidationMessageForField(field);
  }
  return true;
}

function validateForMinValue(field, minValue) {
  if (field.valueAsNumber < minValue) {
    showValidationForField(field);
    return false;
  } else {
    hideValidationMessageForField(field);
  }
  return true;
}

function areAllFieldsValid() {
  const allMessages = document.querySelectorAll("#create-session-form .validation-msg");
  
  return Array.from(allMessages).every(message => message.style.display === "none");
}

// ===== UI HELPER FUNCTIONS =====
function showValidationForField(element) {
  const validationElement = element.closest(".fields").querySelector(".validation-msg");
  validationElement.style.display = "block";
}

function hideValidationMessageForField(element) {
  const validationElement = element.closest(".fields").querySelector(".validation-msg");
  validationElement.style.display = "none";
}