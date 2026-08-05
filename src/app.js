const levels = [
  {
    concept: 'สารเติมแต่ง',
    customerImage: 'assets/customers/customer-1.png',
    dialogue: '“สายยางรดน้ำของฉันแข็งมาก พองอแล้วแตกง่าย! ช่วยทำให้มันนิ่มและงอได้หน่อย”',
    answer: ['pvc', 'plasticizer', 'flexible'],
    correctTitle: 'สายยางพร้อมใช้งาน!',
    correctText: 'พลาสติไซเซอร์แทรกระหว่างสายพอลิเมอร์ของ PVC ทำให้สายเลื่อนผ่านกันได้ง่ายขึ้น จึงนิ่ม งอได้ และเปราะน้อยลง',
    wrongText: 'ลองมองหาสารเติมแต่งที่ช่วยให้พลาสติกแข็งนิ่มลง งอได้ง่ายขึ้น และเปราะน้อยลง',
  },
  {
    concept: 'การเชื่อมขวาง',
    customerImage: 'assets/customers/customer-2.png',
    dialogue: '“ยางรถเข็นของฉันเสียทรงทั้งตอนร้อนและตอนอากาศเย็น ช่วยให้มันเด้งและทนขึ้นที!”',
    answer: ['natural-rubber', 'vulcanization', 'elastic'],
    correctTitle: 'ยางเด้งดึ๋งและคงรูป!',
    correctText: 'วัลคาไนเซชันใช้กำมะถัน (S) และความร้อนสร้างสะพานเชื่อมระหว่างสายยางธรรมชาติ จึงเด้ง คงรูป ทนร้อน และไม่เปราะในความเย็น',
    wrongText: 'ลองนึกถึงกระบวนการที่ใช้กำมะถันและความร้อน เพื่อสร้างสะพานเชื่อมระหว่างสายยาง',
  },
  {
    concept: 'โคพอลิเมอไรเซชัน',
    customerImage: 'assets/customers/customer-3.png',
    dialogue: '“ฉันอยากได้กันกระแทกสำหรับส่งของ ที่ทั้งเหนียวและยืดหยุ่นกว่าพลาสติกชนิดเดียว”',
    answer: ['monomers', 'copolymerization', 'tough-flexible'],
    correctTitle: 'วัสดุผสมพลังคู่สำเร็จ!',
    correctText: 'โคพอลิเมอไรเซชันนำมอนอเมอร์ต่างชนิดมาสร้างสายพอลิเมอร์ร่วมกัน จึงออกแบบให้รวมความเหนียวและความยืดหยุ่นได้',
    wrongText: 'ลองเลือกวิธีที่นำหน่วยตั้งต้นต่างชนิดมาสร้างวัสดุร่วมกัน เพื่อรวมข้อดีของแต่ละชนิด',
  },
  {
    concept: 'สารเติมแต่ง',
    customerImage: 'assets/customers/customer-4.png',
    dialogue: '“เก้าอี้พลาสติกในสวนของฉันซีดและแตกง่ายหลังโดนแดดนาน ๆ ช่วยให้มันทนกลางแจ้งที!”',
    answer: ['pvc', 'uv-stabilizer', 'weatherproof'],
    correctTitle: 'พร้อมตากแดดแล้ว!',
    correctText: 'สารคงสภาพรังสี UV ช่วยชะลอการเสื่อมของสายพอลิเมอร์จากแสงแดดและสภาพอากาศ จึงทำให้วัสดุใช้งานกลางแจ้งได้นานขึ้น',
    wrongText: 'ลองมองหาสารเติมแต่งที่ช่วยปกป้องสายพอลิเมอร์จากพลังงานของแสงแดด',
  },
  {
    concept: 'สารเติมแต่ง',
    customerImage: 'assets/customers/customer-5.png',
    dialogue: '“กล่องไฟของฉันต้องปลอดภัยขึ้น ช่วยทำให้พลาสติกติดไฟได้ยากกว่าเดิมหน่อย!”',
    answer: ['pp', 'flame-retardant', 'fire-safe'],
    correctTitle: 'กล่องไฟปลอดภัยขึ้น!',
    correctText: 'สารหน่วงไฟช่วยลดการลุกติดไฟของพอลิเมอร์ จึงเพิ่มความปลอดภัยให้ชิ้นส่วนพลาสติกที่ใช้งานใกล้แหล่งไฟฟ้า',
    wrongText: 'ลองหาสารเติมแต่งที่ออกแบบมาเพื่อลดการลุกไหม้และช่วยเพิ่มความปลอดภัยจากไฟ',
  },
];

