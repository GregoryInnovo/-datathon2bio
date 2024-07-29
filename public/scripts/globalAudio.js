let audio1 = null;
let audio2 = null;
const speechSynthesis = window.speechSynthesis;

function setupAudioControls(
  buttonId,
  audioPath,
  volumeControlId,
  loopCheckboxId,
  otherButtonId
) {
  const playButton = document.getElementById(buttonId);
  const otherButton = document.getElementById(otherButtonId);
  const volumeControl = document.getElementById(volumeControlId);
  const loopCheckbox = document.getElementById(loopCheckboxId);

  // Cargar estado desde localStorage
  const state = JSON.parse(localStorage.getItem(buttonId)) || {};
  volumeControl.value = state.volume || 1;
  loopCheckbox.checked = state.loop || false;

  // Crear o recuperar el audio
  let audio = buttonId === "playSound1" ? audio1 : audio2;
  if (!audio) {
    audio = new Audio(audioPath);
    if (buttonId === "playSound1") audio1 = audio;
    else audio2 = audio;
  }

  // Aplicar configuración guardada
  audio.volume = parseFloat(volumeControl.value);
  audio.loop = loopCheckbox.checked;

  function updateButtonText(button, isPlaying) {
    const iconSpan = button.querySelector(".icon");
    const textSpan = button.querySelector(".text");
    if (isPlaying) {
      iconSpan.textContent = "⏸️";
      textSpan.textContent = "Pausar";
    } else {
      iconSpan.textContent = "▶️";
      textSpan.textContent =
        button === playButton ? "Sonido Jungla" : "Sonido Oceano";
    }
  }

  // Actualizar el texto del botón basado en el estado actual
  updateButtonText(playButton, !audio.paused);

  playButton.addEventListener("click", () => {
    if (!audio.paused) {
      audio.pause();
      updateButtonText(playButton, false);
    } else {
      if (audio1 && audio1 !== audio) {
        audio1.pause();
        updateButtonText(otherButton, false);
      }
      if (audio2 && audio2 !== audio) {
        audio2.pause();
        updateButtonText(otherButton, false);
      }
      audio.play();
      updateButtonText(playButton, true);
    }

    // Guardar estado en localStorage
    localStorage.setItem(
      buttonId,
      JSON.stringify({
        volume: volumeControl.value,
        loop: loopCheckbox.checked,
        isPlaying: !audio.paused,
      })
    );
  });

  volumeControl.addEventListener("input", () => {
    audio.volume = parseFloat(volumeControl.value);
    // Guardar estado en localStorage
    localStorage.setItem(
      buttonId,
      JSON.stringify({
        volume: volumeControl.value,
        loop: loopCheckbox.checked,
        isPlaying: !audio.paused,
      })
    );
  });

  loopCheckbox.addEventListener("change", () => {
    audio.loop = loopCheckbox.checked;
    // Guardar estado en localStorage
    localStorage.setItem(
      buttonId,
      JSON.stringify({
        volume: volumeControl.value,
        loop: loopCheckbox.checked,
        isPlaying: !audio.paused,
      })
    );
  });
}

function initializeAudio() {
  setupAudioControls(
    "playSound1",
    "/sounds/jungle.mp3",
    "volumeControl1",
    "loopAudio1",
    "playSound2"
  );
  setupAudioControls(
    "playSound2",
    "/sounds/ocean-wave.mp3",
    "volumeControl2",
    "loopAudio2",
    "playSound1"
  );

  document.getElementById("playText")?.addEventListener("click", () => {
    if (speechSynthesis.speaking) speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      "Para abordar este reto, comenzamos por buscar fuentes de información confiables a nivel nacional, asegurándonos de que fueran respaldadas por la comunidad académica. Inicialmente, recurrimos a Datos Abiertos. Sin embargo, su cobertura sobre biodiversidad era limitada, por lo que, exploramos el recurso proporcionado durante la datathon; SiB Colombia, con la limitación de que estaba restringido a seis localidades (en el momento que se propuso el reto): 4 municipios, un resguardo indígena y una reserva forestal en cuanto a cifras, este nos ofreció una base sólida. No obstante, descubrimos que la página del SiB se alimentaba de una fuente mayor y más global: GBIF (Global Biodiversity Information Facility), una base de datos mundial avalada por la comunidad científica."
    );
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);
  });

  document.getElementById("muteAll")?.addEventListener("click", () => {
    if (audio1) {
      audio1.pause();
      audio1.currentTime = 0;
    }
    if (audio2) {
      audio2.pause();
      audio2.currentTime = 0;
    }
    speechSynthesis.cancel();
    updateButtonText(document.getElementById("playSound1"), false);
    updateButtonText(document.getElementById("playSound2"), false);
    // Actualizar localStorage
    localStorage.setItem("playSound1", JSON.stringify({ isPlaying: false }));
    localStorage.setItem("playSound2", JSON.stringify({ isPlaying: false }));
  });
}

// Ejecutar la inicialización cuando el DOM esté listo
document.addEventListener("astro:page-load", initializeAudio);

// Función auxiliar para actualizar el texto del botón
function updateButtonText(button, isPlaying) {
  if (!button) return;
  const iconSpan = button.querySelector(".icon");
  const textSpan = button.querySelector(".text");
  if (isPlaying) {
    iconSpan.textContent = "⏸️";
    textSpan.textContent = "Pausar";
  } else {
    iconSpan.textContent = "▶️";
    textSpan.textContent =
      button.id === "playSound1" ? "Sonido Jungla" : "Sonido Oceano";
  }
}
