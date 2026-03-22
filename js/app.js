let timerInterval = null;
let timeRemaining = 0;
let totalTime = 0;
let isTimerRunning = false;
let eliminationQueue = [];

function initTimer(minutesStr, autoStarts) {
  clearInterval(timerInterval);
  isTimerRunning = false;
  const timerDisplay = document.getElementById('timerDisplay');
  
  if (!minutesStr || isNaN(parseInt(minutesStr)) || parseInt(minutesStr) <= 0) {
    if (timerDisplay) timerDisplay.style.display = 'none';
    return;
  }
  
  timeRemaining = parseInt(minutesStr) * 60;
  totalTime = timeRemaining;
  updateTimerUI();
  
  if (timerDisplay) timerDisplay.style.display = 'flex';
  
  const actionBtn = document.getElementById('timerActionBtn');
  if (actionBtn) {
    actionBtn.textContent = 'Start';
  }
  
  if (autoStarts) {
    startTimer();
  }
}

function updateTimerUI() {
  const timeSpan = document.getElementById('timerTime');
  if (!timeSpan) return;
  
  const m = Math.floor(timeRemaining / 60);
  const s = timeRemaining % 60;
  timeSpan.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  
  const progressBar = document.getElementById('timerProgress');
  let color = '#e73c7e';
  
  if (timeRemaining <= 0) {
    color = '#e53e3e';
  } else if (timeRemaining <= 60) {
    color = '#dd6b20';
  }
  
  timeSpan.style.color = color;
  
  if (progressBar && totalTime > 0) {
    const percent = Math.max(0, (timeRemaining / totalTime) * 100);
    progressBar.style.width = `${percent}%`;
    progressBar.style.backgroundColor = color;
  }
}

function toggleTimer() {
  if (isTimerRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}

function startTimer() {
  if (timeRemaining <= 0) return;
  isTimerRunning = true;
  const actionBtn = document.getElementById('timerActionBtn');
  if (actionBtn) actionBtn.textContent = 'Pause';
  
  timerInterval = setInterval(() => {
    timeRemaining--;
    updateTimerUI();
    if (timeRemaining <= 0) {
      pauseTimer();
    }
  }, 1000);
}

function pauseTimer() {
  isTimerRunning = false;
  clearInterval(timerInterval);
  const actionBtn = document.getElementById('timerActionBtn');
  if (actionBtn) actionBtn.textContent = 'Start';
}

function loadRandomExample() {
  if (typeof presetData === 'undefined') return;
  const subjects = Object.keys(presetData);
  const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
  const themes = presetData[randomSubject];
  const randomTheme = themes[Math.floor(Math.random() * themes.length)];
  
  const topicInput = document.getElementById('topicInput');
  if (topicInput) topicInput.value = randomTheme.topic;

  const subjectSelect = document.getElementById('subjectSelect');
  if (subjectSelect) subjectSelect.value = randomSubject;
  updateThemeOptions();
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) themeSelect.value = randomTheme.topic;

  randomTheme.words.forEach((word, index) => {
    const input = document.getElementById(`text${index + 1}`);
    if(input) input.value = word;
  });
}

function initDropdowns() {
  if (typeof presetData === 'undefined') return;
  const subjectSelect = document.getElementById('subjectSelect');
  if (!subjectSelect) return;
  
  const subjects = Object.keys(presetData);
  subjects.forEach(subject => {
    const option = document.createElement('option');
    option.value = subject;
    option.textContent = subject;
    subjectSelect.appendChild(option);
  });
}

function updateThemeOptions() {
  if (typeof presetData === 'undefined') return;
  const subjectSelect = document.getElementById('subjectSelect');
  const themeSelect = document.getElementById('themeSelect');
  const subject = subjectSelect.value;
  
  themeSelect.innerHTML = '<option value="" disabled selected>Select a Theme</option>';
  if (subject && presetData[subject]) {
    presetData[subject].forEach(theme => {
      const option = document.createElement('option');
      option.value = theme.topic;
      option.textContent = theme.topic;
      themeSelect.appendChild(option);
    });
    themeSelect.disabled = false;
  } else {
    themeSelect.disabled = true;
  }
}