const TOTAL_LEVELS = levels.length;

const ingredients = [
  { id: 'pvc', group: 'พอลิเมอร์ตั้งต้น', icon: '🧪', name: 'PVC', hint: 'พลาสติกที่ปรับให้นิ่มได้' },
  { id: 'pp', group: 'พอลิเมอร์ตั้งต้น', icon: '🧫', name: 'PP', hint: 'พลาสติกน้ำหนักเบา ใช้งานได้หลากหลาย' },
  { id: 'natural-rubber', group: 'พอลิเมอร์ตั้งต้น', icon: '🟤', name: 'ยางธรรมชาติ', hint: 'ยางยืดจากน้ำยางพืช' },
  { id: 'monomers', group: 'พอลิเมอร์ตั้งต้น', icon: '🧬', name: 'มอนอเมอร์ต่างชนิด', hint: 'หน่วยเล็กคนละแบบสำหรับผสม' },
  { id: 'plasticizer', group: 'วิธีปรับ/สารเติมแต่ง', icon: '🧴', name: 'พลาสติไซเซอร์', hint: 'ทำให้พลาสติกนิ่มและงอได้' },
  { id: 'vulcanization', group: 'วิธีปรับ/สารเติมแต่ง', icon: '🔗', name: 'วัลคาไนเซชัน', hint: 'กำมะถัน + ความร้อน เชื่อมสายยาง' },
  { id: 'copolymerization', group: 'วิธีปรับ/สารเติมแต่ง', icon: '🧩', name: 'โคพอลิเมอไรเซชัน', hint: 'รวมข้อดีของมอนอเมอร์หลายชนิด' },
  { id: 'uv-stabilizer', group: 'วิธีปรับ/สารเติมแต่ง', icon: '☀️', name: 'สารคงสภาพรังสี UV', hint: 'ชะลอการเสื่อมจากแสงแดด' },
  { id: 'pigment', group: 'วิธีปรับ/สารเติมแต่ง', icon: '🎨', name: 'เม็ดสี', hint: 'เพิ่มสีสันให้วัสดุ' },
  { id: 'flame-retardant', group: 'วิธีปรับ/สารเติมแต่ง', icon: '🔥', name: 'สารหน่วงไฟ', hint: 'ช่วยให้ติดไฟยากขึ้น' },
  { id: 'flexible', group: 'สมบัติที่ต้องการ', icon: '〰️', name: 'ยืดหยุ่น ไม่เปราะ', hint: 'นิ่ม งอและบิดได้ดี' },
  { id: 'elastic', group: 'สมบัติที่ต้องการ', icon: '🏀', name: 'คงรูปและเด้ง', hint: 'ยืดแล้วกลับรูปเดิม ทนร้อน' },
  { id: 'tough-flexible', group: 'สมบัติที่ต้องการ', icon: '🛡️', name: 'เหนียวและยืดหยุ่น', hint: 'รับแรงกระแทกได้ดี' },
  { id: 'weatherproof', group: 'สมบัติที่ต้องการ', icon: '🌦️', name: 'ทนแดดและอากาศ', hint: 'เสื่อมช้าลงกลางแจ้ง' },
  { id: 'colored', group: 'สมบัติที่ต้องการ', icon: '🌈', name: 'มีสีสัน', hint: 'สวยงามและแยกแยะง่าย' },
  { id: 'fire-safe', group: 'สมบัติที่ต้องการ', icon: '🧯', name: 'ติดไฟยากขึ้น', hint: 'เพิ่มความปลอดภัยจากไฟ' },
];

