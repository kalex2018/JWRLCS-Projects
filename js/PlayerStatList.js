
//WsSubscribers.init(49322, true);    //Register WsSubscribers

//  Event Array Start
const events = [
    /* Assist */{name:"Assist", event_name:"Assist", main_target:"", secondary_target:"", img:'assets/staticons/assist.svg', team:"", secondary_team:""},
    /* Demos */{name:"Demo", event_name:"Demolish", main_target:"", secondary_target:"", img:'assets/staticons/demolition.svg', team:"", secondary_team:""},
    /* Exterm */{name:"Exterminator", event_name:"", main_target:"", secondary_target:"", img:'assets/staticons/extermination.svg', team:"", secondary_team:""},
    /* Hattrick */{name:"Hattrick", event_name:"HatTrick", main_target:"", secondary_target:"", img:'assets/staticons/hat-trick.svg', team:"", secondary_team:""},
    /* Goal */{name:"Goal", event_name:"Goal", main_target:"", secondary_target:"", img:'assets/staticons/goal.svg', team:"", secondary_team:""},
    /* MVP */{name:"MVP", event_name:"MVP", main_target:"", secondary_target:"", img:'assets/staticons/mvp.svg', team:"", secondary_team:""},
    /* Overtime Goal */{name:"OTGoal", event_name:"", main_target:"", secondary_target:"", img:'assets/staticons/overtime-goal.svg', team:"", secondary_team:""},
    /* Playmaker */{name:"Playmaker", event_name:"", main_target:"", secondary_target:"", img:'assets/staticons/playmaker.svg', team:"", secondary_team:""},
    /* Saves */{name:"Save", event_name:"Save", main_target:"", secondary_target:"", img:'assets/staticons/save.svg', team:"", secondary_team:""},
    /* Savior */{name:"Savior", event_name:"", main_target:"", secondary_target:"", img:'assets/staticons/savior.svg', team:"", secondary_team:""},
    /* Shots */{name:"Shot", event_name:"Shot", main_target:"", secondary_target:"", img:'assets/staticons/shot-on-goal.svg', team:"", secondary_team:""}
];
//  End Event Array



//  Blue Team Array Start
const playersBlue = [
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""},
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""},
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""},
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""}
];
//  End Blue Team Array



//  Orange Team Array Start
const playersOrange = [
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""},
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""},
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""},
    {player_id:"", player_name:"", assists:"", boost:"", goals:"", demos:"", saves:"", score:"", team:"", shots:""}
];
//  End Orange Team Array

// Define the team array with name and logo properties
const teams = [
    { 
        name: 'ADRENALINE', 
        abbr: 'ADR', 
        logo: 'assets/logos/ADR.png', 
        vidClose: './assets/videos/Adrenaline/Adrenaline_TeamRotate.webm', 
        vidWin: './assets/videos/Adrenaline/Adrenaline_Victory.webm'
    },  
    { 
        name: 'ALTERN8', 
        abbr: 'ALT', 
        logo: 'assets/logos/ALT.png', 
        vidClose: './assets/videos/Altern8/A8_TeamRotate.webm', 
        vidWin: './assets/videos/Altern8/A8_Victory.webm'
    },
    { 
        name: 'BANANA MANCAKES', 
        abbr: 'BMC', 
        logo: 'assets/logos/BMC.png', 
        vidClose: './assets/videos/Banana_Mancakes/BMC_TeamRotate.webm', 
        vidWin: './assets/videos/Banana_Mancakes/BMC_Victory.webm'
    },
    { 
        name: 'ECLIPSE', 
        abbr: 'ECL', 
        logo: 'assets/logos/ECL.png', 
        vidClose: './assets/videos/Eclispe/Eclipse_TeamRotate.webm', 
        vidWin: './assets/videos/Eclispe/Eclipse_Victory.webm'
    },
    { 
        name: 'GOLDEN ROCKETS', 
        abbr: 'GDR', 
        logo: 'assets/logos/GDR.png', 
        vidClose: './assets/videos/Golden_Rockets/GR_TeamRotate.webm',
        vidWin: './assets/videos/Golden_Rockets/GR_Victory.webm'
    },
    { 
        name: 'GROUPO KABOOM', 
        abbr: 'GKB', 
        logo: 'assets/logos/GKB.png', 
        vidClose: './assets/videos/Groupo_Kaboom/Grupo_TeamRotate.webm',
        vidWin: './assets/videos/Groupo_Kaboom/Grupo_Victory.webm'
    },
    { 
        name: 'HYSTERIA', 
        abbr: 'HYS', 
        logo: 'assets/logos/HYS.png', 
        vidClose: './assets/videos/Hysteria/HYST_Team_Close.webm', 
        vidWin: './assets/videos/Hysteria/HYST_Victory.webm'
    },
    { 
        name: 'KIDS', 
        abbr: 'KDS', 
        logo: 'assets/logos/KDS.png', 
        vidClose: './assets/videos/Kids/Kids_TeamRotate.webm', 
        vidWin: './assets/videos/Kids/Kids_Victory.webm'
    },
    { 
        name: 'LIGHTLESS', 
        abbr: 'LHT', 
        logo: 'assets/logos/LHT.png', 
        vidClose: './assets/videos/Lightless/Lightless_TeamRotate.webm', 
        vidWin: './assets/videos/Lightless/Lightless_Victory.webm'
    },
    { 
        name: 'OBLIVION', 
        abbr: 'OBV', 
        logo: 'assets/logos/OBV.png', 
        vidClose: './assets/videos/Oblivion/OBV_TeamRotate.webm', 
        vidWin: './assets/videos/Oblivion/OBV_Victory.webm'
    },
    { 
        name: 'SOLAR BEARS', 
        abbr: 'SLR', 
        logo: 'assets/logos/SLR.png', 
        vidClose: './assets/videos/Solar_Bears/Solar_TeamRotate.webm',
        vidWin: './assets/videos/Solar_Bears/Solar_Victory.webm'
    },
    { 
        name: 'SUPER SMASH BROS', 
        abbr: 'SSB', 
        logo: 'assets/logos/SSB.png', 
        vidClose: './assets/videos/Super_Smash_Bros/SSB_TeamRotate.webm', 
        vidWin: './assets/videos/Super_Smash_Bros/SSB_Victory.webm'
    },
    { 
        name: 'SWOLL TURTLES', 
        abbr: 'SWT', 
        logo: 'assets/logos/SWT.png', 
        vidClose: './assets/videos/Swoll_Turtles/SWOLL_TeamRotate.webm', 
        vidWin: './assets/videos/Swoll_Turtles/SWOLL_Victory.webm'
    },
    { 
        name: 'TEAM Z', 
        abbr: 'TMZ', 
        logo: 'assets/logos/TMZ.png', 
        vidClose: './assets/videos/Team_Z/TeamZ_TeamRotate.webm', 
        vidWin: './assets/videos/Team_Z/TeamZ_Victory.webm'
    },
    { 
        name: 'TORMENTED', 
        abbr: 'TOR', 
        logo: 'assets/logos/TOR.png', 
        vidClose: './assets/videos/Tormented/Tormented_TeamRotate.webm', 
        vidWin: './assets/videos/Tormented/Tormented_Victory.webm'
    },
    { 
        name: 'ULTRAVIOLET', 
        abbr: 'ULT', 
        logo: 'assets/logos/ULT.png', 
        vidClose: './assets/videos/Ultraviolet/UV_TeamRotate.webm', 
        vidWin: './assets/videos/Ultraviolet/UV_Victory.webm'
    }
];




    let video = document.getElementById("transitionVid");
    let waitVideo = document.getElementById("waitTransitionVid");
    let vidSrc = document.getElementById("soucreID");

    let postCountdownCount = 0;