function loadSelectedTheme() {
  if (typeof presetData === 'undefined') return;
  const subjectSelect = document.getElementById('subjectSelect');
  const themeSelect = document.getElementById('themeSelect');
  const subject = subjectSelect.value;
  const themeTopic = themeSelect.value;
  
  if (subject && themeTopic && presetData[subject]) {
    const selectedTheme = presetData[subject].find(t => t.topic === themeTopic);
    if (selectedTheme) {
      const topicInput = document.getElementById('topicInput');
      if (topicInput) topicInput.value = selectedTheme.topic;

      selectedTheme.words.forEach((word, index) => {
        const input = document.getElementById(`text${index + 1}`);
        if(input) input.value = word;
      });
    }
  }
}

function editMode() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  const timerDisplay = document.getElementById('timerDisplay');
  if (timerDisplay) timerDisplay.style.display = 'none';

  document.getElementById('container').style.display = 'none';
  document.getElementById('outputHeader').style.display = 'none';
  const instructions = document.getElementById('instructions');
  if (instructions) instructions.style.display = 'block';
  const footerActions = document.getElementById('footerActions');
  if (footerActions) footerActions.style.display = 'none';

  const heroSection = document.querySelector('.hero-section');
  if (heroSection) heroSection.style.display = 'block';
  
  const inputContainer = document.getElementById('inputContainer');
  inputContainer.style.display = 'flex';
  inputContainer.style.animation = 'none'; 
  inputContainer.offsetHeight; /* trigger reflow */
  inputContainer.style.animation = 'fadeIn 0.4s ease forwards';
  
  const url = new URL(window.location);
  url.searchParams.delete('words');
  url.searchParams.delete('topic');
  url.searchParams.delete('locked');
  url.searchParams.delete('timer');
  url.searchParams.delete('autostart');
  url.searchParams.delete('layout');
  window.history.replaceState({}, '', url);

  updateActiveInputs();
}

function updateActiveInputs() {
  const layoutSelect = document.getElementById('layoutSelect');
  const selectedLayoutId = layoutSelect ? layoutSelect.value : 'diamond9';
  
  let maxInputs = 9;
  if (selectedLayoutId === 'diamond5') maxInputs = 5;
  else if (selectedLayoutId === 'triangle') maxInputs = 6;
  else if (selectedLayoutId === 'line') maxInputs = 5;
  else if (selectedLayoutId === 'podium') maxInputs = 3;
  else if (selectedLayoutId === 'elimination') maxInputs = 9;
  
  for (let i = 1; i <= 9; i++) {
    const input = document.getElementById(`text${i}`);
    if (input) {
      if (i > maxInputs) {
        input.style.opacity = '0.5';
        input.disabled = true;
        input.style.backgroundColor = '#edf2f7';
      } else {
        input.style.opacity = '1';
        input.disabled = false;
        input.style.backgroundColor = '#ffffff';
      }
    }
  }
}

function spawnItems(itemsArray, isElimination = false, specificBoxIndex = null) {
  const container = document.getElementById('container');
  const width = document.body.clientWidth > 768 ? 140 : 90;
  const height = document.body.clientWidth > 768 ? 70 : 50;
  let delay = 0;
  
  itemsArray.forEach((text, i) => {
    const div = document.createElement('div');
    div.className = 'draggable';
    div.textContent = text;
    div.id = `mydiv_${Math.random().toString(36).substr(2, 9)}`;

    container.appendChild(div);

    if (isElimination) {
      const layoutSelect = document.getElementById('layoutSelect');
      const selectedLayoutId = layoutSelect ? layoutSelect.value : 'elimination';
      const layoutConfig = layouts[selectedLayoutId] || layouts['elimination'];
      
      const boxIndex = specificBoxIndex !== null ? specificBoxIndex : i;
      const box = layoutConfig.boxes[boxIndex];
      const containerRect = container.getBoundingClientRect();
      const baseLeft = parseFloat(box.left) / 100 * containerRect.width;
      const baseTop = parseFloat(box.top) / 100 * containerRect.height;
      
      div.style.left = `${baseLeft - (width / 2)}px`;
      div.style.top = `${baseTop - (height / 2)}px`;
    } else {
      const maxX = container.clientWidth - width;
      const maxY = container.clientHeight - height;
      div.style.left = `${Math.random() * maxX}px`;
      div.style.top = `${Math.random() * maxY}px`;
    }
    
    div.style.opacity = '0';
    div.style.transform = 'scale(0.8)';
    setTimeout(() => {
      div.style.transition = 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      div.style.opacity = '1';
      div.style.transform = 'scale(1)';
      setTimeout(() => { div.style.transition = 'box-shadow 0.2s, transform 0.2s, border-color 0.2s'; }, 400);
    }, delay);
    delay += 50;

    if (typeof dragElement !== 'undefined') dragElement(div);
  });
}