const potionPalettes = [
  ['#57dff7', '#60e9c4', '#64b5ff'],
  ['#ffd166', '#ff9f43', '#f46d43'],
  ['#d68bff', '#ff83c5', '#8b82ff'],
  ['#57dff7', '#60e9c4', '#9bf06f'],
  ['#ff9f43', '#ff6b6b', '#ffd166'],
];

const slotLabels = ['พอลิเมอร์ตั้งต้น', 'วิธีปรับ / สารเติมแต่ง', 'สมบัติที่ต้องการ'];
const $ = (selector) => document.querySelector(selector);
let slide = 0, levelIndex = 0, selected = [null, null, null], startedAt = null, penaltySeconds = 0, timerId = null, gameStarted = false, pausedElapsed = 0, isBrewing = false;

function formatTime(seconds) { return `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`; }
function elapsed() { return startedAt ? Math.floor((Date.now() - startedAt) / 1000) + penaltySeconds : 0; }
function updateTimer() { $('#timer').textContent = formatTime(elapsed()); }
function updatePenalty() { $('#penalty').textContent = penaltySeconds; }
function startTimer() { startedAt = Date.now(); clearInterval(timerId); timerId = setInterval(updateTimer, 250); updateTimer(); }
function pauseTimer() { const baseSeconds = Math.max(0, elapsed() - penaltySeconds); clearInterval(timerId); return baseSeconds; }
function resumeTimer(baseSeconds) { startedAt = Date.now() - baseSeconds * 1000; clearInterval(timerId); timerId = setInterval(updateTimer, 250); updateTimer(); }
function ingredientById(id) { return ingredients.find((item) => item.id === id); }
function choosePotionColor() {
  const colors = potionPalettes[levelIndex] || potionPalettes[0];
  const color = colors[Math.floor(Math.random() * colors.length)];
  $('.cauldron-wrap').style.setProperty('--potion-color', color);
}

function renderShelves() {
  const groups = [...new Set(ingredients.map((item) => item.group))];
  $('#shelves').innerHTML = groups.map((group, index) => `<div class="shelf-group"><h3 class="shelf-title">${['🧫', '✨', '🎯'][index]} ${group}</h3><div class="ingredient-grid">${ingredients.filter((item) => item.group === group).map((item) => `<button class="ingredient" type="button" data-id="${item.id}" title="${item.hint}" aria-label="${item.name}: ${item.hint}"><span class="ingredient-icon">${item.icon}</span><span class="ingredient-name">${item.name}</span><span class="ingredient-hint">${item.hint}</span></button>`).join('')}</div></div>`).join('');
  document.querySelectorAll('.ingredient').forEach((button) => {
    button.addEventListener('click', () => chooseIngredient(button.dataset.id));
  });
}

function renderSlots() {
  $('#equationSlots').innerHTML = selected.map((id, index) => {
    const item = id && ingredientById(id);
    return `<div class="slot" data-slot="${index}" aria-label="ช่องที่ ${index + 1}: ${slotLabels[index]}"><span class="slot-number">${index + 1}</span>${item ? `<span class="filled"><span>${item.icon}</span>${item.name}</span><button class="slot-remove" data-remove="${index}" aria-label="นำ ${item.name} ออก" type="button">×</button>` : `<span class="slot-label">${slotLabels[index]}</span>`}</div>`;
  }).join('');
  document.querySelectorAll('.slot').forEach((slot) => {
    slot.addEventListener('click', (event) => { if (!isBrewing && event.target.dataset.remove !== undefined) { selected[Number(event.target.dataset.remove)] = null; renderSlots(); } });
  });
}

function chooseIngredient(id) { if (isBrewing) return; const item = ingredientById(id); const slot = ['พอลิเมอร์ตั้งต้น', 'วิธีปรับ/สารเติมแต่ง', 'สมบัติที่ต้องการ'].indexOf(item.group); placeIngredient(id, slot); }
function placeIngredient(id, slot) { selected[slot] = id; renderSlots(); $('#selectionHelp').textContent = `ใส่ “${ingredientById(id).name}” ลงช่อง ${slotLabels[slot]} ให้แล้ว`; }

