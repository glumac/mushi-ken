var humanScore = 0;
var computerScore = 0;

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
    return (document.getElementById('status').innerHTML +=
      '<p>You tied. :|</p>');
  }

  if (humanPlay == 'slug') {
    if (computerPlay == 'frog') {
      document.getElementById('status').innerHTML += '<p>You lose. :(</p>';
      computerScore++;
    } else if (computerPlay == 'snake') {
      document.getElementById('status').innerHTML += '<p>You win! :)</p>';
      humanScore++;
    }
  } else if (humanPlay == 'frog') {
    if (computerPlay == 'slug') {
      document.getElementById('status').innerHTML += '<p>You win! :)</p>';
      humanScore++;
    } else if (computerPlay == 'snake') {
      document.getElementById('status').innerHTML += '<p>You lose. :(</p>';
      computerScore++;
    }
  } else if (humanPlay == 'snake') {
    if (computerPlay == 'slug') {
      document.getElementById('status').innerHTML += '<p>You lose. :(</p>';
      computerScore++;
    } else if (computerPlay == 'frog') {
      document.getElementById('status').innerHTML += '<p>You win! :)</p>';
      humanScore++;
    }
  }

  document.getElementById('humanScore').innerHTML = humanScore;
  document.getElementById('computerScore').innerHTML = computerScore;
}

function getComputerPlay() {
  var plays = ['slug', 'frog', 'snake'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
