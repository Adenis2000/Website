
var albania = document.getElementById('albania');
var kosovo = document.getElementById('kosovo');
var macedonia = document.getElementById('macedonia');
var montenegro = document.getElementById('montenegro');
var serbia = document.getElementById('serbia');
var greece = document.getElementById('greece');
var bulgaria = document.getElementById('bulgaria');
var romania = document.getElementById('romania');
var croatia = document.getElementById('croatia');
var bosniaAndHerzegovina = document.getElementById('bosniaAndHerzegovina');
var hungary = document.getElementById('hungary');
var slovakia = document.getElementById('slovakia');
var austria = document.getElementById('austria');
var slovenia = document.getElementById('slovenia');
var italy = document.getElementById('italy');
var france = document.getElementById('france');
var switzerland = document.getElementById('switzerland');
var germany = document.getElementById('germany');
var czechRepublic = document.getElementById('czechRepublic');
var netherlands = document.getElementById('netherlands');
var belgium = document.getElementById('belgium');
var luxemburg = document.getElementById('luxemburg');
var spain = document.getElementById('spain');
var portugal = document.getElementById('portugal');
var poland = document.getElementById('poland');
var ukraine = document.getElementById('ukraine');
var belarus = document.getElementById('belarus');
var lithuania = document.getElementById('lithuania');
var latvia = document.getElementById('latvia');
var estonia = document.getElementById('estonia');
var norway = document.getElementById('norway');
var finland = document.getElementById('finland');
var sweden = document.getElementById('sweden');
var denmark = document.getElementById('denmark');
var england = document.getElementById('england');
var ireland = document.getElementById('ireland');
var iceland = document.getElementById('iceland');
var moldova = document.getElementById('moldova');
var russia = document.getElementById('russia');
var turkey = document.getElementById('turkey');
var button = document.getElementById('btn');
var image = document.getElementById('image');

let score = 0;
let randomCountry = 0;
let i = 0;

const countries = ['albania', 'macedonia', 'serbia', 'bulgaria', 'croatia',
 'hungary', 'austria', 'italy', 'switzerland', 'czechRepublic', 'belgium',
 'spain', 'poland', 'belarus', 'latvia', 'norway', 'sweden', 'england',
 'iceland', 'russia', 'kosovo', 'montenegro', 'greece', 'romania',
 'bosniaAndHerzegovina', 'slovakia', 'slovenia', 'france', 'germany', 'netherlands',
 'luxemburg', 'portugal', 'ukraine', 'lithuania', 'estonia', 'finland', 'denmark',
 'ireland', 'moldova', 'turkey'];

const flags = ['img/albania.png', 'img/macedonia.png', 'img/serbia.png',
 'img/bulgaria.png', 'img/croatia.png', 'img/hungary.png', 'img/austria.png',
 'img/italy.jpeg', 'img/switzerland.png', 'img/czechRepublic.png', 'img/belgium.png',
 'img/spain.png', 'img/poland.png', 'img/belarus.png', 'img/latvia.png', 'img/norway.png',
 'img/sweden.png', 'img/england.png', 'img/iceland.png', 'img/russia.png', 'img/kosovo.png',
 'img/montenegro.png', 'img/greece.png', 'img/romania.png', 'img/bosnia.png', 'img/slovakia.png',
 'img/slovenia.png', 'img/france.png', 'img/germany.png', 'img/netherlands.png', 'img/luxemburg.png',
 'img/portugal.png', 'img/ukraine.png', 'img/lithuania.png', 'img/estonia.jpeg', 'img/finland.png',
 'img/denmark.png', 'img/ireland.png', 'img/moldova.png', 'img/turkey.png', 'img/last.png'];


function correct(choice) {
  button.innerHTML = countries[randomCountry];
  image.src = flags[i];
  score++;
  let cont = document.getElementById(choice);
  cont.style.backgroundColor = 'green';
  document.getElementById('result').innerHTML = "CORRECT!";
  document.getElementById('response').style.backgroundColor = 'green';
  if(randomCountry >= countries.length) {
    button.innerHTML = "You got " + score + "/" + countries.length;
    document.getElementById('demo').innerHTML = "Game Over!";
  } else {
    randomCountry++;
    i++;
  }
}

