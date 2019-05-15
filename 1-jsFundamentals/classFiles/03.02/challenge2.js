fetch('https://www.balldontlie.io/api/v1/players')
  .then(res => res.json())
  .then(json => {
    showPlayers(json.data);
  });

function showPlayers(players) {
  players.forEach(p => {
    let player = document.createElement('li');
    player.innerText = p.first_name + " - " + p.team.name;
    document.querySelector('ul').appendChild(player);
  });
}