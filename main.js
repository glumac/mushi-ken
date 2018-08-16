let humanScore = 0;
let computerScore = 0;

const statusElem = document.getElementById('status');
const humanScoreElem = document.getElementById('humanScore');
const computerScoreElem = document.getElementById('computerScore');

document.getElementById('slug').onclick = playSlug;
document.getElementById('frog').onclick = playFrog;
document.getElementById('snake').onclick = playSnake;

function playSlug() {
  play('slug');
}
function playFrog() {
  play('frog');
}
function playSnake() {
  play('snake');
}

function play(humanPlay) {
  var computerPlay = getComputerPlay();

  document.getElementById(
    'status',
  ).innerHTML = `<p>You played <strong>${humanPlay}</strong>. The bot played <strong>${computerPlay}</strong>.</p>`;

  if (humanPlay == computerPlay) {
    return (status.innerHTML += '<p>You tied. :|</p>');
  }

  if (humanPlay == 'slug') {
    if (computerPlay == 'frog') {
      statusElem.innerHTML += '<p>You lose. :(</p>';
      computerScore++;
    } else if (computerPlay == 'snake') {
      statusElem.innerHTML += '<p>You win! :)</p>';
      humanScore++;
    }
  } else if (humanPlay == 'frog') {
    if (computerPlay == 'slug') {
      statusElem.innerHTML += '<p>You win! :)</p>';
      humanScore++;
    } else if (computerPlay == 'snake') {
      statusElem.innerHTML += '<p>You lose. :(</p>';
      computerScore++;
    }
  } else if (humanPlay == 'snake') {
    if (computerPlay == 'slug') {
      statusElem.innerHTML += '<p>You lose. :(</p>';
      computerScore++;
    } else if (computerPlay == 'frog') {
      statusElem.innerHTML += '<p>You win! :)</p>';
      humanScore++;
    }
  }

  humanScoreElem.innerHTML = humanScore;
  computerScoreElem.innerHTML = computerScore;
}

function getComputerPlay() {
  const plays = ['slug', 'frog', 'snake'];
  const play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