function wrong() {
  button.innerHTML = countries[randomCountry];
  image.src = flags[i];
  document.getElementById('result').innerHTML = "WRONG!";
  document.getElementById('response').style.backgroundColor = 'rgb(178, 19, 19)';
  if(randomCountry >= countries.length) {
    button.innerHTML = "You got " + score + "/" + countries.length;
    document.getElementById('demo').innerHTML = "Game Over!";
  } else {
    randomCountry++;
    i++;
  }
}

function game(choice) {
  if(button.innerHTML == choice){
    correct(choice);
  } else {
    wrong();
  }
}

function main() {
  randomCountry = 0;
  button.addEventListener('click', function() {
    button.innerHTML = countries[randomCountry];
    image.src = flags[i];
    randomCountry++;
    i++;
    document.getElementById('demo').innerHTML = 'Click on the correct area!';
  })

  albania.addEventListener('click', function() {
    game('albania');
  })
  kosovo.addEventListener('click', function() {
    game('kosovo');
  })
  macedonia.addEventListener('click', function() {
    game('macedonia');
  })
  montenegro.addEventListener('click', function() {
    game('montenegro');
  })
  serbia.addEventListener('click', function() {
    game('serbia');
  })
  greece.addEventListener('click', function() {
    game('greece');
  })
  bulgaria.addEventListener('click', function() {
    game('bulgaria');
  })
  romania.addEventListener('click', function() {
    game('romania');
  })
  croatia.addEventListener('click', function() {
    game('croatia');
  })
  bosniaAndHerzegovina.addEventListener('click', function() {
    game('bosniaAndHerzegovina');
  })
  hungary.addEventListener('click', function() {
    game('hungary');
  })
  slovakia.addEventListener('click', function() {
    game('slovakia');
  })
  austria.addEventListener('click', function() {
    game('austria');
  })
  slovenia.addEventListener('click', function() {
    game('slovenia');
  })
  italy.addEventListener('click', function() {
    game('italy');
  })
  france.addEventListener('click', function() {
    game('france');
  })
  switzerland.addEventListener('click', function() {
    game('switzerland');
  })
  germany.addEventListener('click', function() {
    game('germany');
  })
  czechRepublic.addEventListener('click', function() {
    game('czechRepublic');
  })
  netherlands.addEventListener('click', function() {
    game('netherlands');
  })
  belgium.addEventListener('click', function() {
    game('belgium');
  })
  luxemburg.addEventListener('click', function() {
    game('luxemburg');
  })
  spain.addEventListener('click', function() {
    game('spain');
  })
  portugal.addEventListener('click', function() {
    game('portugal');
  })
  poland.addEventListener('click', function() {
    game('poland');
  })
  ukraine.addEventListener('click', function() {
    game('ukraine');
  })
  belarus.addEventListener('click', function() {
    game('belarus');
  })
  lithuania.addEventListener('click', function() {
    game('lithuania');
  })
  latvia.addEventListener('click', function() {
    game('latvia');
  })
  estonia.addEventListener('click', function() {
    game('estonia');
  })
  norway.addEventListener('click', function() {
    game('norway');
  })
  finland.addEventListener('click', function() {
    game('finland');
  })
  sweden.addEventListener('click', function() {
    game('sweden');
  })
  denmark.addEventListener('click', function() {
    game('denmark');
  })
  england.addEventListener('click', function() {
    game('england');
  })
  ireland.addEventListener('click', function() {
    game('ireland');
  })
  iceland.addEventListener('click', function() {
    game('iceland');
  })
  moldova.addEventListener('click', function() {
    game('moldova');
  })
  russia.addEventListener('click', function() {
    game('russia');
  })
  turkey.addEventListener('click', function() {
    game('turkey');
  })

}
main();