window.handleEliminationDrop = function(elmnt) {
  elmnt.style.transform = 'scale(0) translateY(20px)';
  elmnt.style.opacity = '0';
  elmnt.classList.remove('draggable');
  setTimeout(() => elmnt.remove(), 300);

  const container = document.getElementById('container');
  const remainingDraggables = Array.from(container.querySelectorAll('.draggable'));

  if (remainingDraggables.length === 1) {
    const winner = remainingDraggables[0];
    const width = document.body.clientWidth > 768 ? 140 : 90;
    const height = document.body.clientWidth > 768 ? 70 : 50;
    const containerRect = container.getBoundingClientRect();
    
    // Move winner to Left Box (index 0)
    const layoutConfig = layouts['elimination'];
    const leftBox = layoutConfig.boxes[0];
    const baseLeft = parseFloat(leftBox.left) / 100 * containerRect.width;
    const baseTop = parseFloat(leftBox.top) / 100 * containerRect.height;
    
    winner.style.transition = 'all 0.5s ease-in-out';
    winner.style.left = `${baseLeft - (width / 2)}px`;
    winner.style.top = `${baseTop - (height / 2)}px`;
    
    setTimeout(() => {
      winner.style.transition = 'box-shadow 0.2s, transform 0.2s, border-color 0.2s';
    }, 500);
  }

  if (eliminationQueue.length > 0) {
    const nextItem = eliminationQueue.shift();
    setTimeout(() => spawnItems([nextItem], true, 1), 500);
  } else {
    // Check if only 1 item left - winner!
    if (remainingDraggables.length <= 1) {
      const instructions = document.getElementById('elimInstructions');
      if (instructions) instructions.innerHTML = '<span style="color:#e73c7e; font-weight:bold; font-size:1.2rem;">We have a winner!</span>';
      
      const trashZone = document.getElementById('trashZone');
      if (trashZone) trashZone.style.display = 'none';
    }
  }
};

