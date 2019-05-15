/*
OBJECTS
*/

let netflix = {
  id: 9,
  name: 'super store',
  season1:  {
    seasonInfo: {
      episodeInfo:  [
        {episode: 1, episodeName: 'pilot'},
        {episode: 2, episodeName: 'magazine profile'},
        {episode: 3, episodeName: 'shots & salsa'},
        {episode: 4, episodeName: 'mannequin'},
        {episode: 5, episodeName: 'shoplifter'},
        {episode: 6, episodeName: 'secret shopper'},
        {episode: 7, episodeName: 'color wars'},
        {episode: 8, episodeName: 'wedding day sale'},
        {episode: 9, episodeName: 'all-nighter'},
        {episode: 10, episodeName: 'demotion'},
        {episode: 11, episodeName: 'labor'}
      ]
    }
  },
  season2: {},
  season3: {}
}

console.log(netflix);
console.log(netflix.season1.seasonInfo.episodeInfo[3].episodeName);

//pick an episode to log in the terminal
//using dot notation, walk through the netflix object and print off both the episode number
//and the episode name

console.log(netflix.season1.seasonInfo.episodeInfo[2].episode,netflix.season1.seasonInfo.episodeInfo[2].episodeName);

//JSON - javascript object notation

var json = {
  "workbench.colorTheme": "One Dark+ (Sublime)",
  "window.zoomLevel": 3,
  "files.exclude": {
    "**/.git": true,
    "**/.DS_Store": true,
    "**/*.js": {
      "when": "$(basename).ts"
    },
    "**/*.js.map": {
      "when": "$(basename)"
    }
  },
  "editor.fontFamily": "Monaco, 'Courier New', monospace",
  "editor.detectIndentation": false,
  "editor.letterSpacing": 0,
  "editor.tabSize": 2,
  "files.autoSave": "off",
  "editor.wordWrap": "on",
  "extensions.ignoreRecommendations": true,
  "[html]": {},
  "files.associations": {
    "*.html": "html",
    "*.js": "javascriptreact"
  },
  "html.format.indentInnerHtml": true,
  "editor.fontSize": 11,
  "liveServer.settings.donotShowInfoMsg": true,
  "liveServer.settings.port": 3500,
  "[javascriptreact]": {}
}

let spaceJam = {
  toonSquad: {
    human: 'Michael Jordan',
    rabbit1: 'Bugs Bunny',
    rabbit2: 'Lola Bunny',
    duck: 'Daffy Duck',
    tDevil: 'Tasmanian Devil',
    bird: 'Tweety',
    cat: 'Sylvester',
    pig: 'Porky Pig'
  },
  monstars: {
    0: 'Bupkus',
    1: 'Bang',
    2: 'Nawt',
    3: 'Pound',
    4: 'Blanko'
  },
  nbaPlayers: {
    phoenixSuns: 'Charles Barkley',
    newJerseyNets: 'Shawn Bradley',
    newYorkNicks: 'Patrick Ewing',
    charlotteHornets1: 'Larry Johnson',
    charlotteHornets2: 'Muggsy Bogues'
  }
}

console.log(Object.keys(spaceJam)); //Object.keys returns an array consisting of the keys in our object
console.log(Object.keys(spaceJam.toonSquad));
console.log(Object.keys(spaceJam.toonSquad).toString());

console.log(Object.values(spaceJam));
console.log(Object.values(spaceJam.toonSquad));

let garden = {
  vegetable: 'zucchini',
  flower: 'sun flower',
  fruit: 'grape',
  water: true,
  sun: true,
  size: 10
}

console.log(garden.vegetable);

let inc = 'vegetable';

console.log(garden[inc]);

let baking = {};
baking['zucchini'] = 'better make some bread';
baking.bestKeyEver = 'zucchini';

console.log(baking.zucchini);
console.log(baking.bestKeyEver);
console.log(baking[baking.bestKeyEver]);

let g = 'water';

Object.keys(garden).forEach(key => {
  if (key == g) {
    console.log(garden[key]);
  }
});