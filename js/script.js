const LESSONS = {
  numbers: {
    title: "Сандарды тану", icon: "🔢", teach: "Сандар заттардың санын және ретін көрсетеді. Әр санның өз пішіні мен атауы бар.", example: "1, 2, 3 — бірге санаймыз!",
    questions: [
      { prompt: "Қайсысы 1 саны?", visual: "🍎", label: "Бір алма", choices: ["1", "2", "3"], answer: "1", hint: "Бір ғана алманы көріп тұрсың. Бір затты 1 деп белгілейміз.", explain: "Дұрыс! Бір алма — 1." },
      { prompt: "Неше жұлдыз бар?", visual: "⭐ ⭐", label: "Екі жұлдыз", choices: ["1", "2", "3"], answer: "2", hint: "Жұлдыздарды саусағыңмен бір-бірлеп сана.", explain: "Жарайсың! Екі жұлдыз бар." },
      { prompt: "Қатарда қай сан жетіспейді? 1, 2, __, 4", visual: "1  →  2  →  ?  →  4", label: "Өсу ретімен тұрған сандар", choices: ["2", "3", "5"], answer: "3", hint: "2-ден кейін, 4-тен бұрын келетін санды ойла.", explain: "Дұрыс таптың! 2-ден кейін 3 келеді." },
      { prompt: "Неше доп бар?", visual: "⚽ ⚽ ⚽ ⚽", label: "Төрт доп", choices: ["3", "4", "5"], answer: "4", hint: "Әр допты бір реттен санап шық.", explain: "Тамаша! Төрт доп — 4." },
      { prompt: "6 санынан кейін қай сан келеді?", visual: "4  →  5  →  6  →  ?", label: "Сандар тізбегі", choices: ["5", "7", "8"], answer: "7", hint: "Санап көр: бес, алты, ...", explain: "Керемет! 6-дан кейін 7 келеді." }
    ]
  },
  addition: {
    title: "Қосу", icon: "➕", teach: "Қосу дегеніміз — топтарды біріктіру. Заттарды санап, барлығын табамыз.", example: "3 алма + 2 алма = 5 алма",
    questions: [
      { prompt: "1 + 1 = ?", visual: "🍎 + 🍎", label: "Бір алма және бір алма", choices: ["1", "2", "3"], answer: "2", hint: "Бір алманы, сосын екіншісін сана.", explain: "Дұрыс! 1 + 1 = 2." },
      { prompt: "2 + 1 = ?", visual: "🍎 🍎  +  🍎", label: "Екі алмаға тағы бір алма", choices: ["2", "3", "4"], answer: "3", hint: "Екі алмадан баста да, тағы біреуін қосып сана.", explain: "Жарайсың! 2 + 1 = 3." },
      { prompt: "3 + 2 = ?", visual: "🍎 🍎 🍎  +  🍎 🍎", label: "Үш алма және екі алма", choices: ["4", "5", "6"], answer: "5", hint: "Алдымен үш алманы, содан соң тағы екі алманы сана.", explain: "Дұрыс! 3 алмаға 2 алма қоссақ, 5 алма болады." },
      { prompt: "4 + 3 = ?", visual: "🟡 🟡 🟡 🟡  +  🟡 🟡 🟡", label: "Төрт сары дөңгелекке үшеуін қосу", choices: ["6", "7", "8"], answer: "7", hint: "4-тен бастап үш қадам алға сана.", explain: "Тамаша! 4 + 3 = 7." },
      { prompt: "6 + 5 = ?", visual: "🧸 🧸 🧸 🧸 🧸 🧸  +  🧸 🧸 🧸 🧸 🧸", label: "Алты ойыншық және бес ойыншық", choices: ["10", "11", "12"], answer: "11", hint: "6-ға 5 қадам қос: 7, 8, 9, 10, 11.", explain: "Өте жақсы! 6 + 5 = 11." }
    ]
  },
  subtraction: {
    title: "Азайту", icon: "➖", teach: "Азайту — топтан бірнеше затты алу. Қалған заттарды санап табамыз.", example: "5 алма − 2 алма = 3 алма",
    questions: [
      { prompt: "2 − 1 = ?", visual: "🍐 🍐  −  🍐", label: "Екі алмұрттан біреуін алу", choices: ["0", "1", "2"], answer: "1", hint: "Екі алмұрттың біреуін алып таста. Қаншасы қалды?", explain: "Дұрыс! 2 − 1 = 1." },
      { prompt: "3 − 1 = ?", visual: "🎈 🎈 🎈  −  🎈", label: "Үш шардан бір шарды алу", choices: ["1", "2", "3"], answer: "2", hint: "Үш шардың біреуі ұшып кетті. Қалғанын сана.", explain: "Жарайсың! 3 − 1 = 2." },
      { prompt: "5 − 2 = ?", visual: "🍎 🍎 🍎 🍎 🍎  −  🍎 🍎", label: "Бес алмадан екеуін алу", choices: ["2", "3", "4"], answer: "3", hint: "Бес алмадан екеуін алып таста да, қалғанын сана.", explain: "Дұрыс! 5 − 2 = 3." },
      { prompt: "8 − 3 = ?", visual: "🐟 🐟 🐟 🐟 🐟 🐟 🐟 🐟", label: "Сегіз балықтың үшеуі жүзіп кетті", choices: ["4", "5", "6"], answer: "5", hint: "8-ден үш қадам кері сана.", explain: "Тамаша! 8 − 3 = 5." },
      { prompt: "12 − 5 = ?", visual: "🌼 × 12  −  🌼 × 5", label: "Он екі гүлден бесеуін алу", choices: ["6", "7", "8"], answer: "7", hint: "Он екіден бес қадам кері сана: 11, 10, 9, 8, 7.", explain: "Өте жақсы! 12 − 5 = 7." }
    ]
  },
  multiplication: {
    title: "Көбейту", icon: "✖️", teach: "Көбейту — бірдей топтарды жылдам қосу. Мысалы, 3 топта 2 заттан болса, 2 + 2 + 2 деп санаймыз.", example: "2 + 2 + 2 = 3 × 2 = 6",
    questions: [
      { prompt: "2 + 2 дегеніміз 2-ден неше топ?", visual: "🍪 🍪  |  🍪 🍪", label: "Екі печеньеден тұратын екі топ", choices: ["1 топ", "2 топ", "3 топ"], answer: "2 топ", hint: "Тік сызықпен бөлінген топтарды сана.", explain: "Дұрыс! Мұнда 2 печеньеден 2 топ бар." },
      { prompt: "2 × 2 = ?", visual: "🍓 🍓  |  🍓 🍓", label: "Екі құлпынайдан екі топ", choices: ["3", "4", "5"], answer: "4", hint: "Екі топтың әрқайсысында 2 құлпынай бар. Барлығын сана.", explain: "Жарайсың! 2 × 2 = 4." },
      { prompt: "3 × 2 = ?", visual: "🐥🐥  |  🐥🐥  |  🐥🐥", label: "Екі балапаннан үш топ", choices: ["5", "6", "7"], answer: "6", hint: "2 + 2 + 2 деп қосып көр.", explain: "Дұрыс! 3 топта 2-ден болса, 6 болады." },
      { prompt: "4 × 3 = ?", visual: "🔵🔵🔵  |  🔵🔵🔵  |  🔵🔵🔵  |  🔵🔵🔵", label: "Үш дөңгелектен төрт топ", choices: ["9", "12", "15"], answer: "12", hint: "3 санын төрт рет қос: 3, 6, 9, 12.", explain: "Тамаша! 4 × 3 = 12." },
      { prompt: "5 × 4 = ?", visual: "⭐ ⭐ ⭐ ⭐  ·  5 топ", label: "Әрқайсысында төрт жұлдыздан бес топ", choices: ["20", "25", "15"], answer: "20", hint: "4-ті бес рет қос немесе 5-тен төрт топ деп сана.", explain: "Керемет! 5 × 4 = 20." }
    ]
  },
  division: {
    title: "Бөлу", icon: "➗", teach: "Бөлу — заттарды бірнеше топқа тең етіп тарату. Әр топта қанша зат қалғанын санаймыз.", example: "6 алма ÷ 2 тәрелке = әр тәрелкеде 3 алма",
    questions: [
      { prompt: "2 кәмпитті 2 балаға тең бөлсек, әр бала нешеу алады?", visual: "🍬 🍬  →  🧒  🧒", label: "Екі кәмпитті екі балаға бөлу", choices: ["0", "1", "2"], answer: "1", hint: "Әр балаға бір кәмпиттен беріп көр.", explain: "Дұрыс! Әр бала бір кәмпиттен алды." },
      { prompt: "4 ÷ 2 = ?", visual: "🍪🍪  →  🧺   🧺  ←  🍪🍪", label: "Төрт печеньені екі себетке тең бөлу", choices: ["1", "2", "3"], answer: "2", hint: "Төрт печеньені екі себетке бір-бірден таратып көр.", explain: "Жарайсың! Әр себетте 2 печенье бар." },
      { prompt: "6 ÷ 2 = ?", visual: "🍎 🍎 🍎 🍎 🍎 🍎  →  🧺 🧺", label: "Алты алманы екі себетке бөлу", choices: ["2", "3", "4"], answer: "3", hint: "Алты алманы екі себетке кезекпен бөліп тарат.", explain: "Дұрыс! Әр себетке 3 алмадан тиеді." },
      { prompt: "12 ÷ 3 = ?", visual: "🟣 × 12  →  👧 👦 👧", label: "Он екі моншақты үш балаға тең бөлу", choices: ["3", "4", "5"], answer: "4", hint: "12 моншақты үш балаға тең бөліп көр: әрқайсысына төрттен.", explain: "Тамаша! 12 ÷ 3 = 4." },
      { prompt: "20 ÷ 4 = ?", visual: "⭐ × 20  →  🧒 🧒 🧒 🧒", label: "Жиырма жұлдызды төрт балаға бөлу", choices: ["4", "5", "6"], answer: "5", hint: "20-ны төрт тең топқа бөл. 4 × ? = 20 деп те ойлауға болады.", explain: "Өте жақсы! 20 ÷ 4 = 5." }
    ]
  }
};