// Define the function to check for team name and display logo
function displayTeamLogos() {
   // Get the values of the blue and orange team input elements
  const blueTeamP = document.getElementById('blueTeamP');
  const orangeTeamP = document.getElementById('orangeTeamP');
  const blueTeamName = blueTeamP.textContent;
  const orangeTeamName = orangeTeamP.textContent;
    
   // Find the corresponding team objects in the teams array
  const blueTeam = teams.find(team => team.name === blueTeamName);
  const orangeTeam = teams.find(team => team.name === orangeTeamName);
    
    // Display the logo images in the corresponding image tags
  const blueLogoImg = document.getElementById('logoBlue');
  const orangeLogoImg = document.getElementById('logoOrange');
  blueLogoImg.src = blueTeam ? blueTeam.logo : '';
  orangeLogoImg.src = orangeTeam ? orangeTeam.logo : '';
    
    
}




function moveBoost() {
  var boost = document.getElementById("boost");
  var boostBar = document.getElementById("boost-bar");
  var boostInput = document.getElementById("boost-input").value;

  boost.style.width = boostInput + "%";
}




let currentPlayer; 
//  global player variable - Pulls the player out of update_state
    
let watchedScore;
//  global score variable - Pulls the player's score out of update_state



//  Function to update the watching persons score stat Start
function updateWatchedPlayerScore(score) {
    
    watchedScore = score;
    //  Makes the global Variable set to the watching players score
    
}
//  End Function.

const ring = document.querySelector('.ring-progress');
const text = document.querySelector('text');
const input = document.getElementById('number-input-boost');

input.addEventListener('input', updateRing);

function updateRing() {
  const value = input.textContent;
  const circumference = 2 * Math.PI * 90;
  const offset = ((100 - value) / 100) * (circumference * 0.75);
  ring.style.strokeDasharray = `${circumference * 0.75} ${circumference}`;
  ring.style.strokeDashoffset = offset;
  text.textContent = `${value}`;
    
    const rotationAngle = (percent / 100) * 360;
    ring.style.transform = `rotate(${rotationAngle}deg)`;
}

const observer6 = new MutationObserver(updateRing);
observer6.observe(input, { childList: true, characterData: true, subtree: true });