function renderLevel() {
  const level = levels[levelIndex];
  $('#levelNumber').textContent = levelIndex + 1; $('#conceptBadge').textContent = level.concept; $('#customerDialogue').textContent = level.dialogue; $('#customerAvatar').src = level.customerImage;
  $('#levelProgress').textContent = `ความคืบหน้า ${levelIndex + 1} / ${TOTAL_LEVELS}`; $('#progressBar').style.width = `${((levelIndex + 1) / TOTAL_LEVELS) * 100}%`;
  selected = [null, null, null]; renderShelves(); renderSlots(); $('#selectionHelp').textContent = 'แตะวัตถุดิบจากชั้นเพื่อใส่ลงช่องที่ถูกต้องทันที';
}

function openModal({ icon, kicker, title, text, action, onAction }) {
  $('#modalIcon').textContent = icon; $('#modalKicker').textContent = kicker; $('#modalTitle').textContent = title; $('#modalText').textContent = text; $('#modalAction').textContent = action;
  $('#feedbackModal').classList.remove('hidden'); $('#modalAction').onclick = () => { $('#feedbackModal').classList.add('hidden'); onAction(); };
}
function submitEquation() {
  if (isBrewing) return;
  if (selected.some((item) => !item)) { openModal({ icon: '🪄', kicker: 'สูตรยังไม่ครบ', title: 'เติมวัตถุดิบอีกนิด', text: 'สมการของนักเล่นแร่แปรธาตุต้องมีครบ 3 ส่วน: พอลิเมอร์ตั้งต้น วิธีปรับ และสมบัติที่ต้องการ', action: 'กลับไปเติมสูตร', onAction: () => {} }); return; }
  isBrewing = true;
  $('#submitEquation').disabled = true;
  $('#submitEquation').textContent = 'แมวพ่อมดกำลังคนยา…';
  $('#selectionHelp').textContent = 'ส่วนผสมกำลังรวมพลังในหม้อปรุงยา…';
  choosePotionColor();
  $('#alchemyPanel').classList.add('brewing-scene');
  $('.cauldron-wrap').classList.add('brewing');
  const brewedSelection = [...selected];
  $('#brewIngredients').innerHTML = brewedSelection.map((id) => { const item = ingredientById(id); return `<span class="brew-chip">${item.icon} ${item.name}</span>`; }).join('');
  window.setTimeout(() => resolveBrew(brewedSelection), 4900);
}