const MATH_GAMES = {
  count: { title: "Сандарды сана", icon: "🍎" },
  answer: { title: "Дұрыс жауапты таңда", icon: "🧠" },
  match: { title: "Суреттерді сәйкестендір", icon: "🔵" },
  puzzle: { title: "Математикалық пазл", icon: "🧩" }
};

const TEACHER_TOPICS = [
  { id: "numbers", label: "Сандарды тану" },
  { id: "addition", label: "Қосу" },
  { id: "subtraction", label: "Азайту" },
  { id: "multiplication", label: "Көбейту" },
  { id: "division", label: "Бөлу" }
];

document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");
  const navigationLinks = [...document.querySelectorAll(".nav-link")];
  const storageKey = "dysmathKzStudentProfile";
  const accessibilityStorageKey = "dysmathKzAccessibilitySettings";
  const teacherDemoStorageKey = "dysmathKzTeacherDemoStudents";
  const profileDialog = document.querySelector("#profile-dialog");
  const lessonDialog = document.querySelector("#lesson-dialog");
  const lessonContent = document.querySelector("#lesson-content");
  const gameDialog = document.querySelector("#game-dialog");
  const gameContent = document.querySelector("#game-content");
  const reduceMotionToggle = document.querySelector("#access-motion-toggle");
  const accessSoundToggle = document.querySelector("#access-sound-toggle");
  const largeButtonsToggle = document.querySelector("#access-large-buttons");
  const accessibilitySaveNote = document.querySelector("#accessibility-save-note");
  const teacherSourceNote = document.querySelector("#teacher-source-note");
  const teacherKpis = document.querySelector("#teacher-kpis");
  const teacherStudentList = document.querySelector("#teacher-student-list");
  const teacherStudentCount = document.querySelector("#teacher-student-count");
  const teacherDetail = document.querySelector("#teacher-student-detail");
  const speechEnabledToggle = document.querySelector("#speech-enabled");
  const speechRateInput = document.querySelector("#speech-rate");
  const speechRateValue = document.querySelector("#speech-rate-value");
  const speechVoiceNote = document.querySelector("#speech-voice-note");
  const speechStatus = document.querySelector("#speech-status");
  const speechSynthesis = window.speechSynthesis;
  const speechSupported = Boolean(speechSynthesis && window.SpeechSynthesisUtterance);
  let availableVoices = [];
  let selectedVoice = null;
  let kazakhVoiceAvailable = false;
  const profileForm = document.querySelector("#profile-form");
  const nameField = document.querySelector("#student-name");
  const editProfileButton = document.querySelector("#edit-profile");
  const cancelProfileButton = document.querySelector("#cancel-profile");
  const closeProfileButton = document.querySelector("#close-profile");
  let profile = readProfile();
  let accessibilitySettings = readAccessibilitySettings();
  let isFirstVisit = !profile;
  let activeTeacherSource = "real";
  let activeTeacherStudentId = "";
  let teacherDemoStorageAvailable = true;

  function readProfile() {
    try {
      const saved = localStorage.getItem(storageKey);
      if (!saved) return null;
      const data = JSON.parse(saved);
      if (!data || typeof data.name !== "string" || !data.name.trim()) return null;
      const avatars = ["😊", "🐼", "🦊", "🐸", "🦄", "🐱"];
      const levels = ["Бастапқы", "Орташа", "Жоғары"];
      return {
        name: data.name.trim().slice(0, 24),
        avatar: avatars.includes(data.avatar) ? data.avatar : "😊",
        level: levels.includes(data.level) ? data.level : "Бастапқы",
        completedTasks: Math.max(0, Number(data.completedTasks) || 0),
        stars: Math.max(0, Number(data.stars) || 0),
        progress: Math.min(100, Math.max(0, Number(data.progress) || 0)),
        taskResults: data.taskResults && typeof data.taskResults === "object" ? data.taskResults : {},
        reducedMotion: Boolean(data.reducedMotion),
        speechEnabled: data.speechEnabled !== false,
        speechRate: Math.min(1.3, Math.max(0.7, Number(data.speechRate) || 1)),
        gameResults: data.gameResults && typeof data.gameResults === "object" ? data.gameResults : {}
      };
    } catch {
      return null;
    }
  }

  function saveProfile(nextProfile) {
    try {
      localStorage.setItem(storageKey, JSON.stringify(nextProfile));
      return true;
    } catch {
      return false;
    }
  }

  function readAccessibilitySettings() {
    const defaults = {
      fontSize: "medium",
      colorMode: "normal",
      soundEnabled: profile?.speechEnabled !== false,
      reduceMotion: Boolean(profile?.reducedMotion),
      largeButtons: false
    };
    try {
      const saved = localStorage.getItem(accessibilityStorageKey);
      if (!saved) return defaults;
      const data = JSON.parse(saved);
      return {
        fontSize: ["small", "medium", "large", "xlarge"].includes(data.fontSize) ? data.fontSize : defaults.fontSize,
        colorMode: ["normal", "contrast", "comfortable"].includes(data.colorMode) ? data.colorMode : defaults.colorMode,
        soundEnabled: typeof data.soundEnabled === "boolean" ? data.soundEnabled : defaults.soundEnabled,
        reduceMotion: typeof data.reduceMotion === "boolean" ? data.reduceMotion : defaults.reduceMotion,
        largeButtons: Boolean(data.largeButtons)
      };
    } catch {
      return defaults;
    }
  }

  function saveAccessibilitySettings() {
    let stored = false;
    try {
      localStorage.setItem(accessibilityStorageKey, JSON.stringify(accessibilitySettings));
      stored = true;
    } catch {
      stored = false;
    }
    if (profile) {
      profile.speechEnabled = accessibilitySettings.soundEnabled;
      profile.reducedMotion = accessibilitySettings.reduceMotion;
      saveProfile(profile);
    }
    accessibilitySaveNote.textContent = stored
      ? "Баптаулар осы браузерде сақталды."
      : "Баптауларды сақтау мүмкін болмады. Браузер баптауларын тексер.";
  }

  function applyAccessibilitySettings() {
    const root = document.documentElement;
    root.dataset.fontSize = accessibilitySettings.fontSize;
    root.dataset.colorMode = accessibilitySettings.colorMode;
    root.dataset.largeButtons = String(accessibilitySettings.largeButtons);
    if (speechEnabledToggle) speechEnabledToggle.checked = accessibilitySettings.soundEnabled;
    if (accessSoundToggle) accessSoundToggle.checked = accessibilitySettings.soundEnabled;
    if (reduceMotionToggle) reduceMotionToggle.checked = accessibilitySettings.reduceMotion;
    if (largeButtonsToggle) largeButtonsToggle.checked = accessibilitySettings.largeButtons;
    document.querySelector(`[name="access-font-size"][value="${accessibilitySettings.fontSize}"]`).checked = true;
    document.querySelector(`[name="access-color-mode"][value="${accessibilitySettings.colorMode}"]`).checked = true;
    applyMotionPreference();
    updateSpeechButtons();
  }

  function renderProfile() {
    if (!profile) return;
    document.querySelector("#student-greeting").textContent = `Сәлем, ${profile.name}!`;
    document.querySelector("#header-profile-name").textContent = profile.name;
    document.querySelector("#header-avatar").textContent = profile.avatar;
    document.querySelector("#current-level").textContent = profile.level;
    document.querySelector("#completed-tasks").textContent = profile.completedTasks;
    document.querySelector("#collected-stars").textContent = profile.stars;
    document.querySelector("#progress-percent").textContent = `${profile.progress}%`;
    document.querySelector("#progress-fill").style.width = `${profile.progress}%`;
    document.querySelector(".progress-track").setAttribute("aria-valuenow", profile.progress);
    document.querySelector("#progress-note").textContent = profile.progress
      ? `Керемет! ${profile.progress}% орындадың.`
      : "Алғашқы сабағыңды баста!";
    renderGameCards();
    renderTeacherDashboard();
  }

  function applyMotionPreference() {
    const isReduced = accessibilitySettings.reduceMotion;
    document.documentElement.classList.toggle("animations-off", isReduced);
  }

  function updateSpeechButtons() {
    const canSpeak = speechSupported && speechEnabledToggle.checked && Boolean(selectedVoice);
    document.querySelector("#speak-question").disabled = !canSpeak;
    document.querySelector("#speak-instruction").disabled = !canSpeak;
    document.querySelector("#stop-speech").disabled = !speechSupported;
    speechRateInput.disabled = !speechSupported;
  }

  function refreshSpeechVoices(voiceListLoaded = false) {
    if (!speechSupported) {
      speechVoiceNote.textContent = "Бұл браузер Web Speech API дыбыстауын қолдамайды.";
      speechVoiceNote.classList.add("is-warning");
      updateSpeechButtons();
      return;
    }
    try {
      availableVoices = speechSynthesis.getVoices();
    } catch {
      availableVoices = [];
    }
    const kazakhVoice = availableVoices.find((voice) => /^kk(?:[-_]|$)/i.test(voice.lang));
    kazakhVoiceAvailable = Boolean(kazakhVoice);
    selectedVoice = kazakhVoice
      || availableVoices.find((voice) => voice.default)
      || availableVoices.find((voice) => /^ru(?:[-_]|$)/i.test(voice.lang))
      || availableVoices[0]
      || null;
    if (!availableVoices.length) {
      speechVoiceNote.textContent = voiceListLoaded
        ? "Браузерде қолдануға болатын дауыс табылмады. Дыбыс баптауларын тексер."
        : "Браузер дауыстары жүктелуде. Дыбыс тізімін тексеріп жатырмыз.";
      speechVoiceNote.classList.toggle("is-warning", voiceListLoaded);
    } else if (kazakhVoiceAvailable) {
      speechVoiceNote.textContent = `Қазақша дауыс таңдалды: ${kazakhVoice.name}.`;
      speechVoiceNote.classList.remove("is-warning");
    } else if (selectedVoice) {
      speechVoiceNote.textContent = `Қазақша дауыс қолжетімді емес. Браузердегі ${selectedVoice.name} (${selectedVoice.lang || "тілі белгісіз"}) дауысы қолданылады; қазақша айтылым өзгеше болуы мүмкін.`;
      speechVoiceNote.classList.add("is-warning");
    }
    updateSpeechButtons();
  }

  function applySpeechPreferences() {
    const enabled = accessibilitySettings.soundEnabled;
    speechEnabledToggle.checked = enabled;
    speechRateInput.value = String(profile?.speechRate || 1);
    speechRateValue.value = `${Number(speechRateInput.value).toFixed(1)}×`;
    speechRateValue.textContent = speechRateValue.value;
    refreshSpeechVoices();
  }

  function getSpeechInstruction() {
    const question = currentLesson?.questions[currentQuestionIndex];
    if (!question || !currentLesson) return "";
    if (currentMode === "steps") {
      return `Қадам ${currentStepIndex + 1}. ${makeStepList(question)[currentStepIndex]}`;
    }
    if (currentMode === "visual" && currentTopicKey === "addition") {
      const match = question.prompt.match(/(\d+)\s*\+\s*(\d+)/);
      if (match) {
        return `Алдымен ${match[1]} затты сана. Одан кейін тағы ${match[2]} затты қос. Соңында барлығын бірге сана.`;
      }
    }
    return `${currentLesson.teach} Суреттерді санап, жауабыңды таңда. Көмек: ${question.hint}`;
  }

  const kazakhNumberWords = ["нөл", "бір", "екі", "үш", "төрт", "бес", "алты", "жеті", "сегіз", "тоғыз", "он", "он бір", "он екі", "он үш", "он төрт", "он бес", "он алты", "он жеті", "он сегіз", "он тоғыз", "жиырма"];
  function makeSpeechText(text) {
    return text
      .replace(/\s*\+\s*/g, " қосу ")
      .replace(/\s*[−-]\s*/g, " азайту ")
      .replace(/\s*×\s*/g, " көбейту ")
      .replace(/\s*÷\s*/g, " бөлу ")
      .replace(/=\s*\?/g, " неге тең?")
      .replace(/\?/g, "?")
      .replace(/\d+/g, (digits) => kazakhNumberWords[Number(digits)] || digits)
      .replace(/[_…]+/g, "бос орын");
  }

  function speak(text) {
    if (!speechSupported || !speechEnabledToggle.checked || !selectedVoice || !text) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(makeSpeechText(text));
    utterance.voice = selectedVoice;
    utterance.lang = selectedVoice.lang || "kk-KZ";
    utterance.rate = Number(speechRateInput.value);
    utterance.onstart = () => { speechStatus.textContent = "Оқып жатырмын…"; };
    utterance.onend = () => { speechStatus.textContent = "Оқу аяқталды."; };
    utterance.onerror = () => { speechStatus.textContent = "Дыбыстау іске аспады. Браузер дыбысын тексер."; };
    speechStatus.textContent = "Дыбыс дайындалып жатыр…";
    speechSynthesis.speak(utterance);
  }

  function openProfileEditor() {
    profileForm.reset();
    nameField.value = profile?.name || "";
    const avatarInput = profileForm.querySelector(`[name="avatar"][value="${CSS.escape(profile?.avatar || "😊")}"]`);
    const levelInput = profileForm.querySelector(`[name="level"][value="${CSS.escape(profile?.level || "Бастапқы")}"]`);
    if (avatarInput) avatarInput.checked = true;
    if (levelInput) levelInput.checked = true;
    const canCancel = Boolean(profile);
    cancelProfileButton.hidden = !canCancel;
    closeProfileButton.hidden = !canCancel;
    profileDialog.showModal();
    nameField.focus();
  }

  let currentLesson = null;
  let currentTopicKey = "";
  let currentQuestionIndex = 0;
  let currentMode = "interactive";
  let currentStepIndex = 0;
  let currentAnswerState = null;
  let selectedAnswer = null;

  function saveTaskResult(isCorrect) {
    if (!profile) return;
    profile.taskResults ||= {};
    const resultKey = `${currentTopicKey}:${currentQuestionIndex}`;
    if (isCorrect) profile.taskResults[resultKey] = true;
    else if (profile.taskResults[resultKey] !== true) profile.taskResults[resultKey] = false;
    const correctCount = Object.values(profile.taskResults).filter((value) => value === true).length;
    profile.completedTasks = correctCount;
    profile.stars = correctCount;
    profile.progress = Math.round((correctCount / 25) * 100);
    saveProfile(profile);
    renderProfile();
  }

  function makeStepList(question) {
    const match = question.prompt.match(/(\d+)\s*([+−×÷])\s*(\d+)/);
    if (!match) return [`Суретке мұқият қарап, заттарды немесе сандарды байқа.`, question.hint, question.explain];
    const first = Number(match[1]);
    const operation = match[2];
    const second = Number(match[3]);
    const result = Number(question.answer);
    if (!Number.isFinite(result)) return [question.hint, question.explain];
    if (operation === "+") {
      const countSequence = Array.from({ length: Math.min(result, 20) }, (_, index) => index + 1).join(", ");
      return [`Алдымен ${first} затты сана.`, `Оған тағы ${second} затты қос.`, `Бәрін бірге сана: ${countSequence}.`, `Жауабы: ${first} + ${second} = ${result}.`];
    }
    if (operation === "−") {
      const countBack = Array.from({ length: Math.min(second, 8) }, (_, index) => first - index - 1).join(", ");
      return [`Барлығы ${first} зат бар.`, `${second} затты алып таста.`, `Қалғанын сана: ${countBack}.`, `Жауабы: ${first} − ${second} = ${result}.`];
    }
    if (operation === "×") {
      const addends = Array.from({ length: Math.min(first, 10) }, () => second).join(" + ");
      return [`${first} бірдей топты елестет.`, `Әр топқа ${second} заттан қой.`, `Топтарды қос: ${addends} = ${result}.`, `Жауабы: ${first} × ${second} = ${result}.`];
    }
    const groups = Array.from({ length: Math.min(second, 10) }, (_, index) => `топ ${index + 1}`).join(", ");
    return [`Барлығы ${first} зат бар.`, `${second} тең топ дайында: ${groups}.`, `Әр топқа ${result} заттан келеді.`, `Жауабы: ${first} ÷ ${second} = ${result}.`];
  }

  function makeAdditionIllustration(question) {
    const match = question.prompt.match(/(\d+)\s*\+\s*(\d+)/);
    if (!match) return `<div class="task-visual" role="img" aria-label="${question.label}">${question.visual}</div>`;
    const first = Number(match[1]);
    const second = Number(match[2]);
    const total = Number(question.answer);
    const item = "🍎";
    const row = (count) => Array.from({ length: Math.min(count, 20) }, () => `<span class="countable-object">${item}</span>`).join("");
    return `<div class="addition-story" aria-label="Алдымен ${first} алма, оған тағы ${second} алма қосылады. Барлығы ${total} алма.">
      <div class="story-group"><span class="story-label">Алдымен ${first} зат</span><div class="object-row">${row(first)}</div></div>
      <span class="story-operator" aria-hidden="true">+</span>
      <div class="story-group"><span class="story-label">Тағы ${second} зат қос</span><div class="object-row">${row(second)}</div></div>
      <span class="story-operator story-equals" aria-hidden="true">=</span>
      <div class="story-group story-total"><span class="story-label">Бәрін бірге сана</span><div class="object-row">${row(total)}</div><b>${total} алма</b></div>
    </div>`;
  }

  function renderModeContent(question) {
    const prompt = `<h3 class="task-prompt">${question.prompt}</h3>`;
    if (currentMode === "visual") {
      const illustration = currentTopicKey === "addition"
        ? makeAdditionIllustration(question)
        : `<div class="task-visual visual-showcase" role="img" aria-label="${question.label}">${question.visual}</div>`;
      return `<div class="mode-panel soft-reveal">${prompt}<p class="mode-instruction">Суретке қарап, есептің қалай шығарылатынын көр.</p>${illustration}<div class="visual-takeaway">${question.explain}</div></div>`;
    }
    if (currentMode === "steps") {
      const steps = makeStepList(question);
      const step = steps[currentStepIndex];
      return `<div class="mode-panel soft-reveal">${prompt}<div class="step-card" tabindex="-1"><span class="step-number">${currentStepIndex + 1}</span><p>${step}</p></div><div class="step-controls"><button class="step-nav-button" type="button" data-lesson-action="prev-step" ${currentStepIndex === 0 ? "disabled" : ""}>← Алдыңғы</button><span>${currentStepIndex + 1} / ${steps.length}</span><button class="step-nav-button step-next" type="button" data-lesson-action="next-step" ${currentStepIndex === steps.length - 1 ? "disabled" : ""}>Келесі қадам →</button></div><p class="step-hint">Қадамдарды өз қарқыныңмен қарап шық.</p></div>`;
    }
    const choices = question.choices.map((choice) => {
      const chosenClass = choice === selectedAnswer && currentAnswerState !== null
        ? (currentAnswerState ? "answer-correct" : "answer-wrong") : "";
      return `<button class="answer-choice ${chosenClass}" type="button" data-answer="${choice}" ${currentAnswerState !== null ? "disabled" : ""}>${choice}</button>`;
    }).join("");
    let feedback = "";
    if (currentAnswerState === true) {
      feedback = `<div class="feedback-message feedback-good"><span>🌟</span><div><strong>${question.explain}</strong><small>Жұлдыз жинадың!</small></div></div><button class="lesson-next-button" type="button" data-lesson-action="next-question">Келесі тапсырма <span>→</span></button>`;
    } else if (currentAnswerState === false) {
      feedback = `<div class="feedback-message feedback-help"><span>💡</span><div><strong>Тағы бір рет ойланып көр!</strong><small>${question.hint}</small></div></div><button class="lesson-retry-button" type="button" data-lesson-action="retry">Қайта жауап беру</button>`;
    }
    return `<div class="mode-panel soft-reveal">${prompt}<p class="mode-instruction">Суреттерді санап, жауабыңды таңда.</p><div class="task-visual interactive-visual" role="img" aria-label="${question.label}">${question.visual}</div><div class="answer-options" role="group" aria-label="Жауап нұсқалары">${choices}</div><div class="lesson-feedback" id="lesson-feedback" aria-live="polite">${feedback}</div></div>`;
  }

  function renderLessonQuestion() {
    const question = currentLesson.questions[currentQuestionIndex];
    if (!question) {
      const score = currentLesson.questions.filter((_, index) => profile?.taskResults?.[`${currentTopicKey}:${index}`] === true).length;
      lessonContent.innerHTML = `
        <div class="lesson-finish soft-reveal">
          <span class="finish-mascot" aria-hidden="true">🎉</span>
          <p class="lesson-kicker">САБАҚ АЯҚТАЛДЫ</p>
          <h2 id="lesson-title" tabindex="-1">Керемет жұмыс, ${profile?.name || "досым"}!</h2>
          <p>${currentLesson.title} сабағын аяқтадың. ${score} жұлдыз жинадың!</p>
          <button class="lesson-next-button" type="button" data-lesson-action="finish">Кабинетке оралу <span>→</span></button>
        </div>`;
      return;
    }
    const progress = Math.round((currentQuestionIndex / currentLesson.questions.length) * 100);
    const modes = [["visual", "Көрнекі режим"], ["steps", "Қадамдық режим"], ["interactive", "Интерактивті режим"]];
    const modeButtons = modes.map(([mode, label]) => `<button class="lesson-mode-button ${currentMode === mode ? "is-selected" : ""}" type="button" data-mode="${mode}" aria-pressed="${currentMode === mode}">${label}</button>`).join("");
    lessonContent.innerHTML = `
      <div class="lesson-topline"><span class="lesson-icon-badge">${currentLesson.icon}</span><span class="lesson-kicker">${currentLesson.title}</span><span class="lesson-count">${currentQuestionIndex + 1} / ${currentLesson.questions.length}</span></div>
      <h2 class="lesson-title" id="lesson-title">${currentLesson.title}</h2>
      <p class="lesson-teaching">${currentLesson.teach}</p>
      <div class="lesson-example"><span>МЫСАЛ</span><b>${currentLesson.example}</b></div>
      <div class="lesson-question-progress"><span style="width:${progress}%"></span></div>
      <div class="lesson-mode-tabs" role="group" aria-label="Түсіндіру тәсілін таңда">${modeButtons}</div>
      <div id="lesson-mode-content">${renderModeContent(question)}</div>`;
  }

  document.querySelectorAll(".lesson-card[data-topic]").forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      currentTopicKey = card.dataset.topic;
      currentLesson = LESSONS[currentTopicKey];
      currentQuestionIndex = 0;
      currentMode = "interactive";
      currentStepIndex = 0;
      currentAnswerState = null;
      selectedAnswer = null;
      renderLessonQuestion();
      lessonDialog.showModal();
    });
  });

  document.querySelector("#close-lesson").addEventListener("click", () => lessonDialog.close());
  lessonDialog.addEventListener("close", () => {
    if (speechSupported) speechSynthesis.cancel();
  });
  document.querySelector("#speak-question").addEventListener("click", () => {
    const question = currentLesson?.questions[currentQuestionIndex];
    if (question) speak(question.prompt);
  });
  document.querySelector("#speak-instruction").addEventListener("click", () => speak(getSpeechInstruction()));
  document.querySelector("#stop-speech").addEventListener("click", () => {
    if (!speechSupported) return;
    speechSynthesis.cancel();
    speechStatus.textContent = "Дыбыс тоқтатылды.";
  });
  speechEnabledToggle.addEventListener("change", () => {
    accessibilitySettings.soundEnabled = speechEnabledToggle.checked;
    saveAccessibilitySettings();
    if (accessSoundToggle) accessSoundToggle.checked = accessibilitySettings.soundEnabled;
    if (!speechEnabledToggle.checked && speechSupported) {
      speechSynthesis.cancel();
      speechStatus.textContent = "Дыбыс өшірулі.";
    } else {
      speechStatus.textContent = "";
    }
    updateSpeechButtons();
  });
  speechRateInput.addEventListener("input", () => {
    const rate = Number(speechRateInput.value);
    speechRateValue.value = `${rate.toFixed(1)}×`;
    speechRateValue.textContent = speechRateValue.value;
    if (profile) {
      profile.speechRate = rate;
      saveProfile(profile);
    }
  });
  document.querySelectorAll('input[name="access-font-size"]').forEach((input) => {
    input.addEventListener("change", () => {
      accessibilitySettings.fontSize = input.value;
      applyAccessibilitySettings();
      saveAccessibilitySettings();
    });
  });
  document.querySelectorAll('input[name="access-color-mode"]').forEach((input) => {
    input.addEventListener("change", () => {
      accessibilitySettings.colorMode = input.value;
      applyAccessibilitySettings();
      saveAccessibilitySettings();
    });
  });
  accessSoundToggle.addEventListener("change", () => {
    accessibilitySettings.soundEnabled = accessSoundToggle.checked;
    applyAccessibilitySettings();
    saveAccessibilitySettings();
    if (!accessibilitySettings.soundEnabled && speechSupported) {
      speechSynthesis.cancel();
      speechStatus.textContent = "Дыбыс өшірулі.";
    } else {
      speechStatus.textContent = "";
    }
  });
  reduceMotionToggle.addEventListener("change", () => {
    accessibilitySettings.reduceMotion = reduceMotionToggle.checked;
    applyAccessibilitySettings();
    saveAccessibilitySettings();
  });
  largeButtonsToggle.addEventListener("change", () => {
    accessibilitySettings.largeButtons = largeButtonsToggle.checked;
    applyAccessibilitySettings();
    saveAccessibilitySettings();
  });
  if (speechSynthesis) speechSynthesis.onvoiceschanged = () => refreshSpeechVoices(true);
  lessonContent.addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) {
      currentMode = modeButton.dataset.mode;
      currentStepIndex = 0;
      renderLessonQuestion();
      lessonContent.querySelector(`[data-mode="${currentMode}"]`)?.focus();
      return;
    }

    const actionButton = event.target.closest("[data-lesson-action]");
    if (actionButton) {
      if (actionButton.dataset.lessonAction === "retry") {
        currentAnswerState = null;
        selectedAnswer = null;
        renderLessonQuestion();
      } else if (actionButton.dataset.lessonAction === "next-question") {
        currentQuestionIndex += 1;
        currentAnswerState = null;
        currentStepIndex = 0;
        renderLessonQuestion();
        const focusTarget = lessonContent.querySelector(".task-prompt") || lessonContent.querySelector("#lesson-title");
        focusTarget?.setAttribute("tabindex", "-1");
        focusTarget?.focus();
      } else if (actionButton.dataset.lessonAction === "next-step" || actionButton.dataset.lessonAction === "prev-step") {
        const steps = makeStepList(currentLesson.questions[currentQuestionIndex]);
        currentStepIndex += actionButton.dataset.lessonAction === "next-step" ? 1 : -1;
        currentStepIndex = Math.min(steps.length - 1, Math.max(0, currentStepIndex));
        renderLessonQuestion();
        lessonContent.querySelector(".step-card")?.focus();
      } else if (actionButton.dataset.lessonAction === "finish") {
        lessonDialog.close();
      }
      return;
    }

    const answerButton = event.target.closest("[data-answer]");
    if (!answerButton || answerButton.disabled) return;
    const question = currentLesson.questions[currentQuestionIndex];
    const isCorrect = answerButton.dataset.answer === question.answer;
    currentAnswerState = isCorrect;
    selectedAnswer = answerButton.dataset.answer;
    saveTaskResult(isCorrect);
    renderLessonQuestion();
    lessonContent.querySelector(isCorrect ? ".lesson-next-button" : ".lesson-retry-button")?.focus();
  });

  function renderGameCards() {
    Object.keys(MATH_GAMES).forEach((gameId) => {
      const state = profile?.gameResults?.[gameId] || {};
      const score = document.querySelector(`#${gameId}-score`);
      const stars = document.querySelector(`#${gameId}-stars`);
      const level = document.querySelector(`#${gameId}-level`);
      if (score) score.textContent = Number(state.score) || 0;
      if (stars) stars.textContent = Number(state.stars) || 0;
      if (level) level.textContent = state.completed ? "Аяқталды!" : `${Number(state.level) || 1}-деңгей`;
    });
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function loadTeacherDemoStudents() {
    const sampleStudents = [
      { id: "demo-ayaru", name: "Айару", avatar: "🌼", level: "Бастапқы", results: { numbers: [true,true,true,true,true], addition: [true,true,true,true,false], subtraction: [true,true,false,null,null], multiplication: [true,false,null,null,null], division: [null,null,null,null,null] }, games: { count: { score: 80, stars: 8 }, answer: { score: 60, stars: 6 }, match: { score: 40, stars: 4 }, puzzle: { score: 20, stars: 2 } } },
      { id: "demo-ali", name: "Әли", avatar: "🚀", level: "Орташа", results: { numbers: [true,true,true,true,true], addition: [true,true,true,true,true], subtraction: [true,true,true,true,true], multiplication: [true,true,true,true,null], division: [true,true,true,false,null] }, games: { count: { score: 140, stars: 14 }, answer: { score: 120, stars: 12 }, match: { score: 110, stars: 11 }, puzzle: { score: 90, stars: 9 } } },
      { id: "demo-daniyar", name: "Данияр", avatar: "🐼", level: "Бастапқы", results: { numbers: [true,true,true,false,false], addition: [true,false,true,false,null], subtraction: [true,false,false,null,null], multiplication: [true,false,null,null,null], division: [null,null,null,null,null] }, games: { count: { score: 50, stars: 5 }, answer: { score: 30, stars: 3 }, match: { score: 20, stars: 2 }, puzzle: { score: 10, stars: 1 } } },
      { id: "demo-madina", name: "Мәдина", avatar: "🦄", level: "Жоғары", results: { numbers: [true,true,false,false,null], addition: [true,false,false,null,null], subtraction: [true,true,true,false,null], multiplication: [true,true,null,null,null], division: [true,false,null,null,null] }, games: { count: { score: 70, stars: 7 }, answer: { score: 50, stars: 5 }, match: { score: 30, stars: 3 }, puzzle: { score: 30, stars: 3 } } }
    ];
    try {
      const saved = localStorage.getItem(teacherDemoStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        const templates = new Map(sampleStudents.map((student) => [student.id, student]));
        if (Array.isArray(parsed)) {
          const cleaned = parsed.filter((student) => student && templates.has(student.id)).map((student) => {
            const template = templates.get(student.id);
            const results = Object.fromEntries(TEACHER_TOPICS.map((topic) => [
              topic.id,
              Array.from({ length: 5 }, (_, index) => {
                const value = student.results?.[topic.id]?.[index];
                return value === true || value === false ? value : null;
              })
            ]));
            const games = Object.fromEntries(Object.keys(MATH_GAMES).map((gameId) => [gameId, {
              score: Math.max(0, Number(student.games?.[gameId]?.score) || 0),
              stars: Math.max(0, Number(student.games?.[gameId]?.stars) || 0)
            }]));
            return {
              id: template.id,
              name: String(student.name || template.name).slice(0, 32),
              avatar: template.avatar,
              level: ["Бастапқы", "Орташа", "Жоғары"].includes(student.level) ? student.level : template.level,
              results,
              games
            };
          });
          if (cleaned.length === sampleStudents.length) {
            teacherDemoStorageAvailable = true;
            return cleaned;
          }
        }
      }
      localStorage.setItem(teacherDemoStorageKey, JSON.stringify(sampleStudents));
      teacherDemoStorageAvailable = true;
    } catch {
      teacherDemoStorageAvailable = false;
    }
    return sampleStudents;
  }

  function analyzeStudent(student, source) {
    const topics = TEACHER_TOPICS.map((topic) => {
      const values = source === "demo"
        ? (Array.isArray(student.results?.[topic.id]) ? student.results[topic.id].slice(0, 5) : [])
        : Array.from({ length: 5 }, (_, index) => {
          const value = student.taskResults?.[`${topic.id}:${index}`];
          return value === true || value === false ? value : null;
        });
      while (values.length < 5) values.push(null);
      const correct = values.filter((value) => value === true).length;
      const attempted = values.filter((value) => value === true || value === false).length;
      const incorrect = values.filter((value) => value === false).length;
      return {
        ...topic,
        correct,
        attempted,
        incorrect,
        accuracy: attempted ? Math.round((correct / attempted) * 100) : 0,
        progress: Math.round((correct / 5) * 100),
        mastered: correct >= 4,
        needsSupport: incorrect > 0 && correct < 4
      };
    });
    const correct = topics.reduce((sum, topic) => sum + topic.correct, 0);
    const attempted = topics.reduce((sum, topic) => sum + topic.attempted, 0);
    return {
      topics,
      correct,
      attempted,
      accuracy: attempted ? Math.round((correct / attempted) * 100) : 0,
      mastered: topics.filter((topic) => topic.mastered),
      needsSupport: topics.filter((topic) => topic.needsSupport)
    };
  }

  function renderTeacherStudentDetail(student, source) {
    const stats = analyzeStudent(student, source);
    const name = escapeHtml(student.name);
    const level = escapeHtml(student.level || "Деңгей таңдалмаған");
    const chartRows = stats.topics.map((topic) => `
      <div class="progress-chart-row">
        <div class="chart-row-heading"><span>${topic.label}</span><b>${topic.accuracy}%</b></div>
        <div class="chart-track" role="progressbar" aria-label="${topic.label}: ${topic.correct} дұрыс жауап, ${topic.attempted} жауап берілген" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${topic.progress}"><span style="width:${topic.progress}%"></span></div>
        <small>${topic.correct} / 5 тапсырма дұрыс${topic.attempted ? ` · ${topic.attempted} жауап берілді` : " · әлі жауап жоқ"}</small>
      </div>`).join("");
    const topicsList = (items, emptyText, className) => items.length
      ? `<div class="topic-chip-list">${items.map((topic) => `<span class="topic-chip ${className}">${topic.label}</span>`).join("")}</div>`
      : `<p class="teacher-empty-note">${emptyText}</p>`;
    const gameRows = Object.entries(MATH_GAMES).map(([gameId, game]) => {
      const result = source === "demo" ? student.games?.[gameId] : profile?.gameResults?.[gameId];
      return `<div class="teacher-game-row"><span>${game.icon} ${game.title}</span><b>${Number(result?.score) || 0} ұпай</b><small>${Number(result?.stars) || 0} ⭐</small></div>`;
    }).join("");
    teacherDetail.innerHTML = `
      <div class="teacher-detail-header"><div class="teacher-student-avatar">${escapeHtml(student.avatar || "🙂")}</div><div><span class="teacher-detail-source">${source === "demo" ? "Демонстрациялық оқушы" : "Нақты оқушы · осы браузер"}</span><h3>${name}</h3><span class="teacher-level-pill">${level}</span></div><div class="teacher-accuracy"><b>${stats.accuracy}%</b><small>дұрыс жауап</small></div></div>
      ${stats.attempted ? "" : `<div class="teacher-no-results">Нақты тапсырма нәтижесі әзірге жоқ. Оқушы сабақ орындаған соң көрсеткіштер осында жаңарады.</div>`}
      <div class="teacher-chart-heading"><h4>Тақырыптар бойынша прогресс</h4><span>${stats.correct} / 25 дұрыс</span></div>
      <div class="teacher-chart">${chartRows}</div>
      <div class="teacher-topic-groups"><section><h4><span class="mastered-dot"></span>Меңгерген тақырыптар</h4>${topicsList(stats.mastered, "Әзірге меңгерілген тақырып жоқ.", "mastered-chip")}</section><section><h4><span class="support-dot"></span>Қиындық туындаған тақырыптар</h4>${topicsList(stats.needsSupport, "Қосымша қолдау қажет тақырып байқалмады.", "support-chip")}</section></div>
      <section class="teacher-games-results"><h4>Ойын нәтижелері</h4><div>${gameRows}</div></section>`;
  }

  function renderTeacherDashboard(source = activeTeacherSource) {
    activeTeacherSource = source;
    const sourceButtons = document.querySelectorAll("[data-teacher-source]");
    sourceButtons.forEach((button) => {
      const selected = button.dataset.teacherSource === source;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    const students = source === "demo"
      ? loadTeacherDemoStudents()
      : profile ? [{ id: "local-student", name: profile.name, avatar: profile.avatar, level: profile.level, taskResults: profile.taskResults }] : [];
    teacherSourceNote.textContent = source === "demo"
      ? teacherDemoStorageAvailable
        ? "Демонстрациялық режим: үлгі оқушылардың нәтижелері бөлек жергілікті сақталады және нақты деректермен араластырылмайды."
        : "Демонстрациялық режим: үлгі деректер тек осы ашық сессияда көрінеді; браузер жадына сақтау қолжетімсіз."
      : "Нақты режим: осы браузердегі оқушы профилінің сабақ нәтижелері ғана көрсетіледі. Серверге дерек жіберілмейді.";
    teacherStudentCount.textContent = `${students.length} оқушы`;
    const analyses = students.map((student) => analyzeStudent(student, source));
    const averageAccuracy = analyses.length
      ? Math.round(analyses.reduce((sum, item) => sum + item.accuracy, 0) / analyses.length)
      : 0;
    const masteredTotal = analyses.reduce((sum, item) => sum + item.mastered.length, 0);
    const supportTotal = analyses.reduce((sum, item) => sum + item.needsSupport.length, 0);
    teacherKpis.innerHTML = `
      <article class="teacher-kpi"><span class="teacher-kpi-icon kpi-lilac">♙</span><div><small>Оқушы саны</small><b>${students.length}</b></div></article>
      <article class="teacher-kpi"><span class="teacher-kpi-icon kpi-blue">✓</span><div><small>Орташа дұрыс жауап</small><b>${averageAccuracy}%</b></div></article>
      <article class="teacher-kpi"><span class="teacher-kpi-icon kpi-green">✦</span><div><small>Меңгерілген тақырып</small><b>${masteredTotal}</b></div></article>
      <article class="teacher-kpi"><span class="teacher-kpi-icon kpi-yellow">♡</span><div><small>Қолдау қажет</small><b>${supportTotal}</b></div></article>`;
    if (!students.length) {
      teacherStudentList.innerHTML = `<p class="teacher-empty-note">Бұл браузерде әлі оқушы профилі жасалмаған.</p>`;
      teacherDetail.innerHTML = `<div class="teacher-no-results">Нақты нәтиже жиналғанда осы бөлімде көрсетіледі.</div>`;
      activeTeacherStudentId = "";
      return;
    }
    if (!students.some((student) => student.id === activeTeacherStudentId)) activeTeacherStudentId = students[0].id;
    teacherStudentList.innerHTML = students.map((student) => {
      const stats = analyzeStudent(student, source);
      const selected = student.id === activeTeacherStudentId;
      return `<button class="teacher-student-row ${selected ? "is-selected" : ""}" type="button" data-teacher-student="${student.id}" aria-pressed="${selected}"><span class="teacher-row-avatar">${escapeHtml(student.avatar || "🙂")}</span><span class="teacher-row-info"><b>${escapeHtml(student.name)}</b><small>${escapeHtml(student.level || "Деңгей таңдалмаған")}</small></span><span class="teacher-row-score">${stats.accuracy}%</span><span class="teacher-row-chevron">›</span></button>`;
    }).join("");
    const activeStudent = students.find((student) => student.id === activeTeacherStudentId);
    renderTeacherStudentDetail(activeStudent, source);
  }

  document.querySelectorAll("[data-teacher-source]").forEach((button) => {
    button.addEventListener("click", () => renderTeacherDashboard(button.dataset.teacherSource));
  });
  teacherStudentList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-teacher-student]");
    if (!button) return;
    activeTeacherStudentId = button.dataset.teacherStudent;
    renderTeacherDashboard();
  });

  function getGameState(gameId) {
    profile.gameResults ||= {};
    if (!profile.gameResults[gameId]) {
      profile.gameResults[gameId] = { level: 1, round: 0, score: 0, stars: 0, completed: false, status: "", answers: {} };
    } else {
      const saved = profile.gameResults[gameId];
      profile.gameResults[gameId] = {
        level: Math.min(3, Math.max(1, Number(saved.level) || 1)),
        round: Math.min(4, Math.max(0, Number(saved.round) || 0)),
        score: Math.max(0, Number(saved.score) || 0),
        stars: Math.max(0, Number(saved.stars) || 0),
        completed: Boolean(saved.completed),
        status: ["correct", "wrong", ""].includes(saved.status) ? saved.status : "",
        answers: saved.answers && typeof saved.answers === "object" ? saved.answers : {}
      };
    }
    return profile.gameResults[gameId];
  }

  function saveGameState(gameId, state) {
    profile.gameResults[gameId] = state;
    saveProfile(profile);
    renderGameCards();
    renderTeacherDashboard();
  }

  function choiceNumbers(correct, round) {
    const options = [...new Set([correct, correct + 1, Math.max(0, correct - 1)])];
    while (options.length < 3) options.push(correct + options.length + 1);
    const shift = round % options.length;
    return [...options.slice(shift), ...options.slice(0, shift)].map(String);
  }

  function objectRow(emoji, amount) {
    return Array.from({ length: amount }, () => `<span aria-hidden="true">${emoji}</span>`).join("");
  }

  function makeGameQuestion(gameId, state) {
    const { level, round } = state;
    if (gameId === "count") {
      const amount = (level - 1) * 5 + round + 1;
      const objects = ["🍎", "⚽", "⭐", "🟣", "🌼"];
      const emoji = objects[round % objects.length];
      return {
        prompt: "Суреттегі заттарды сана. Неше зат бар?",
        art: `<div class="count-game-picture">${objectRow(emoji, amount)}</div>`,
        choices: choiceNumbers(amount, round), answer: String(amount),
        hint: "Әр затты бір реттен, асықпай сана.",
        success: `Дұрыс! Суретте ${amount} зат бар.`
      };
    }

    if (gameId === "answer") {
      let a; let b; let operator; let answer;
      if (level === 1) {
        a = 2 + round; b = 1;
        operator = "+";
        answer = a + b;
      } else if (level === 2) {
        a = 10 + round * 2; b = 2 + round; operator = "−"; answer = a - b;
      } else if (round % 2 === 0) {
        a = 3 + Math.floor(round / 2); b = 4; operator = "×"; answer = a * b;
      } else {
        a = 15 + round * 3; b = 3; operator = "÷"; answer = a / b;
      }
      return {
        prompt: `${a} ${operator} ${b} = ?`,
        art: `<div class="game-equation">${a} <span>${operator}</span> ${b} <span>=</span> <b>?</b></div>`,
        choices: choiceNumbers(answer, round), answer: String(answer),
        hint: operator === "+" ? `Алдымен ${a}-дан бастап, ${b} қадам алға сана.` : operator === "−" ? `${a}-дан бастап ${b} қадам кері сана.` : "Есепті асықпай шығарып, амал таңбасына назар аудар.",
        success: `Дұрыс шештің! ${a} ${operator} ${b} = ${answer}.`
      };
    }

    if (gameId === "match") {
      const amount = (level - 1) * 5 + round + 2;
      const emoji = ["🔵", "🍓", "⭐", "🐠", "🟡"][round % 5];
      return {
        prompt: `Суретті ${amount} санына сәйкестендір.`, type: "match", emoji, amount,
        art: `<div class="match-target">Сәйкестендіретін сан <strong>${amount}</strong></div>`,
        choices: choiceNumbers(amount, round), answer: String(amount),
        hint: "Әр суреттегі заттарды санап, мақсат санымен бірдей топты таңда.",
        success: `Таптың! ${amount} ${emoji} суреті ${amount} санына сәйкес.`
      };
    }

    let prompt; let answer; let explanation; let hint;
    if (level === 1) {
      const a = round + 1; const b = 2;
      answer = a + b; prompt = `${a} + ${b} = ?`;
      explanation = `${a} + ${b} = ${answer}`; hint = `${a}-дан бастап ${b} қадам алға сана.`;
    } else if (level === 2) {
      const a = 12 + round; const b = 3 + round;
      answer = b; prompt = `□ + ${a - b} = ${a}`;
      explanation = `${b} + ${a - b} = ${a}`; hint = `Бос орынға қосқанда ${a} шығатын санды тап.`;
    } else if (round % 2 === 0) {
      const a = 3 + Math.floor(round / 2); const b = 4;
      answer = a; prompt = `□ × ${b} = ${a * b}`;
      explanation = `${a} × ${b} = ${a * b}`; hint = `Қай санды ${b}-ке көбейтсек, ${a * b} шығады?`;
    } else {
      const divisor = 3; const quotient = 4 + round;
      answer = quotient; prompt = `□ ÷ ${divisor} = ${quotient}`;
      explanation = `${quotient * divisor} ÷ ${divisor} = ${quotient}`; hint = `Бос санды ${divisor}-ке бөлгенде ${quotient} шығуы керек.`;
    }
    return {
      prompt, art: `<div class="puzzle-equation"><span>🧩</span><b>${prompt.replace("□", "?")}</b></div>`,
      choices: choiceNumbers(answer, round), answer: String(answer), hint,
      success: `Пазл шешілді! ${explanation}.`
    };
  }

  let activeGameId = "";
  function renderGame() {
    const state = getGameState(activeGameId);
    const game = MATH_GAMES[activeGameId];
    if (state.completed) {
      gameContent.innerHTML = `<div class="game-finish"><span class="game-finish-icon">🏆</span><p class="game-kicker">ҮШ ДЕҢГЕЙДІ ДЕ АЯҚТАДЫҢ!</p><h2 id="game-title">Жарайсың!</h2><p>${game.title} ойынының барлық деңгейін бітірдің.</p><div class="game-result-pills"><span>${state.score} ұпай</span><span>${state.stars} ⭐</span></div><button class="game-primary-button" type="button" data-game-action="replay">Қайта ойнау <span>↻</span></button></div>`;
      return;
    }
    const question = makeGameQuestion(activeGameId, state);
    const answers = question.type === "match"
      ? question.choices.map((choice) => `<button class="match-choice" type="button" data-game-answer="${choice}" ${state.status ? "disabled" : ""}><span class="match-picture-group">${objectRow(question.emoji, Number(choice))}</span><b>${choice} зат</b></button>`).join("")
      : question.choices.map((choice) => `<button class="game-answer-option" type="button" data-game-answer="${choice}" ${state.status ? "disabled" : ""}>${choice}</button>`).join("");
    let response = "";
    if (state.status === "correct") {
      const nextLabel = state.round < 4 ? "Келесі тапсырма" : state.level < 3 ? `${state.level + 1}-деңгейге өту` : "Қорытындыны көру";
      response = `<div class="game-feedback game-feedback-good"><span>🌟</span><div><b>${question.success}</b><small>+10 ұпай · +1 жұлдыз</small></div></div><button class="game-primary-button" type="button" data-game-action="advance">${nextLabel} <span>→</span></button>`;
    } else if (state.status === "wrong") {
      response = `<div class="game-feedback game-feedback-help"><span>💡</span><div><b>Қате жауап болса да, үйреніп жатырсың!</b><small>${question.hint}</small></div></div><button class="game-retry-button" type="button" data-game-action="retry">Қайта байқап көру</button>`;
    }
    const progress = Math.round((state.round / 5) * 100);
    gameContent.innerHTML = `
      <div class="game-topline"><span class="game-icon-badge">${game.icon}</span><span class="game-kicker">${game.title}</span><span class="game-score-chip">${state.score} ұпай · ${state.stars} ⭐</span></div>
      <div class="game-level-row"><h2 id="game-title">${state.level}-деңгей</h2><span>Тапсырма ${state.round + 1} / 5</span></div>
      <div class="game-progress-track"><span style="width:${progress}%"></span></div>
      <p class="game-round-prompt">${question.prompt}</p>
      <div class="game-round-art">${question.art}</div>
      <div class="game-answer-list ${question.type === "match" ? "matching-options" : ""}" role="group" aria-label="Жауапты таңда">${answers}</div>
      <div class="game-response" aria-live="polite">${response}</div>`;
  }

  document.querySelectorAll(".game-card[data-game]").forEach((card) => {
    card.addEventListener("click", () => {
      activeGameId = card.dataset.game;
      renderGame();
      gameDialog.showModal();
    });
  });
  document.querySelector("#close-game").addEventListener("click", () => gameDialog.close());
  gameDialog.addEventListener("click", (event) => {
    if (event.target === gameDialog) gameDialog.close();
  });
  gameContent.addEventListener("click", (event) => {
    const action = event.target.closest("[data-game-action]");
    if (action) {
      const state = getGameState(activeGameId);
      if (action.dataset.gameAction === "retry") {
        state.status = "";
      } else if (action.dataset.gameAction === "advance") {
        if (state.round < 4) state.round += 1;
        else if (state.level < 3) { state.level += 1; state.round = 0; }
        else state.completed = true;
        state.status = "";
      } else if (action.dataset.gameAction === "replay") {
        state.level = 1;
        state.round = 0;
        state.completed = false;
        state.status = "";
      }
      saveGameState(activeGameId, state);
      renderGame();
      return;
    }

    const answer = event.target.closest("[data-game-answer]");
    if (!answer || answer.disabled) return;
    const state = getGameState(activeGameId);
    const question = makeGameQuestion(activeGameId, state);
    const isCorrect = answer.dataset.gameAnswer === question.answer;
    state.status = isCorrect ? "correct" : "wrong";
    state.answers[`${state.level}-${state.round}`] = { choice: answer.dataset.gameAnswer, correct: isCorrect };
    if (isCorrect) {
      state.score += 10;
      state.stars += 1;
    }
    saveGameState(activeGameId, state);
    renderGame();
    gameContent.querySelector(isCorrect ? ".game-primary-button" : ".game-retry-button")?.focus();
  });

  const setActiveLink = (id) => {
    navigationLinks.forEach((link) => {
      const active = link.hash === `#${id}`;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Мәзірді жабу" : "Мәзірді ашу");
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
      setActiveLink(link.hash.slice(1));
      navigation.classList.remove("is-open");
      menuButton?.setAttribute("aria-expanded", "false");
      menuButton?.setAttribute("aria-label", "Мәзірді ашу");
    });
  });

  editProfileButton.addEventListener("click", openProfileEditor);
  cancelProfileButton.addEventListener("click", () => profileDialog.close());
  closeProfileButton.addEventListener("click", () => profileDialog.close());
  profileDialog.addEventListener("cancel", (event) => {
    if (isFirstVisit) event.preventDefault();
  });
  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(profileForm);
    const nextProfile = {
      name: String(formData.get("name") || "").trim(),
      avatar: String(formData.get("avatar") || "😊"),
      level: String(formData.get("level") || "Бастапқы"),
      completedTasks: profile?.completedTasks || 0,
      stars: profile?.stars || 0,
      progress: profile?.progress || 0,
      taskResults: profile?.taskResults || {},
      reducedMotion: accessibilitySettings.reduceMotion,
      speechEnabled: accessibilitySettings.soundEnabled,
      speechRate: profile?.speechRate || 1,
      gameResults: profile?.gameResults || {}
    };
    if (!nextProfile.name) {
      nameField.focus();
      return;
    }
    profile = nextProfile;
    isFirstVisit = false;
    const stored = saveProfile(profile);
    document.querySelector(".storage-note").textContent = stored
      ? "Таңдауларың осы браузерде сақталады."
      : "Сақтау мүмкін болмады. Браузер баптауларын тексер.";
    renderProfile();
    applyAccessibilitySettings();
    applyMotionPreference();
    applySpeechPreferences();
    profileDialog.close();
  });

  if (profile) {
    profile = {
      ...profile,
      completedTasks: Number(profile.completedTasks) || 0,
      stars: Number(profile.stars) || 0,
      progress: Math.min(100, Math.max(0, Number(profile.progress) || 0))
    };
    renderProfile();
  } else {
    openProfileEditor();
  }
  applyAccessibilitySettings();
  applySpeechPreferences();

  const sections = navigationLinks
    .map((link) => document.querySelector(link.hash))
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visibleSection = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visibleSection) setActiveLink(visibleSection.target.id);
    }, { rootMargin: "-22% 0px -58% 0px", threshold: [0, 0.15, 0.4] });
    sections.forEach((section) => observer.observe(section));
  }
});

