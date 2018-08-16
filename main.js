let humanScore = 0;
let computerScore = 0;

const $status = $('#status');
const $humanScore = $('#humanScore');
const $computerScore = $('#computerScore');

$('#slug').on('click', playSlug);
$('#frog').on('click', playFrog);
$('#snake').on('click', playSnake);

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
    return $status.append('<p>You tied. :|</p>');
  }

  if (humanPlay == 'slug') {
    if (computerPlay == 'frog') {
      $status.append('<p>You lose.</p>');
      computerScore++;
    } else if (computerPlay == 'snake') {
      $status.append('<p>You win!</p>');
      humanScore++;
    }
  } else if (humanPlay == 'frog') {
    if (computerPlay == 'slug') {
      $status.append('<p>You win!</p>');
      humanScore++;
    } else if (computerPlay == 'snake') {
      $status.append('<p>You lose.</p>');
      computerScore++;
    }
  } else if (humanPlay == 'snake') {
    if (computerPlay == 'slug') {
      $status.append('<p>You lose.</p>');
      computerScore++;
    } else if (computerPlay == 'frog') {
      $status.append('<p>You win!</p>');
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