function resolveBrew(brewedSelection) {
  isBrewing = false;
  $('#alchemyPanel').classList.remove('brewing-scene');
  $('.cauldron-wrap').classList.remove('brewing');
  $('#brewIngredients').innerHTML = '';
  $('#submitEquation').disabled = false;
  $('#submitEquation').textContent = 'ร่ายสูตรแปรธาตุ ✨';
  const level = levels[levelIndex];
  const pausedBaseSeconds = pauseTimer();
  if (brewedSelection.every((item, index) => item === level.answer[index])) {
    openModal({ icon: '✨', kicker: 'ผสมสำเร็จ', title: level.correctTitle, text: level.correctText, action: levelIndex === levels.length - 1 ? 'ดูผลการเรียนรู้' : 'รับลูกค้าคนถัดไป →', onAction: () => { levelIndex += 1; if (levelIndex >= levels.length) finishGame(); else { renderLevel(); resumeTimer(pausedBaseSeconds); } } });
  } else {
    openModal({
      icon: '🧪',
      kicker: 'คำใบ้จากผู้ช่วยแปรธาตุ',
      title: 'เกือบถูกแล้ว ลองสังเกตอีกนิด!',
      text: level.wrongText,
      action: 'เข้าใจแล้ว ลองอีกครั้ง!',
      onAction: () => {
        penaltySeconds += 5;
        updatePenalty();
        resumeTimer(pausedBaseSeconds);
        selected = [null, null, null]; renderSlots(); renderShelves(); $('#selectionHelp').textContent = 'เพิ่มเวลาโทษ +5 วินาทีแล้ว ลองใหม่ได้เลย นักเล่นแร่แปรธาตุ!';
      },
    });
  }
}
function finishGame() {
  clearInterval(timerId); const total = elapsed(); const saved = Number(localStorage.getItem('polymerAlchemistBest') || 0); const best = !saved || total < saved ? total : saved; if (!saved || total < saved) localStorage.setItem('polymerAlchemistBest', String(total));
  openModal({ icon: '🏆', kicker: 'ภารกิจสำเร็จ', title: `ยินดีด้วย! คุณผ่านครบ ${TOTAL_LEVELS} ด่าน`, text: `คุณแก้ปัญหาได้ครบ ${TOTAL_LEVELS} ด่านในเวลา ${formatTime(total)}${penaltySeconds ? ` (รวมโทษ ${penaltySeconds} วินาที)` : ''} • เวลาที่ดีที่สุดของคุณ: ${formatTime(best)}\n\nคุณเรียนรู้การใช้สารเติมแต่ง วัลคาไนเซชัน และโคพอลิเมอไรเซชันเพื่อปรับสมบัติของพอลิเมอร์แล้ว`, action: 'เล่นใหม่', onAction: resetGame });
}
function resetGame() { levelIndex = 0; penaltySeconds = 0; pausedElapsed = 0; updatePenalty(); renderLevel(); startTimer(); }
function renderSlides() { $('#slides').style.transform = `translateX(-${slide * 100}%)`; $('#slideCount').textContent = `${slide + 1} / 3 • 30 วินาที`; $('#prevSlide').style.visibility = slide === 0 ? 'hidden' : 'visible'; $('#nextSlide').textContent = slide === 2 ? 'เริ่มภารกิจ ✨' : 'ถัดไป →'; $('#dots').innerHTML = [0, 1, 2].map((index) => `<button class="h-2.5 w-2.5 rounded-full ${index === slide ? 'bg-gold' : 'bg-white/25'}" data-slide="${index}" aria-label="ไปหน้าที่ ${index + 1}"></button>`).join(''); document.querySelectorAll('[data-slide]').forEach((dot) => dot.onclick = () => { slide = Number(dot.dataset.slide); renderSlides(); }); }
function startGame() {
  $('#learnScreen').classList.add('hidden'); $('#gameScreen').classList.remove('hidden');
  if (!gameStarted) { renderLevel(); startTimer(); gameStarted = true; return; }
  startedAt = Date.now() - Math.max(0, pausedElapsed - penaltySeconds) * 1000;
  clearInterval(timerId); timerId = setInterval(updateTimer, 250); updateTimer();
}

function showMainMenu() { $('#learnScreen').classList.add('hidden'); $('#gameScreen').classList.add('hidden'); $('#mainMenu').classList.remove('hidden'); }
function showQuickLesson() { $('#mainMenu').classList.add('hidden'); $('#learnScreen').classList.remove('hidden'); slide = 0; renderSlides(); }

$('#menuStart').addEventListener('click', showQuickLesson);
$('#backToMenu').addEventListener('click', showMainMenu);
$('#openStudyGuide').addEventListener('click', () => $('#studyGuideModal').classList.remove('hidden'));
$('#closeStudyGuide').addEventListener('click', () => $('#studyGuideModal').classList.add('hidden'));
$('#nextSlide').addEventListener('click', () => { if (slide === 2) startGame(); else { slide += 1; renderSlides(); } });
$('#prevSlide').addEventListener('click', () => { slide = Math.max(0, slide - 1); renderSlides(); });
$('#submitEquation').addEventListener('click', submitEquation);
$('#clearSlots').addEventListener('click', () => { if (isBrewing) return; selected = [null, null, null]; renderSlots(); renderShelves(); $('#selectionHelp').textContent = 'ล้างสูตรแล้ว แตะวัตถุดิบเพื่อใส่ใหม่ได้เลย'; });
$('#learnAgain').addEventListener('click', () => { pausedElapsed = elapsed(); clearInterval(timerId); $('#gameScreen').classList.add('hidden'); $('#learnScreen').classList.remove('hidden'); slide = 0; renderSlides(); });
renderSlides();
