document.addEventListener("astro:page-load", () => {
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

    // Load state from localStorage
    const state = JSON.parse(localStorage.getItem(buttonId)) || {};
    volumeControl.value = state.volume || 1;
    loopCheckbox.checked = state.loop || false;

    let audio = null;

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

    playButton.addEventListener("click", () => {
      if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
        updateButtonText(playButton, false);
      } else {
        if (audio1 && audio1 !== audio) {
          audio1.pause();
          audio1.currentTime = 0;
          updateButtonText(otherButton, false);
        }
        if (audio2 && audio2 !== audio) {
          audio2.pause();
          audio2.currentTime = 0;
          updateButtonText(otherButton, false);
        }
        audio = new Audio(audioPath);
        audio.volume = parseFloat(volumeControl.value);
        audio.loop = loopCheckbox.checked;
        audio.play();
        updateButtonText(playButton, true);
        if (buttonId === "playSound1") audio1 = audio;
        else audio2 = audio;
      }

      // Save state to localStorage
      localStorage.setItem(
        buttonId,
        JSON.stringify({
          volume: volumeControl.value,
          loop: loopCheckbox.checked,
        })
      );
    });

    volumeControl.addEventListener("input", () => {
      if (audio) {
        audio.volume = parseFloat(volumeControl.value);
      }
      // Save state to localStorage
      localStorage.setItem(
        buttonId,
        JSON.stringify({
          volume: volumeControl.value,
          loop: loopCheckbox.checked,
        })
      );
    });

    loopCheckbox.addEventListener("change", () => {
      if (audio) {
        audio.loop = loopCheckbox.checked;
      }
      // Save state to localStorage
      localStorage.setItem(
        buttonId,
        JSON.stringify({
          volume: volumeControl.value,
          loop: loopCheckbox.checked,
        })
      );
    });
  }

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
      audio1 = null;
    }
    if (audio2) {
      audio2.pause();
      audio2.currentTime = 0;
      audio2 = null;
    }
    speechSynthesis.cancel();
    updateButtonText(document.getElementById("playSound1"), false);
    updateButtonText(document.getElementById("playSound2"), false);
  });

  function updateButtonText(button, isPlaying) {
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
});