function createRectangles() {
  const container = document.getElementById('container');
  const inputContainer = document.getElementById('inputContainer');
  const words = [];
  
  const layoutSelect = document.getElementById('layoutSelect');
  const selectedLayoutId = layoutSelect ? layoutSelect.value : 'diamond9';
  const layoutConfig = layouts[selectedLayoutId] || layouts['diamond9'];

  container.innerHTML = ''; // Start clean

  // Render Background Boxes
  layoutConfig.boxes.forEach(box => {
    const bgBox = document.createElement('div');
    bgBox.className = 'background-box';
    bgBox.style.top = box.top;
    bgBox.style.left = box.left;
    container.appendChild(bgBox);
  });

  // Render Layout Labels
  layoutConfig.labels.forEach(l => {
    const lbl = document.createElement('div');
    lbl.className = l.className;
    lbl.textContent = l.text;
    if (l.top) lbl.style.top = l.top;
    if (l.bottom) lbl.style.bottom = l.bottom;
    if (l.left) lbl.style.left = l.left;
    if (l.transform) lbl.style.transform = l.transform;
    container.appendChild(lbl);
  });

  // Elimination special zones
  if (selectedLayoutId === 'elimination') {
    const elimInstructions = document.createElement('div');
    elimInstructions.id = 'elimInstructions';
    elimInstructions.style.position = 'absolute';
    elimInstructions.style.top = '10px';
    elimInstructions.style.width = '100%';
    elimInstructions.style.textAlign = 'center';
    elimInstructions.style.color = '#718096';
    elimInstructions.style.fontSize = '1.1rem';
    elimInstructions.innerHTML = 'Drag the <b>loser</b> to the trash!';
    container.appendChild(elimInstructions);

    const trash = document.createElement('div');
    trash.id = 'trashZone';
    trash.innerHTML = '🗑️ TRASH';
    trash.style.position = 'absolute';
    trash.style.bottom = '20px';
    trash.style.left = '50%';
    trash.style.transform = 'translateX(-50%)';
    trash.style.width = '150px';
    trash.style.height = '60px';
    trash.style.border = '2px dashed #e53e3e';
    trash.style.borderRadius = '12px';
    trash.style.display = 'flex';
    trash.style.alignItems = 'center';
    trash.style.justifyContent = 'center';
    trash.style.color = '#e53e3e';
    trash.style.fontWeight = 'bold';
    trash.style.backgroundColor = 'rgba(229, 62, 62, 0.05)';
    container.appendChild(trash);
  }

  container.style.display = 'block';
  container.style.animation = 'fadeIn 0.6s ease forwards';
  
  const allInputs = [];
  for (let i = 1; i <= 9; i++) {
    const textElement = document.getElementById(`text${i}`);
    if (textElement && textElement.value.trim()) {
      allInputs.push(textElement.value.trim());
      words.push(encodeURIComponent(textElement.value.trim())); // Push all to URL state
    }
  }

  if (selectedLayoutId === 'elimination') {
    eliminationQueue = [...allInputs];
    eliminationQueue.sort(() => 0.5 - Math.random());
    spawnItems(eliminationQueue.splice(0, 2), true);
  } else {
    let selectedInputs = allInputs;
    if (allInputs.length > layoutConfig.count) {
      const shuffled = [...allInputs].sort(() => 0.5 - Math.random());
      selectedInputs = shuffled.slice(0, layoutConfig.count);
    } else {
      selectedInputs = selectedInputs.slice(0, layoutConfig.count);
    }
    spawnItems(selectedInputs);
  }

  inputContainer.style.display = 'none';
  const instructions = document.getElementById('instructions');
  if (instructions) instructions.style.display = 'none';
  
  const heroSection = document.querySelector('.hero-section');
  if (heroSection) heroSection.style.display = 'none';

  const topicInput = document.getElementById('topicInput');
  const topic = topicInput ? topicInput.value.trim() : '';

  const timerInputElem = document.getElementById('timerInput');
  const timerInput = timerInputElem ? timerInputElem.value : '';
  const autoStartToggle = document.getElementById('autoStartToggle');
  const autoStart = autoStartToggle ? autoStartToggle.checked : false;

  const outputHeader = document.getElementById('outputHeader');
  if (outputHeader) outputHeader.style.display = 'block';

  const allowEditToggle = document.getElementById('allowEditToggle');
  const shouldAllowEdit = allowEditToggle ? allowEditToggle.checked : true;

  const footerActions = document.getElementById('footerActions');
  if (footerActions) footerActions.style.display = shouldAllowEdit ? 'block' : 'none';

  const genTopic = document.getElementById('generatedTopic');
  if (genTopic) {
    if (topic) {
      genTopic.textContent = topic;
      genTopic.style.display = 'block';
    } else {
      genTopic.style.display = 'none';
    }
  }

  if (words.length > 0) {
    const url = new URL(window.location);
    url.searchParams.set('words', words.join(','));
    url.searchParams.set('layout', selectedLayoutId);
    
    if (topic) url.searchParams.set('topic', encodeURIComponent(topic));
    else url.searchParams.delete('topic');
    
    if (!shouldAllowEdit) url.searchParams.set('locked', 'true');
    else url.searchParams.delete('locked');
    
    if (timerInput && parseInt(timerInput) > 0) {
      url.searchParams.set('timer', timerInput);
      if (autoStart) url.searchParams.set('autostart', 'true');
      else url.searchParams.delete('autostart');
    } else {
      url.searchParams.delete('timer');
      url.searchParams.delete('autostart');
    }
    window.history.replaceState({}, '', url);
  }

  initTimer(timerInput, autoStart);
}

