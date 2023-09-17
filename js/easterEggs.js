const message = document.getElementById('message');
var checkInput = [];
/* var themes = ['tomato--', 'hotpink--', 'springgreen--', 'cyan--', 'lightcyan--', 'goldenrod--', 'gold--', 'salmon--', 'lightgrey--', 'grey--', 'lime--', 'turquoise--', 'aliceblue--']; */

var others = ['useless-', 'fm-', 'playlist-', 'noise-', 'coinflip-', 'dice-', 'dm-', 'vcs-', 'tw-'];

var playlist = 'shida shahabi: futo;\nesbjorn svensson trio: seven days of falling;\nrival consoles: howl;\nplacebo: forever chemicals;\nporcupine tree: the sound of muzak;\nsynthesis: oj devojche;\npeter gregson: sequence (four);\nnils petter molvaer: access / song of sand I;\nthe hu: yuve yuve yu;\nphilip glass: glassworks opening (vikingur olafsson);\njulia kent: gardermoen;\nlaurie anderson: big science - arca remix;';

message.addEventListener('input', function handleChange(event) {
  checkInput.splice(0, 1, event.target.value);
  if (checkInput[0].toUpperCase() === 'help-'.toUpperCase()) {
    document.getElementsByName('message')[0].value = '';
    document.getElementsByName('message')[0].placeholder = others;
  }
  /* else if (checkInput[0] === themes[0]) {
    document.getElementsByName('message')[0].value = '';
    document.getElementsByName('message')[0].placeholder = 'mmh ok sure';
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[1]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = 'pretty';
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[2]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ''
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[3]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ''
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[4]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ''
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[5]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ''
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[6]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = 'bling bling'
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[7]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = 'really?';
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[8]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ''
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[9]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ''
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[10]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = 'a bit flashy init?'
      changeTheme(checkInput[0].slice(0, -2));
    }
    else if (checkInput[0] === themes[11]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ''
      changeTheme(checkInput[0].slice(0, -2));
    } */
    else if (checkInput[0].toUpperCase() === others[0].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      //document.getElementsByName('message')[0].placeholder = 'had fun?';
      window.open("https://theuselessweb.com/");
    }
    else if (checkInput[0].toUpperCase() === others[1].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      window.open("easter_eggs/fm_synth/index.html");
    }
    else if (checkInput[0].toUpperCase() === others[2].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = playlist;
    }
    else if (checkInput[0].toUpperCase() === others[3].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = '"noise is unwanted sound considered unpleasant, loud or disruptive to hearing."\n\n_wikipedia';
    }
    /*else if (checkInput[0] === themes[12]) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = 'don\'t ask me, I didn\'t make up the names';
      changeTheme(checkInput[0].slice(0, -2));
    }*/
    else if (checkInput[0].toUpperCase() === others[4].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = coinflip();
    }
    else if (checkInput[0].toUpperCase() === others[5].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      document.getElementsByName('message')[0].placeholder = ' '+diceroll();
    }
    else if (checkInput[0].toUpperCase() === others[6].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      window.open("easter_eggs/decision-maker/index.html");
    }
    else if (checkInput[0].toUpperCase() === others[7].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      window.open("easter_eggs/vcs_cheatsheet/index.html");
    }
    else if (checkInput[0].toUpperCase() === others[8].toUpperCase()) {
      document.getElementsByName('message')[0].value = '';
      window.open("typewriter/index.html");
    }
  })

function coinflip() {
  var rdm = Math.floor(Math.random()*2);
  if (rdm == 0) {
    return 'heads';
  } else {
    return 'tail';
  }
}

function diceroll() {
  var rdm1 = (Math.floor(Math.random()*6) + 1);
  var rdm2 = (Math.floor(Math.random()*6) + 1);
  return rdm1+' '+rdm2;
}
