/**
 * Map of keys with corresponding keyboard notes
 */
const keyNotesMap = {
  a: 'C3',
  w: 'Db3',
  s: 'D3',
  e: 'Eb3',
  d: 'E3',
  f: 'F3',
  t: 'Gb3',
  g: 'G3',
  y: 'Ab3',
  h: 'A3',
  u: 'Bb3',
  j: 'B3',
  k: 'C4',
  o: 'Db4',
  l: 'D4',
  p: 'Eb4',
  ';': 'E4'
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
  const key = document.getElementById(note + '-key');
  key.classList.add('pressed');
  key.childNodes[1].play();
});

/**
 * Handle keyup events, simulate release of key
 */
document.addEventListener('keyup', e => {
  const note = getNote(e.key.toLowerCase());
  if (!note) {
    return;
  }
  const key = document.getElementById(note + '-key');
  key.classList.remove('pressed');
  key.childNodes[1].pause();
  key.childNodes[1].currentTime = 0;
});