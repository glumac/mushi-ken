let humanScore = 0;
let computerScore = 0;

const $status = $('#status');
const $humanScore = $('#humanScore');
const $computerScore = $('#computerScore');

const tieMessage = '<p>You tied. :|</p>';
const loseMessage = '<p>You lose.</p>';
const winMessage = '<p>You win!</p>';

$('#slug').click(playSlug);
$('#frog').click(playFrog);
$('#snake').click(playSnake);

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

  $status.html(
    `<p>You played <strong>${humanPlay}</strong>. The bot played <strong>${computerPlay}</strong>.</p>`,
  );

  if (humanPlay == computerPlay) {
    return $status.append(tieMessage);
  } else if (humanPlay == 'slug') {
    if (computerPlay == 'frog') {
      $status.append(loseMessage);
      computerScore++;
    } else if (computerPlay == 'snake') {
      $status.append(winMessage);
      humanScore++;
    }
  } else if (humanPlay == 'frog') {
    if (computerPlay == 'slug') {
      $status.append(winMessage);
      humanScore++;
    } else if (computerPlay == 'snake') {
      $status.append(loseMessage);
      computerScore++;
    }
  } else if (humanPlay == 'snake') {
    if (computerPlay == 'slug') {
      $status.append('<p>You lose.</p>');
      computerScore++;
    } else if (computerPlay == 'frog') {
      $status.append(winMessage);
      humanScore++;
    }
  }

  $humanScore.html(humanScore);
  $computerScore.html(computerScore);
}

function getComputerPlay() {
  const plays = ['slug', 'frog', 'snake'];
  const play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
