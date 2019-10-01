/***
 * Map containing divs corresponding to the different notes
 */
const pianoKeyDivs = {
  C: document.getElementById('C-key'),
  Db: document.getElementById('Db-key'),
  D: document.getElementById('D-key'),
  Eb: document.getElementById('Eb-key'),
  E: document.getElementById('E-key'),
  F: document.getElementById('F-key'),
  Gb: document.getElementById('Gb-key'),
  G: document.getElementById('G-key'),
  Ab: document.getElementById('Ab-key'),
  A: document.getElementById('A-key'),
  Bb: document.getElementById('Bb-key'),
  B: document.getElementById('B-key')
};

/**
 * Map of keys with corresponding keyboard notes
 */
const keyNotesMap = {
  a: 'C',
  w: 'Db',
  s: 'D',
  e: 'Eb',
  d: 'E',
  f: 'F',
  t: 'Gb',
  g: 'G',
  y: 'Ab',
  h: 'A',
  u: 'Bb',
  j: 'B'
};

/**
 * Get note based on the key in a keyboard
 */
function getNote(key) {
  return keyNotesMap[key];
}

/**
 * Handle keypress events, simulate press of key
 */
document.addEventListener('keypress', e => {
  const note = getNote(e.key.toLowerCase());
  if (!note) {
    return;
  }
  pianoKeyDivs[note].classList.add('pressed');
  pianoKeyDivs[note].childNodes[1].play();
});

/**
 * Handle keyup events, simulate release of key
 */
document.addEventListener('keyup', e => {
  const note = getNote(e.key.toLowerCase());
  if (!note) {
    return;
  }
  pianoKeyDivs[note].classList.remove('pressed');
  pianoKeyDivs[note].childNodes[1].pause();
  pianoKeyDivs[note].childNodes[1].currentTime = 0;
});