/* Local, interface-only task solver. No request is sent to a server or AI. */
(() => {
  const input = document.getElementById('solver-question');
  const formula = document.getElementById('solver-formula');
  const button = document.getElementById('solve-task');
  const status = document.getElementById('solver-status');
  if (!input || !formula || !button || !status) return;

  function updateFormula() {
    const raw = input.value.trim();
    const match = raw.match(/(-?\d+(?:[.,]\d+)?)\s*([+−\-×*÷/])\s*(-?\d+(?:[.,]\d+)?)(?:\s*=\s*(?:\?|(-?\d+(?:[.,]\d+)?)))?/);
    if (!match) {
      formula.textContent = raw ? 'Формулу не удалось распознать. Пример: 3 + 2 = ?' : 'Формула появится здесь';
      return;
    }
    if (typeof window.katex === 'undefined') {
      formula.textContent = `${match[1]} ${match[2]} ${match[3]}`;
      return;
    }
    const operator = ({ '−': '-', '-': '-', '*': '\\times', '×': '\\times', '/': '\\div', '÷': '\\div', '+': '+' })[match[2]];
    const expression = `${match[1].replace(',', '.')} ${operator} ${match[3].replace(',', '.')}${match[4] ? ` = ${match[4].replace(',', '.')}` : ''}`;
    window.katex.render(expression, formula, { displayMode: true, throwOnError: false, output: 'htmlAndMathml' });
  }

  input.addEventListener('input', updateFormula);
  button.addEventListener('click', () => {
    if (!input.value.trim()) {
      status.className = 'solver-status is-info';
      status.textContent = 'Сначала введите условие задачи.';
      input.focus();
      return;
    }
    updateFormula();
    button.disabled = true;
    status.className = 'solver-status is-loading';
    status.textContent = 'Решаю.';
    window.setTimeout(() => {
      button.disabled = false;
      status.className = 'solver-status is-info';
      status.textContent = 'Это локальный интерфейс. Для получения решения нужно подключить ИИ-сервис.';
    }, 900);
  });
})();

