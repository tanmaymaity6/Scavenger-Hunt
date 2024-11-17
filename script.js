document.getElementById('box').addEventListener('click', () => {
  document.getElementById('clue1-title').classList.add('hidden');
  document.getElementById('clue1-description').classList.add('hidden');
  document.getElementById('clue2-title').classList.remove('hidden');
  document.getElementById('coffee').classList.remove('hidden');
  document.getElementById('clue2-description').classList.remove('hidden');
  document.getElementById('submit-keyword').classList.remove('hidden');
});

document.getElementById('submit-keyword').addEventListener('click', () => {
  const keyword = document.getElementById('keyword').value.toLowerCase();
  if (keyword === 'badger') {
    document.getElementById('clue2-title').classList.add('hidden');
    document.getElementById('coffee').classList.add('hidden');
    document.getElementById('clue2-description').classList.add('hidden');
    document.getElementById('keyword').classList.add('hidden');
    document.getElementById('submit-keyword').classList.add('hidden');

    document.getElementById('clue3-title').classList.remove('hidden');
    document.getElementById('cliffs').classList.remove('hidden');
    document.getElementById('clue3-description').classList.remove('hidden');
    document.getElementById('final-answer').classList.remove('hidden');
    document.getElementById('submit-final').classList.remove('hidden');
  } else {
    alert('Incorrect keyword. Try again!');
  }
});

document.getElementById('submit-final').addEventListener('click', () => {
  const answer = document.getElementById('final-answer').value.toLowerCase();
  if (answer === 'bdijfwf') {
    // "ACHIEVE" shifted forward by one
    document.getElementById('clue3-title').classList.add('hidden');
    document.getElementById('cliffs').classList.add('hidden');
    document.getElementById('clue3-description').classList.add('hidden');
    document.getElementById('final-answer').classList.add('hidden');
    document.getElementById('submit-final').classList.add('hidden');

    document.getElementById('congrats-title').classList.remove('hidden');
    document.getElementById('congrats').classList.remove('hidden');
    document.getElementById('congrats-description').classList.remove('hidden');
  } else {
    alert('Incorrect answer. Try again!');
  }
});