//  Subscriber for the websocket server - Update State Event
WsSubscribers.subscribe("game", "update_state", (update) => {
    
    const playerData = JSON.parse(event.data);
    //  Gets event data 
    
    const playerList = Object.values(playerData.data.players);
    //  Gets the list of players;
    
    const playerIdBl = playerList.filter(player => player.team === 0);
    //  Filters whole player list to get just Blue team players
    
    const playerIdOr = playerList.filter(player => player.team === 1);
    //  Filters whole player list to get just Orange team players
    
    const playersBlue = playerIdBl.map(player => ({
        player_id: player.id,
        player_name: player.name,
        assists: player.assists,
        boost: player.boost,
        goals: player.goals,
        demos: player.demos,
        saves: player.saves,
        score: player.score,
        team: player.team,
        shots: player.shots
    }));
    //  Array to map the data from websocket to Blue Team global array
    
    const playersOrange = playerIdOr.map(player => ({
        player_id: player.id,
        player_name: player.name,
        assists: player.assists,
        boost: player.boost,
        goals: player.goals,
        demos: player.demos,
        saves: player.saves,
        score: player.score,
        team: player.team,
        shots: player.shots
    }));
    
    
$('.blue_player1_postgame').text(playersBlue[0].player_name);
$('.blue_player2_postgame').text(playersBlue[1].player_name);
$('.blue_player3_postgame').text(playersBlue[2].player_name);
    
$('.orange_player1_postgame').text(playersOrange[0].player_name);
$('.orange_player2_postgame').text(playersOrange[1].player_name);
$('.orange_player3_postgame').text(playersOrange[2].player_name);
    

    
$('.blue1_scoreVal_postgame').text(playersBlue[0].score);
$('.blue2_scoreVal_postgame').text(playersBlue[1].score);
$('.blue3_scoreVal_postgame').text(playersBlue[2].score);

    $('#scoreRange').attr("max", (playersBlue[0].score + playersBlue[1].score + playersBlue[2].score + playersOrange[0].score + playersOrange[1].score + playersOrange[2].score));
    
    if ((playersBlue[0].score + playersBlue[1].score + playersBlue[2].score) === (playersOrange[0].score + playersOrange[1].score + playersOrange[2].score)){
       
        $('#scoreRange').attr("max", 100);
        $('#scoreRange').attr("value", 50); 
        
    } else {
        
        $('#scoreRange').attr("value", (playersBlue[0].score + playersBlue[1].score + playersBlue[2].score));
        
    }
    
$('.orange3_scoreVal_postgame').text(playersOrange[2].score);
$('.orange2_scoreVal_postgame').text(playersOrange[1].score);
$('.orange1_scoreVal_postgame').text(playersOrange[0].score);

    
    
$('.blue1_goalVal_postgame').text(playersBlue[0].goals);
$('.blue2_goalVal_postgame').text(playersBlue[1].goals);
$('.blue3_goalVal_postgame').text(playersBlue[2].goals);

    $('#goalRange').attr("max", (playersBlue[0].goals + playersBlue[1].goals + playersBlue[2].goals + playersOrange[0].goals + playersOrange[1].goals + playersOrange[2].goals));
    
    if ((playersBlue[0].goals + playersBlue[1].goals + playersBlue[2].goals) === (playersOrange[0].goals + playersOrange[1].goals + playersOrange[2].goals)){
        
        $('#goalRange').attr("max", 100);
        $('#goalRange').attr("value", 50); 
        
    } else {
        
        $('#goalRange').attr("value", (playersBlue[0].goals + playersBlue[1].goals + playersBlue[2].goals));
    }

$('.orange3_goalVal_postgame').text(playersOrange[2].goals);
$('.orange2_goalVal_postgame').text(playersOrange[1].goals);
$('.orange1_goalVal_postgame').text(playersOrange[0].goals);

    
    
$('.blue1_assistVal_postgame').text(playersBlue[0].assists);
$('.blue2_assistVal_postgame').text(playersBlue[1].assists);
$('.blue3_assistVal_postgame').text(playersBlue[2].assists);

    $('#assistRange').attr("max", (playersBlue[0].assists + playersBlue[1].assists + playersBlue[2].assists + playersOrange[0].assists + playersOrange[1].assists + playersOrange[2].assists));
    
    
    
    if ((playersBlue[0].assists + playersBlue[1].assists + playersBlue[2].assists) === (playersOrange[0].assists + playersOrange[1].assists + playersOrange[2].assists)){
        
        $('#assistRange').attr("max", 100);
        $('#assistRange').attr("value", 50); 
        
    } else {
        
        $('#assistRange').attr("value", (playersBlue[0].assists + playersBlue[1].assists + playersBlue[2].assists));
    }

$('.orange3_assistVal_postgame').text(playersOrange[2].assists);
$('.orange2_assistVal_postgame').text(playersOrange[1].assists);
$('.orange1_assistVal_postgame').text(playersOrange[0].assists);

    
    
$('.blue1_shotVal_postgame').text(playersBlue[0].shots);
$('.blue2_shotVal_postgame').text(playersBlue[1].shots);
$('.blue3_shotVal_postgame').text(playersBlue[2].shots);

    $('#shotsRange').attr("max", (playersBlue[0].shots + playersBlue[1].shots + playersBlue[2].shots + playersOrange[0].shots + playersOrange[1].shots + playersOrange[2].shots));
    
        if ((playersBlue[0].shots + playersBlue[1].shots + playersBlue[2].shots) === (playersOrange[0].shots + playersOrange[1].shots + playersOrange[2].shots)){
        
        $('#shotsRange').attr("max", 100);
        $('#shotsRange').attr("value", 50); 
        
    } else {
        
        $('#shotsRange').attr("value", (playersBlue[0].shots + playersBlue[1].shots + playersBlue[2].shots));
        
    }

$('.orange3_shotVal_postgame').text(playersOrange[2].shots);
$('.orange2_shotVal_postgame').text(playersOrange[1].shots);
$('.orange1_shotVal_postgame').text(playersOrange[0].shots);

    
    
$('.blue1_saveVal_postgame').text(playersBlue[0].saves);
$('.blue2_saveVal_postgame').text(playersBlue[1].saves);
$('.blue3_saveVal_postgame').text(playersBlue[2].saves);

    $('#savesRange').attr("max", (playersBlue[0].saves + playersBlue[1].saves + playersBlue[2].saves + playersOrange[0].saves + playersOrange[1].saves + playersOrange[2].saves));
    
        if ((playersBlue[0].saves + playersBlue[1].saves + playersBlue[2].saves) === (playersOrange[0].saves + playersOrange[1].saves + playersOrange[2].saves)){
        
        $('#savesRange').attr("max", 100);
        $('#savesRange').attr("value", 50); 
        
    } else {
        
        $('#savesRange').attr("value", (playersBlue[0].saves + playersBlue[1].saves + playersBlue[2].saves));
        
    }

$('.orange3_saveVal_postgame').text(playersOrange[2].saves);
$('.orange2_saveVal_postgame').text(playersOrange[1].saves);
$('.orange1_saveVal_postgame').text(playersOrange[0].saves);

    
    
$('.blue1_demoVal_postgame').text(playersBlue[0].demos);
$('.blue2_demoVal_postgame').text(playersBlue[1].demos);
$('.blue3_demoVal_postgame').text(playersBlue[2].demos);

    $('#demoRange').attr("max", (playersBlue[0].demos + playersBlue[1].demos + playersBlue[2].demos + playersOrange[0].demos + playersOrange[1].demos + playersOrange[2].demos));
    
        if ((playersBlue[0].demos + playersBlue[1].demos + playersBlue[2].demos) === (playersOrange[0].demos + playersOrange[1].demos + playersOrange[2].demos)){
        
        $('#demoRange').attr("max", 100);
        $('#demoRange').attr("value", 50); 
        
    } else {
        
        $('#demoRange').attr("value", (playersBlue[0].demos + playersBlue[1].demos + playersBlue[2].demos));
        
    }

$('.orange3_demoVal_postgame').text(playersOrange[2].demos);
$('.orange2_demoVal_postgame').text(playersOrange[1].demos);
$('.orange1_demoVal_postgame').text(playersOrange[0].demos);
    //  Array to map the data from websocket to Orange Team global array
    
    // update player name in html
    $('.bl_P1 .bl_name').text(playersBlue[0].player_name);
    $('.bl_P2 .bl_name').text(playersBlue[1].player_name);
    $('.bl_P3 .bl_name').text(playersBlue[2].player_name);
    //$('.bl_P4 .bl_name').text(playersBlue[3].player_name);

    // update boost number in html
    $('.bl_P1 .bl_boost').text(playersBlue[0].boost);
    $('.bl_P2 .bl_boost').text(playersBlue[1].boost);
    $('.bl_P3 .bl_boost').text(playersBlue[2].boost);
    //$('.bl_P4 .bl_boost').text(playersBlue[3].boost);

    // update boost meter in html
    $('.bl_P1 .bl_boostmeter').val(playersBlue[0].boost);
    $('.bl_P2 .bl_boostmeter').val(playersBlue[1].boost);
    $('.bl_P3 .bl_boostmeter').val(playersBlue[2].boost);
    //$('.bl_P4 .bl_boostmeter').val(playersBlue[3].boost);

    // update player name in html
    $('.ol_P1 .ol_name').text(playersOrange[0].player_name);
    $('.ol_P2 .ol_name').text(playersOrange[1].player_name);
    $('.ol_P3 .ol_name').text(playersOrange[2].player_name);
    //$('.ol_P4 .ol_name').text(playersOrange[3].player_name);

    // update boost number in html
    $('.ol_P1 .ol_boost').text(playersOrange[0].boost);
    $('.ol_P2 .ol_boost').text(playersOrange[1].boost);
    $('.ol_P3 .ol_boost').text(playersOrange[2].boost);
    //$('.ol_P4 .ol_boost').text(playersOrange[3].boost);

    // update boost meter in html
    $('.ol_P1 .ol_boostmeter').val(playersOrange[0].boost);
    $('.ol_P2 .ol_boostmeter').val(playersOrange[1].boost);
    $('.ol_P3 .ol_boostmeter').val(playersOrange[2].boost);
    //$('.ol_P4 .ol_boostmeter').val(playersOrange[3].boost);
    
    currentPlayer = (update['game']['target']);
    //  Sets the currentPlayer Variable to the current targeted Player
    
    const bp1i = playersBlue[0].player_id;
    //  Variable to grab Blue Player 1
    
    const bp2i = playersBlue[1].player_id;
    //  Variable to grab Blue Player 2
    
    const bp3i = playersBlue[2].player_id;
    //  Variable to grab Blue Player 3
    
    const op1i = playersOrange[0].player_id;
    //  Variable to grab Orange Player 1
    
    const op2i = playersOrange[1].player_id;
    //  Variable to grab Orange Player 2
    
    const op3i = playersOrange[2].player_id;
    //  Variable to grab Orange Player 3
    
    const playersBlueArray = playersBlue.find(player => player.player_id === currentPlayer);
    // Find the corresponding team objects in the Blue teams array
    
    const playersOrangeArray = playersOrange.find(player => player.player_id === currentPlayer);
    // Find the corresponding team objects in the Orange teams array
    
    let playerScoreOld = $('#number-input-score-test').val;
    //  Variable to add the score to html first div
    
    let playerScore = update['players'][currentPlayer]['score'];
    //  Grabs the score from subscriber
    
    let playerGoals = update['players'][currentPlayer]['goals'];
    //  Grabs the goal count from subscriber
    
    let playerShots = update['players'][currentPlayer]['shots'];
    //  Grabs the Shot count from subscriber
    
    let playerAssist = update['players'][currentPlayer]['assists'];
    //  Grabs the Assist count from subscriber
    
    let playerSaves = update['players'][currentPlayer]['saves'];
    //  Grabs the score from subscriber
    
    let playerBoost = update['players'][currentPlayer]['boost'];
    //  Grabs the boost from subscriber
    
    
    //  If Statements to Update HTML with Event Data Start
        if (currentPlayer === bp1i) { 
        //  if the person targeted by event = Blue player 1 
        //  Then
        //  Select the blue player 1 cont and update its features
        
        
        //  Container update
        $('.bl_P1').addClass('player_cont_curr_bl');
        //  Add class to highlight the container for Blue Player 1
        
        $('.bl_P2').removeClass('player_cont_curr_bl');
        //  Remove class for the container for Blue Player 2
        
        $('.bl_P3').removeClass('player_cont_curr_bl');
        //  Remove class for the container for Blue Player 3
        
        $('.ol_P1').removeClass('player_cont_curr_or');
        //  Remove class for the container for Orange Player 1
        
        $('.ol_P2').removeClass('player_cont_curr_or');
        //  Remove class for the container for Orange Player 2
        
        $('.ol_P3').removeClass('player_cont_curr_or');
        //  Remove class for the container for Orange Player 3
        
        
        //  Boost update
        $('.bl_P1 .bl_boostmeter').addClass('player_cont_curr_bl_bst');
        //  Add class to highlight the boost for Blue Player 1
        
        $('.bl_P2 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        //  Remove class to highlight the boost for Blue Player 2
        
        $('.bl_P3 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        //  Remove class to highlight the boost for Blue Player 3
        
        $('.ol_P1 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        //  Remove class to highlight the boost for Orange Player 1
        
        $('.ol_P2 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        //  Remove class to highlight the boost for Orange Player 2
        
        $('.ol_P3 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        //  Remove class to highlight the boost for Orange Player 3
        
        
        //  Currently Watching update
        $('.watching_name_cont').addClass('player_cont_curr_bl');
        //  Add class to add team color to in name area
        
        $('.watching_name_cont').removeClass('player_cont_curr_or');
        //  Remove class to remove old team color to in name area
        
        $('.watching_name').text(playersBlue[0].player_name);
        //  Add Player name to the container
        
        
        $('.score_icon_goals').addClass('statfeed_logos_blue');
        $('.score_icon_shots').addClass('statfeed_logos_blue');
        $('.score_icon_assists').addClass('statfeed_logos_blue');
        $('.score_icon_saves').addClass('statfeed_logos_blue');
        
        $('.score_icon_goals').removeClass('statfeed_logos_orange');
        $('.score_icon_shots').removeClass('statfeed_logos_orange');
        $('.score_icon_assists').removeClass('statfeed_logos_orange');
        $('.score_icon_saves').removeClass('statfeed_logos_orange');
        
        ring.style.stroke = `hsla(240, 80%, 52%, 0.91)`;
        
    } else 
        
        if (currentPlayer === bp2i) {
        $('.bl_P1').removeClass('player_cont_curr_bl');
        $('.bl_P2').addClass('player_cont_curr_bl');
        $('.bl_P3').removeClass('player_cont_curr_bl');
        $('.ol_P1').removeClass('player_cont_curr_or');
        $('.ol_P2').removeClass('player_cont_curr_or');
        $('.ol_P3').removeClass('player_cont_curr_or');
        
        $('.bl_P1 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P2 .bl_boostmeter').addClass('player_cont_curr_bl_bst');
        $('.bl_P3 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.ol_P1 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P2 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P3 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        
        $('.watching_name_cont').addClass('player_cont_curr_bl');
        $('.watching_name_cont').removeClass('player_cont_curr_or');
        
        $('.watching_name').text(playersBlue[1].player_name);
        
        $('.score_icon_goals').addClass('statfeed_logos_blue');
        $('.score_icon_shots').addClass('statfeed_logos_blue');
        $('.score_icon_assists').addClass('statfeed_logos_blue');
        $('.score_icon_saves').addClass('statfeed_logos_blue');
        
        $('.score_icon_goals').removeClass('statfeed_logos_orange');
        $('.score_icon_shots').removeClass('statfeed_logos_orange');
        $('.score_icon_assists').removeClass('statfeed_logos_orange');
        $('.score_icon_saves').removeClass('statfeed_logos_orange');
        
        ring.style.stroke = `hsla(240, 80%, 52%, 0.91)`;
    
        
    } else 
        
        if (currentPlayer === bp3i) {
        $('.bl_P1').removeClass('player_cont_curr_bl');
        $('.bl_P2').removeClass('player_cont_curr_bl');
        $('.bl_P3').addClass('player_cont_curr_bl');
        $('.ol_P1').removeClass('player_cont_curr_or');
        $('.ol_P2').removeClass('player_cont_curr_or');
        $('.ol_P3').removeClass('player_cont_curr_or');
        
        $('.bl_P1 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P2 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P3 .bl_boostmeter').addClass('player_cont_curr_bl_bst');
        $('.ol_P1 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P2 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P3 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        
        $('.watching_name_cont').addClass('player_cont_curr_bl');
        $('.watching_name_cont').removeClass('player_cont_curr_or');
        
        $('.watching_name').text(playersBlue[2].player_name);
        
        $('.score_icon_goals').addClass('statfeed_logos_blue');
        $('.score_icon_shots').addClass('statfeed_logos_blue');
        $('.score_icon_assists').addClass('statfeed_logos_blue');
        $('.score_icon_saves').addClass('statfeed_logos_blue');
        
        $('.score_icon_goals').removeClass('statfeed_logos_orange');
        $('.score_icon_shots').removeClass('statfeed_logos_orange');
        $('.score_icon_assists').removeClass('statfeed_logos_orange');
        $('.score_icon_saves').removeClass('statfeed_logos_orange');
        
        ring.style.stroke = `hsla(240, 80%, 52%, 0.91)`;
        
        
        
    } else 
        
        if (currentPlayer === op1i) {
        $('.ol_P1').addClass('player_cont_curr_or');
        $('.ol_P2').removeClass('player_cont_curr_or');
        $('.ol_P3').removeClass('player_cont_curr_or');
        $('.bl_P1').removeClass('player_cont_curr_bl');
        $('.bl_P2').removeClass('player_cont_curr_bl');
        $('.bl_P3').removeClass('player_cont_curr_bl');
        
        $('.ol_P1 .ol_boostmeter').addClass('player_cont_curr_or_bst');
        $('.ol_P2 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P3 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.bl_P1 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P2 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P3 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        
        $('.watching_name_cont').addClass('player_cont_curr_or');
        $('.watching_name_cont').removeClass('player_cont_curr_bl');
        
        $('.watching_name').text(playersOrange[0].player_name);
        
        $('.score_icon_goals').addClass('statfeed_logos_orange');
        $('.score_icon_shots').addClass('statfeed_logos_orange');
        $('.score_icon_assists').addClass('statfeed_logos_orange');
        $('.score_icon_saves').addClass('statfeed_logos_orange');
        
        $('.score_icon_goals').removeClass('statfeed_logos_blue');
        $('.score_icon_shots').removeClass('statfeed_logos_blue');
        $('.score_icon_assists').removeClass('statfeed_logos_blue');
        $('.score_icon_saves').removeClass('statfeed_logos_blue');
        
        ring.style.stroke = `hsla(34.286, 82%, 53%, 1)`;
        
        
    } else 
        
        if (currentPlayer === op2i) {
        $('.ol_P1').removeClass('player_cont_curr_or');
        $('.ol_P2').addClass('player_cont_curr_or');
        $('.ol_P3').removeClass('player_cont_curr_or');
        $('.bl_P1').removeClass('player_cont_curr_bl');
        $('.bl_P2').removeClass('player_cont_curr_bl');
        $('.bl_P3').removeClass('player_cont_curr_bl');
        
        $('.ol_P1 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P2 .ol_boostmeter').addClass('player_cont_curr_or_bst');
        $('.ol_P3 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.bl_P1 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P2 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P3 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        
        $('.watching_name_cont').addClass('player_cont_curr_or');
        $('.watching_name_cont').removeClass('player_cont_curr_bl');
        
        $('.watching_name').text(playersOrange[1].player_name);
        
        $('.score_icon_goals').addClass('statfeed_logos_orange');
        $('.score_icon_shots').addClass('statfeed_logos_orange');
        $('.score_icon_assists').addClass('statfeed_logos_orange');
        $('.score_icon_saves').addClass('statfeed_logos_orange');
        
        $('.score_icon_goals').removeClass('statfeed_logos_blue');
        $('.score_icon_shots').removeClass('statfeed_logos_blue');
        $('.score_icon_assists').removeClass('statfeed_logos_blue');
        $('.score_icon_saves').removeClass('statfeed_logos_blue');
        
        ring.style.stroke = `hsla(34.286, 82%, 53%, 1)`;
        
    } else 
        
        if (currentPlayer === op3i) {
        $('.ol_P1').removeClass('player_cont_curr_or');
        $('.ol_P2').removeClass('player_cont_curr_or');
        $('.ol_P3').addClass('player_cont_curr_or');
        $('.bl_P1').removeClass('player_cont_curr_bl');
        $('.bl_P2').removeClass('player_cont_curr_bl');
        $('.bl_P3').removeClass('player_cont_curr_bl');
        
        $('.ol_P1 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P2 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P3 .ol_boostmeter').addClass('player_cont_curr_or_bst');
        $('.bl_P1 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P2 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P3 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        
        $('.watching_name_cont').addClass('player_cont_curr_or');
        $('.watching_name_cont').removeClass('player_cont_curr_bl');
        
        $('.watching_name').text(playersOrange[2].player_name);
        
        $('.score_icon_goals').addClass('statfeed_logos_orange');
        $('.score_icon_shots').addClass('statfeed_logos_orange');
        $('.score_icon_assists').addClass('statfeed_logos_orange');
        $('.score_icon_saves').addClass('statfeed_logos_orange');
        
        $('.score_icon_goals').removeClass('statfeed_logos_blue');
        $('.score_icon_shots').removeClass('statfeed_logos_blue');
        $('.score_icon_assists').removeClass('statfeed_logos_blue');
        $('.score_icon_saves').removeClass('statfeed_logos_blue');
        
        
        ring.style.stroke = `hsla(34.286, 82%, 53%, 1)`;
        
    } else 
    
    {
        $('.ol_P1').removeClass('player_cont_curr_or');
        $('.ol_P2').removeClass('player_cont_curr_or');
        $('.ol_P3').removeClass('player_cont_curr_or');
        
        $('.ol_P1 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P2 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        $('.ol_P3 .ol_boostmeter').removeClass('player_cont_curr_or_bst');
        
        $('.watching_name_cont').removeClass('player_cont_curr_or');
        
        $('.bl_P1').removeClass('player_cont_curr_bl');
        $('.bl_P2').removeClass('player_cont_curr_bl');
        $('.bl_P3').removeClass('player_cont_curr_bl');
        
        $('.bl_P1 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P2 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        $('.bl_P3 .bl_boostmeter').removeClass('player_cont_curr_bl_bst');
        
        $('.watching_name_cont').removeClass('player_cont_curr_bl');
        $('.watching_name_cont').removeClass('player_cont_curr_or');
        
        $('.score_icon_goals').removeClass('statfeed_logos_blue');
        $('.score_icon_shots').removeClass('statfeed_logos_blue');
        $('.score_icon_assists').removeClass('statfeed_logos_blue');
        $('.score_icon_saves').removeClass('statfeed_logos_blue');
        
        $('.score_icon_goals').removeClass('statfeed_logos_orange');
        $('.score_icon_shots').removeClass('statfeed_logos_orange');
        $('.score_icon_assists').removeClass('statfeed_logos_orange');
        $('.score_icon_saves').removeClass('statfeed_logos_orange');
        
        
    }
    
    
    let previousScore = null;
    
    setInterval(function() {
        if (playerScore !== previousScore) {
            $('#number-input-score-test').text(playerScore);
            previousScore = playerScore;
        }
    }, 10);
    
    
    let previousGoal = null;
    
    setInterval(function() {
        if (playerGoals !== previousGoal) {
            $('#number-input-goal-test').text(playerGoals);
            previousGoal = playerGoals;
        }
    }, 10);
    
    
    let previousShots = null;
    
    setInterval(function() {
        if (playerShots !== previousShots) {
            $('#number-input-shots-test').text(playerShots);
            previousShots = playerShots;
        }
    }, 10);
    
    let previousAssist = null;
    
    setInterval(function() {
        if (playerAssist !== previousAssist) {
            $('#number-input-assist-test').text(playerAssist);
            previousAssist = playerAssist;
        }
    }, 10);
    
    let previousSaves = null;
    
    setInterval(function() {
        if (playerSaves !== previousSaves) {
            $('#number-input-saves-test').text(playerSaves);
            previousSaves = playerSaves;
        }
    }, 10);
    
    let previousBoost = null;
    
    setInterval(function() {
        if (playerBoost !== previousBoost) {
            $('#number-input-boost-test').text(playerBoost);
            previousBoost = playerBoost;
        }
    }, 10);
        
    updateWatchedPlayerScore(playerScore); 
    
    

    
    console.log(currentPlayer);
    console.log(bp1i);
    console.log(bp2i);
    console.log(bp3i);
    console.log(op1i);
    console.log(op2i);
    console.log(op3i);
    console.log(postCountdownCount);
});

//this area will update watching player scores


const inputScoreTest = document.querySelector('#number-input-score-test');
const inputScore = document.querySelector('#number-input-score');
let previousScore = inputScoreTest.textContent;

const observer = new MutationObserver(function() {
  const currentScore = inputScoreTest.textContent;
  if (currentScore !== previousScore) {
    inputScore.textContent = currentScore;
    previousScore = currentScore;
  }
});

observer.observe(inputScoreTest, { characterData: true, childList: true, subtree: true });

//this area will update watching player goals


const inputGoalTest = document.querySelector('#number-input-goal-test');
const inputGoal = document.querySelector('#number-input-goal');
let previousGoal = inputGoalTest.textContent;

const observer1 = new MutationObserver(function() {
  const currentGoal = inputGoalTest.textContent;
  if (currentGoal !== previousGoal) {
    inputGoal.textContent = currentGoal;
    previousGoal = currentGoal;
  }
});

observer1.observe(inputGoalTest, { characterData: true, childList: true, subtree: true });




//this area will update watching player Shots


const inputShotTest = document.querySelector('#number-input-shots-test');
const inputShot = document.querySelector('#number-input-shots');
let previousShot = inputShotTest.textContent;

const observer2 = new MutationObserver(function() {
  const currentShot = inputShotTest.textContent;
  if (currentShot !== previousShot) {
    inputShot.textContent = currentShot;
    previousShot = currentShot;
  }
});

observer2.observe(inputShotTest, { characterData: true, childList: true, subtree: true });





//this area will update watching player Assists


const inputAssistTest = document.querySelector('#number-input-assist-test');
const inputAssist = document.querySelector('#number-input-assist');
let previousAssist = inputAssistTest.textContent;

const observer3 = new MutationObserver(function() {
  const currentAssist = inputAssistTest.textContent;
  if (currentAssist !== previousAssist) {
    inputAssist.textContent = currentAssist;
    previousAssist = currentAssist;
  }
});

observer3.observe(inputAssistTest, { characterData: true, childList: true, subtree: true });



//this area will update watching player Saves


const inputSavesTest = document.querySelector('#number-input-saves-test');
const inputSaves = document.querySelector('#number-input-saves');
let previousSaves = inputSavesTest.textContent;

const observer4 = new MutationObserver(function() {
  const currentSaves = inputSavesTest.textContent;
  if (currentSaves !== previousSaves) {
    inputSaves.textContent = currentSaves;
    previousSaves = currentSaves;
  }
});

observer4.observe(inputSavesTest, { characterData: true, childList: true, subtree: true });


//this area will update watching player Saves


const inputBoostTest = document.querySelector('#number-input-boost-test');
const inputBoost = document.querySelector('#number-input-boost');
let previousBoost = inputBoostTest.textContent;

const observer5 = new MutationObserver(function() {
  
    const currentBoost = inputBoostTest.textContent;
    
  if (currentBoost !== previousBoost) {
    inputBoost.textContent = currentBoost;
    previousBoost = currentBoost;
  }
});

observer5.observe(inputBoostTest, { characterData: true, childList: true, subtree: true });




WsSubscribers.subscribe("game", "statfeed_event", (statFeed) => {
    const eventName = statFeed['event_name'];
    const eventExecutor = statFeed['main_target']['name'];
    const executorTeam = statFeed['main_target']['team_num'];
    const eventExecutorSecond = statFeed['secondary_target']['name'];
    const secondExecutorTeam = statFeed['secondary_target']['team_num'];
    
    
    // Loop through the events array
    for (let i = 0; i < events.length; i++) {
        // Check if the event_name property matches the eventName variable
        if (events[i].event_name === eventName) {
            // Assign the main_target and secondary_target properties from the statFeed object
            events[i].main_target = eventExecutor;
            events[i].team = executorTeam;
            events[i].secondary_target = eventExecutorSecond;
            events[i].secondary_team = secondExecutorTeam;
            
        }
        
    }
    
    //html names - Blue
        const bp1 = $('.bl_P1 .bl_name').text();
        const bp2 = $('.bl_P2 .bl_name').text();
        const bp3 = $('.bl_P3 .bl_name').text();
    
        const bp1sf = document.getElementById('blP1Sf');
        const bp2sf = document.getElementById('blP2Sf');
        const bp3sf = document.getElementById('blP3Sf');
    
    //html names - Orange
        const op1 = $('.ol_P1 .ol_name').text();
        const op2 = $('.ol_P2 .ol_name').text();
        const op3 = $('.ol_P3 .ol_name').text();
    
        const op1sf = document.getElementById('olP1Sf');
        const op2sf = document.getElementById('olP2Sf');
        const op3sf = document.getElementById('olP3Sf');
    
        const newdiv = document.createElement('img');
    
        // Find the corresponding team objects in the teams array
        const eventArray = events.find(event => event.event_name === eventName);
    
        // Create a function to remove the new div from its parent after 5 seconds
        function removeDiv(img) {
            if (img && img.parentNode) {
                img.parentNode.removeChild(img);
            }
        }
    
        function fadeOut(element, duration) {
            element.style.transition = "opacity " + duration + "ms ease-out";
            element.style.opacity = 0;
            setTimeout(function() {
                removeDiv(element);
            }, duration);
        }
        
    
        if (eventExecutor === bp1) {
            
            newdiv.classList.add('statfeed_logos_blue');
            newdiv.src = eventArray ? eventArray.img : '';
            bp1sf.appendChild(newdiv);
            
            setTimeout(function() {
                fadeOut(newdiv, 500);
            }, 3000); 
        } else if (eventExecutor === bp2) {
            
            newdiv.classList.add('statfeed_logos_blue');
            newdiv.src = eventArray ? eventArray.img : '';
            bp2sf.appendChild(newdiv);   
            
            setTimeout(function() {
                fadeOut(newdiv, 500);
            }, 3000); 
        } else if (eventExecutor === bp3) {
            
            newdiv.classList.add('statfeed_logos_blue');
            newdiv.src = eventArray ? eventArray.img : '';
            bp3sf.appendChild(newdiv);
            
            setTimeout(function() {
                fadeOut(newdiv, 500);
            }, 3000); 
        } else if (eventExecutor === op1) {
            
            newdiv.classList.add('statfeed_logos_orange');
            newdiv.src = eventArray ? eventArray.img : '';
            op1sf.appendChild(newdiv);
            
            setTimeout(function() {
                fadeOut(newdiv, 500);
            }, 3000); 
        } else if (eventExecutor === op2) {
            
            newdiv.classList.add('statfeed_logos_orange');
            newdiv.src = eventArray ? eventArray.img : '';
            op2sf.appendChild(newdiv);
            
            setTimeout(function() {
                fadeOut(newdiv, 500);
            }, 3000); 
        } else if (eventExecutor === op3) {
            
            newdiv.classList.add('statfeed_logos_orange');
            newdiv.src = eventArray ? eventArray.img : '';
            op3sf.appendChild(newdiv);
            
            setTimeout(function() {
                fadeOut(newdiv, 500);
            }, 3000); 
        }
    
    
        // Top row
        var blueTopPlayerdemo = document.getElementById("mdrTop");
        var OrangeTopPlayerdemo = document.getElementById("mdlTop");

        // Middle Row
        var blueMidPlayerdemo = document.getElementById("mdrMid");
        var OrangeMidPlayerdemo = document.getElementById("mdlMid");

        // Bottom Row
        var blueBotPlayerdemo = document.getElementById("mdrBot");
        var OrangeBotPlayerdemo = document.getElementById("mdlBot");
    
    
   //for second player demoed
        if (eventExecutorSecond === bp1) {
            
            blueTopPlayerdemo.classList.add('player_cont_demo');
            
            setTimeout(function() {
            blueTopPlayerdemo.classList.remove('player_cont_demo');
            }, 3000); 
        }  
    
        else if (eventExecutorSecond === bp2) {
            
            blueMidPlayerdemo.classList.add('player_cont_demo'); 
            
            setTimeout(function() {
            blueMidPlayerdemo.classList.remove('player_cont_demo'); 
            }, 3000); 
        } 
    
        else if (eventExecutorSecond === bp3) {
            
            blueBotPlayerdemo.classList.add('player_cont_demo');
            
            setTimeout(function() {
            blueBotPlayerdemo.classList.remove('player_cont_demo');
            }, 3000); 
        } 
    
        else if (eventExecutorSecond === op1) {
            
            OrangeTopPlayerdemo.classList.add('player_cont_demo');
            
            setTimeout(function() {
            OrangeTopPlayerdemo.classList.remove('player_cont_demo');
            }, 3000); 
        } 
    
        else if (eventExecutorSecond === op2) {
            
            OrangeMidPlayerdemo.classList.add('player_cont_demo');
            
            setTimeout(function() {
            OrangeMidPlayerdemo.classList.remove('player_cont_demo');
            }, 3000); 
        }
    
          else if (eventExecutorSecond === op3) {
            
            OrangeBotPlayerdemo.classList.add('player_cont_demo');
            
            setTimeout(function() {
            OrangeBotPlayerdemo.classList.remove('player_cont_demo');
            }, 3000); 
        }
    

    
    if (eventName === "MVP" && eventExecutor === bp1) {
        $('.bl_p1_pg').css('opacity', 1);
        $('.bl_p2_pg').css('opacity', 0);
        $('.bl_p3_pg').css('opacity', 0);
        $('.or_p1_pg').css('opacity', 0);
        $('.or_p2_pg').css('opacity', 0);
        $('.or_p3_pg').css('opacity', 0);
    } else if (eventName === "MVP" && eventExecutor === bp2) {
        $('.bl_p1_pg').css('opacity', 0);
        $('.bl_p2_pg').css('opacity', 1);
        $('.bl_p3_pg').css('opacity', 0);
        $('.or_p1_pg').css('opacity', 0);
        $('.or_p2_pg').css('opacity', 0);
        $('.or_p3_pg').css('opacity', 0);
    } else if (eventName === "MVP" && eventExecutor === bp3) {
        $('.bl_p1_pg').css('opacity', 0);
        $('.bl_p2_pg').css('opacity', 0);
        $('.bl_p3_pg').css('opacity', 1);
        $('.or_p1_pg').css('opacity', 0);
        $('.or_p2_pg').css('opacity', 0);
        $('.or_p3_pg').css('opacity', 0);
    } else if (eventName === "MVP" && eventExecutor === op1) {
        $('.bl_p1_pg').css('opacity', 0);
        $('.bl_p2_pg').css('opacity', 0);
        $('.bl_p3_pg').css('opacity', 0);
        $('.or_p1_pg').css('opacity', 1);
        $('.or_p2_pg').css('opacity', 0);
        $('.or_p3_pg').css('opacity', 0);
    } else if (eventName === "MVP" && eventExecutor === op2) {
        $('.bl_p1_pg').css('opacity', 0);
        $('.bl_p2_pg').css('opacity', 0);
        $('.bl_p3_pg').css('opacity', 0);
        $('.or_p1_pg').css('opacity', 0);
        $('.or_p2_pg').css('opacity', 1);
        $('.or_p3_pg').css('opacity', 0);
    } else if (eventName === "MVP" && eventExecutor === op3) {
        $('.bl_p1_pg').css('opacity', 0);
        $('.bl_p2_pg').css('opacity', 0);
        $('.bl_p3_pg').css('opacity', 0);
        $('.or_p1_pg').css('opacity', 0);
        $('.or_p2_pg').css('opacity', 0);
        $('.or_p3_pg').css('opacity', 1);
    }
    
    console.log("blue p1: " + bp1 + " blue p2: " + bp2 + " blue p3: " + bp3 + " orange o1: " + op1 + " orange p2: " + op2 + " orange p3: " + op3 );
    
    console.log(bp1sf)
    
    
        
    console.log(events);
    //console.log(eventsArrayName);
    //console.log(eventName);
    console.log(eventExecutor);
    //console.log(eventExecutorSecond);
});


WsSubscribers.subscribe("game", "goal_scored", (goalScored) => {
    const scorer = goalScored['scorer']['name'];
    const scorerTeam = goalScored['scorer']['teamnum'];
    const assister = goalScored['assister']['name'];
    const goalSpeed = Math.round(goalScored['goalspeed']); //ask mph or kph
    
    const scorerCont = document.getElementById('scorerName');
    const assisterCont = document.getElementById('goalAssist');
    const goalSpeedCont = document.getElementById('goalSpeed');
    const replayIcons = document.querySelectorAll('.statfeed_logos');
    
    
    scorerCont.textContent = scorer;
    assisterCont.textContent = assister;
    goalSpeedCont.textContent = "Speed: " + goalSpeed + "/KPH";
    
    if (assister  === "") {
        $('.assist_icon').addClass('hiddendivs');
    } else {
        $('.assist_icon').removeClass('hiddendivs');
    }
    
    if (scorerTeam === 0) {
        $('.statfeed_logos').addClass('statfeed_logos_blue');
        $('.statfeed_logos').removeClass('statfeed_logos_orange');
    } else if (scorerTeam === 1) {        
        $('.statfeed_logos').addClass('statfeed_logos_orange');
        $('.statfeed_logos').removeClass('statfeed_logos_blue');
    } else {
        $('.statfeed_logos').removeClass('statfeed_logos_blue');
        $('.statfeed_logos').removeClass('statfeed_logos_orange');
    }
});


//when game starts again, put everything back
WsSubscribers.subscribe("game", "initialized", (init) => {
    
    
    

    console.log(init);
});

WsSubscribers.subscribe("game", "post_countdown_begin", (postCDBegin) => {
    
    postCountdownCount++;
    
    if (postCountdownCount === 1){
        
        waitVideo.pause();
        waitVideo.style.opacity = "0";
        video.src = "assets/JWRLCS_Transition.webm";
        video.type = "video/webm";
        video.style.opacity = "1";
        video.play();
    
    
        video.addEventListener("ended", function() {
            if (video.currentTime === video.duration) {
            video.currentTime = 0;
            video.pause();
            video.style.opacity = "0";
            
            } 
        });
    }
    else {
        video.style.opacity = "0";
    }
    
});
//when game starts again, put everything back
WsSubscribers.subscribe("game", "match_created", (matchCreated) => {
    

    waitVideo.src = "./assets/videos/JWRL_Hypechamber.webm";
    waitVideo.type = "video/webm";
    waitVideo.addEventListener('canplay', function() {
    waitVideo.style.opacity = "1";
    waitVideo.play();
    });
    console.log(matchCreated);
});


//when game starts again, put everything back
WsSubscribers.subscribe("game", "match_destroyed", (matchDes) => {
    
    postCountdownCount = 0;
    
    const postGameTable = document.getElementById("postGameStats");
    
    postGameTable.style.transition = "all 0.5s ease-in-out";
    postGameTable.style.opacity = "0";

    
     
    video.src = "assets/JWRLCS_Transition.webm";
    video.type = "video/webm";
    video.style.opacity = "1";
    video.play();
    
    
    
    console.log(matchDes);
});

//when game starts again, put everything back
WsSubscribers.subscribe("game", "match_ended", (matchEnd) => {
    

    
    let teamWinner = matchEnd['winner_team_num'];
    
    
    
    const blueTeamP = document.getElementById('blueTeamP');
    const orangeTeamP = document.getElementById('orangeTeamP');
    const blueTeamName = blueTeamP.textContent;
    const orangeTeamName = orangeTeamP.textContent;
   // Find the corresponding team objects in the teams array
    const blueTeam = teams.find(team => team.name === blueTeamName);
    const orangeTeam = teams.find(team => team.name === orangeTeamName);
    
    // Generate a random cache-busting string
    const cacheBuster = new Date().getTime();
    
    if (teamWinner === 0) {
    
        
    
    video.src = blueTeam ? `${blueTeam.vidWin}?${cacheBuster}` : '';
    video.type = "video/webm";
        
        video.style.transition = "all 1.25s ease-in-out";        
        video.style.opacity = "1";
        video.play();
    
        
            
    } else if (teamWinner === 1) {
        
      
    video.src = orangeTeam ? `${orangeTeam.vidWin}?${cacheBuster}` : '';
    video.type = "video/webm";
    video.style.opacity = "1";
        
        video.style.transition = "all 1.25s ease-in-out";        
        video.style.opacity = "1";
        video.play();
         
        
    }
    
    
               
    video.addEventListener("ended", function() {
        if (video.currentTime === video.duration) {
            video.currentTime = 0;
            video.pause();
            video.style.opacity = "0";
        } 
    });

    console.log(matchEnd);
});

//when game starts again, put everything back
WsSubscribers.subscribe("game", "podium_start", (podStart) => {
    
    
    const postGameTable = document.getElementById("postGameStats");
    
    postGameTable.style.transition = "all 0.025s ease-in-out";
    postGameTable.style.opacity = "1";
    
            
            



    console.log(podStart);
});
