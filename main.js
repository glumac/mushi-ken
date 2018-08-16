let humanScore = 0;
// let's make a variable for computer score here

const $status = $('#status');
const $humanScore = $('#humanScore');
// let's save a variable $computerScore to store a reference to the element with an ID of computerScore

$('#slug').on('click', playSlug);
$('#frog').on('click', playFrog);
// Let's attach a click handler to the snake element

function playSlug() {
  play('slug');
}
function playFrog() {
  play('frog');
}
// let's make a function called playSnake to go along with the click handler we just attached to the snake button

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
    // let's write the code for if a user plays snake here!!
  }

  $humanScore.html(humanScore);
  // let's set the computer score element's html equal to the computerScore
}

function getComputerPlay() {
  const plays = ['slug', 'frog', 'snake'];
  const play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}