window.onload = function () {
  if (typeof initDropdowns === 'function') initDropdowns();
  const urlParams = new URLSearchParams(window.location.search);
  
  const layout = urlParams.get('layout');
  if (layout) {
    const layoutSelect = document.getElementById('layoutSelect');
    if (layoutSelect) layoutSelect.value = layout;
  }
  
  updateActiveInputs();

  const topic = urlParams.get('topic');
  if (topic) {
    const topicInput = document.getElementById('topicInput');
    if (topicInput) topicInput.value = decodeURIComponent(topic);
  }

  const locked = urlParams.get('locked');
  if (locked === 'true') {
    const allowEditToggle = document.getElementById('allowEditToggle');
    if (allowEditToggle) allowEditToggle.checked = false;
  }

  const timer = urlParams.get('timer');
  if (timer) {
    const timerInputElem = document.getElementById('timerInput');
    if (timerInputElem) timerInputElem.value = timer;
  }

  const autoStart = urlParams.get('autostart');
  if (autoStart === 'true') {
    const autoStartToggle = document.getElementById('autoStartToggle');
    if (autoStartToggle) autoStartToggle.checked = true;
  }

  const words = urlParams.get('words');
  if (words) {
    const wordArray = words.split(',');
    wordArray.forEach((word, index) => {
      const input = document.getElementById(`text${index + 1}`);
      if (input) input.value = decodeURIComponent(word);
    });
    createRectangles();
  }
};

function buildConfigUrl() {
  const words = [];
  const layoutSelect = document.getElementById('layoutSelect');
  const selectedLayoutId = layoutSelect ? layoutSelect.value : 'diamond9';
  
  for (let i = 1; i <= 9; i++) {
    const textElement = document.getElementById(`text${i}`);
    if (textElement && textElement.value.trim()) {
      words.push(encodeURIComponent(textElement.value.trim()));
    }
  }
  
  const topicInput = document.getElementById('topicInput');
  const topic = topicInput ? topicInput.value.trim() : '';

  const timerInputElem = document.getElementById('timerInput');
  const timerInput = timerInputElem ? timerInputElem.value : '';
  const autoStartToggle = document.getElementById('autoStartToggle');
  const autoStart = autoStartToggle ? autoStartToggle.checked : false;

  const allowEditToggle = document.getElementById('allowEditToggle');
  const shouldAllowEdit = allowEditToggle ? allowEditToggle.checked : true;

  const url = new URL(window.location.origin + window.location.pathname);
  if (words.length > 0) {
    url.searchParams.set('words', words.join(','));
    url.searchParams.set('layout', selectedLayoutId);
    
    if (topic) url.searchParams.set('topic', encodeURIComponent(topic));
    if (!shouldAllowEdit) url.searchParams.set('locked', 'true');
    
    if (timerInput && parseInt(timerInput) > 0) {
      url.searchParams.set('timer', timerInput);
      if (autoStart) url.searchParams.set('autostart', 'true');
    }
  } else {
      // If empty, link back to vanilla generator
      url.searchParams.set('layout', selectedLayoutId);
  }
  return url.toString();
}

function showShareModal() {
  const modal = document.getElementById('shareModal');
  const linkInput = document.getElementById('shareLinkInput');
  const qrImage = document.getElementById('qrImage');
  
  if (modal && linkInput && qrImage) {
    const urlStr = buildConfigUrl();
    linkInput.value = urlStr;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(urlStr)}`;
    modal.style.display = 'flex';
  }
}

function copyShareLink(btn) {
  const linkInput = document.getElementById('shareLinkInput');
  const showCopiedFeedback = () => {
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Copied!';
      btn.style.background = '#38a169'; // success green
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '#e73c7e';
      }, 2000);
    }
  };

  if (linkInput && navigator.clipboard) {
    navigator.clipboard.writeText(linkInput.value)
      .then(showCopiedFeedback)
      .catch(() => {
        linkInput.select();
        document.execCommand('copy');
        showCopiedFeedback();
      });
  } else if (linkInput) {
    linkInput.select();
    document.execCommand('copy');
    showCopiedFeedback();
  }
}
