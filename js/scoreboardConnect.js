
WsSubscribers.init(49322, true);    //Register WsSubscribers


let updateTeamScores = false;   //Variable called to update team scores
let showNoTimeInClock = false;  //Variable called to hide clock time if needed
let gameNum;


const btnOverlay = document.getElementById("btnOverlay");
let seriesTitle;
let lengthType;
let lengthTypeSelected;

// Add an event listener for the 'click' event
btnOverlay.addEventListener('click', function() {
    
    let lengthType = document.getElementById("lengthList");
    let lengthTypeSelected = lengthList.options[lengthList.selectedIndex].text;
    let seriesTitle = document.getElementById("seriesTitle");
    gameNum = 1;
    
    seriesTitle.innerHTML = lengthTypeSelected;
    // This function will be called when the button is clicked
    console.log('Button clicked!');
    console.log(seriesTitle);
});


//Function to convert RL count-down time from milliseconds to Mins and Seconds
function secondsToTime(seconds, showMs) {
    return (new Date(seconds * 1000)).toISOString().substr(showMs ? 17 : 15, 4);
};
//end Function


let seriesScores = [0, 0];  //Array to house Team scores | Blue 1st Orange 2nd
let gamesPlayed = 0;    //Variable to set the number of Games played


//Function used to update the series scores on match end 
//Used under match_ended WsSubscribers
function updateScores(gameWinner) {
    if (gameWinner === 0) { //If Blue side wins
        
        seriesScores[0]++;  //Increment Blue Score in Array above
        
    } else if (gameWinner === 1) {  //If Orange side wins
        
        seriesScores[1]++; //Increment Orange Score in Array above
        
    };
    
    //Log score in DOM (used for debugging)
    console.log(`blue: ${seriesScores[0]} | orange: ${seriesScores[1]}`);

    //If statement to end a Bo7 Series
    
    //If Either Blue or Orange Reaches 4 Games 
    if (seriesScores[0] >= 4 || seriesScores[1] >= 4) {
        
        seriesScores[0] = 0;    //Reset Blue back to 0
        seriesScores[1] = 0;    //Reset Orange back to 0
        
        console.log("Game over!"); //Log game is over (used for debugging)
    };
    
    //This call will remove the check classes from the series checks
    $('.blue_series .blue_check').removeClass('bl_ck bl_cked'); 
    $('.orange_series .orange_check').removeClass('or_ck or_cked');
        
    //Sets blue series as an array to be views as reversed
    let blueCkTicks = $(".blue_series").children().toArray().reverse();
            
    for (let i = 0; i < seriesScores[0]; i++) { //when the series is incremented for blue 
            
        $(blueCkTicks[i]).addClass('bl_cked');  //Set the indexed tick to highlighted
    };
                
    for (let i = 0; i < seriesScores[1]; i++) { //when the series is incremented for orange
            
        $('.orange_series .orange_check').eq(i).addClass('or_cked');    //Set the tick to checked
        //set others to normal
        $('.blue_series .blue_check').eq(seriesScores[0]).addClass('bl_ck');    
        $('.orange_series .orange_check').eq(seriesScores[1]).addClass('or_ck');
    };
};
//end Function


//Function used to update the Game Counter on match end 
//Used under match_ended WsSubscribers
function updateGameCounter(gameWinner) {
    
    gamesPlayed++;  //Increment the game counter
    
    gameNum++;
    
    //Log the game end and team that won
    console.log(`Game ${gamesPlayed} ended. Winner: ${gameWinner}`);

    if (gamesPlayed % 2 === 0) {    //If games played remainder after diving by 2 = 0
        
        //Set a constant variable of matches played 
        //Set a constant variable of matches played to be games played / 2
        const matchesWon = gamesPlayed / 2; 
        
        //Log match over and find out who won and how many
        console.log(`Match over! ${gameWinner} won ${matchesWon} matches.`);
    };

    if (gamesPlayed === 7) {    //If Games played totals 7
        
        gamesPlayed = 0;    //Set the games played Number back to 0
        gameNum = 0;
        seriesScores[0] = 0;    //Reset Blue Series score to 0
        seriesScores[1] = 0;    //Reset Orange Series score to 0
        
        console.log("Series over!");    //Log that the series is over
    };
    
    console.log(gameNum);
};


WsSubscribers.subscribe("game", "initialized", (initialized) => {
    showNoTimeInClock = false;
    
    let seriesTitle = document.getElementById("seriesTitle");
    let lengthType = document.getElementById("lengthList");
    let lengthTypeSelected = lengthList.options[lengthList.selectedIndex].text;
    
    $("#blSC").text("0");
    $("#orSC").text("0");
    $(".countdown_title").text("5:00");
    
    
    seriesTitle.innerHTML = "Game " + gameNum + " | " + lengthTypeSelected;
    
    console.log(initialized);
    console.log(seriesTitle);
  
});


// This calls any functions you need to run when the countdown occurs
WsSubscribers.subscribe("game", "post_countdown_begin", (postCDBegin) => {
    // this code adds dropdown transition. use this on game start trigger
    var topCont = document.getElementById("topCont"); //whole container
    var titCont = document.getElementById("titCont"); //top title container
    var serCont = document.getElementById("serCont"); //Series container
    var serTitle = document.getElementById("serTitle"); //Series container
    
    topCont.style.transition = "all 2.5s ease-in-out";
    topCont.style.top = "0";
    
    titCont.style.transition = "all .69s ease-in-out";
    titCont.style.transitionDelay = "4.5s";
    titCont.style.top = "0";
    
    serCont.style.transition = "all .69s ease-in-out";
    serCont.style.transitionDelay = "4.5s";
    serCont.style.top = "0";
    
    serTitle.style.transition = "all .65s ease-in-out";
    serTitle.style.transitionDelay = "4.1s";
    serTitle.style.height = "140%";
    console.log(postCDBegin);
    
    
    // Code for Middle layer transitions to show transition after replay
    // Top row
    var blueTopPlayer = document.getElementById("mdrTop");
    var OrangeTopPlayer = document.getElementById("mdlTop");
    
    // Middle Row
    var blueMidPlayer = document.getElementById("mdrMid");
    var OrangeMidPlayer = document.getElementById("mdlMid");
    
    // Bottom Row
    var blueBotPlayer = document.getElementById("mdrBot");
    var OrangeBotPlayer = document.getElementById("mdlBot");
    
    blueTopPlayer.style.transition = "all 0.9s ease-in-out";
    blueTopPlayer.style.transitionDelay = "5s";
    blueTopPlayer.style.left = "4px";
    
    OrangeTopPlayer.style.transition = "all 0.9s ease-in-out";
    OrangeTopPlayer.style.transitionDelay = "5s";
    OrangeTopPlayer.style.right = "4px";
    
    blueMidPlayer.style.transition = "all 0.9s ease-in-out";
    blueMidPlayer.style.transitionDelay = "5.2s";
    blueMidPlayer.style.left = "4px";
    
    OrangeMidPlayer.style.transition = "all 0.9s ease-in-out";
    OrangeMidPlayer.style.transitionDelay = "5.2s";
    OrangeMidPlayer.style.right = "4px";
    
    blueBotPlayer.style.transition = "all 0.9s ease-in-out";
    blueBotPlayer.style.transitionDelay = "5.4s";
    blueBotPlayer.style.left = "4px";
    
    OrangeBotPlayer.style.transition = "all 0.9s ease-in-out";
    OrangeBotPlayer.style.transitionDelay = "5.4s";
    OrangeBotPlayer.style.right = "4px";
    
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
    
    const scorerTeamCont = document.getElementById('replayCardLogo');
    scorerTeamCont.src = "";

    
    
});




// This calls any functions you need to run when the match sucessfully ends occurs
WsSubscribers.subscribe("game", "match_ended", (matchEnded) => {
    // this code adds dropdown transition. use this on game start trigger
    var topCont = document.getElementById("topCont"); //whole container
    var titCont = document.getElementById("titCont"); //top title container
    var serCont = document.getElementById("serCont"); //Series container
    var serTitle = document.getElementById("serTitle"); //Series container
    
    //slides Series best of area up
    serTitle.style.transition = "all 0.1s ease-out";
    serTitle.style.height = "0%";
    
    //slides whole title down
    titCont.style.transition = "all 1s ease-out";
    titCont.style.top = "100%";

    //slides whole series cont up
    serCont.style.transition = "all 1s ease-out";
    serCont.style.top = "-100%";
    
    //moves whole container up
    topCont.style.transition = "all 1s ease-in-out";
    topCont.style.transitionDelay = "2s";
    topCont.style.top = "-100%";
    //End Transitions
    
    
    // Code for Middle layer transitions to show transition after replay
    // Top row
    var blueTopPlayer = document.getElementById("mdrTop");
    var OrangeTopPlayer = document.getElementById("mdlTop");
    
    // Middle Row
    var blueMidPlayer = document.getElementById("mdrMid");
    var OrangeMidPlayer = document.getElementById("mdlMid");
    
    // Bottom Row
    var blueBotPlayer = document.getElementById("mdrBot");
    var OrangeBotPlayer = document.getElementById("mdlBot");
    
    blueBotPlayer.style.transition = "all 0.7s ease-in-out";
    blueBotPlayer.style.transitionDelay = "4s";
    blueBotPlayer.style.left = "-110%";
    
    OrangeBotPlayer.style.transition = "all 0.7s ease-in-out";
    OrangeBotPlayer.style.transitionDelay = "4s";
    OrangeBotPlayer.style.right = "-110%";
    
    blueMidPlayer.style.transition = "all 0.7s ease-in-out";
    blueMidPlayer.style.transitionDelay = "4.2s";
    blueMidPlayer.style.left = "-110%";
    
    OrangeMidPlayer.style.transition = "all 0.7s ease-in-out";
    OrangeMidPlayer.style.transitionDelay = "4.2s";
    OrangeMidPlayer.style.right = "-110%";
    
    blueTopPlayer.style.transition = "all 0.7s ease-in-out";
    blueTopPlayer.style.transitionDelay = "4.4s";
    blueTopPlayer.style.left = "-110%";
    
    OrangeTopPlayer.style.transition = "all 0.7s ease-in-out";
    OrangeTopPlayer.style.transitionDelay = "4.4s";
    OrangeTopPlayer.style.right = "-110%";
    
    //Replay slide down animation at end of replay
    var replayContBottom = document.getElementById("replayCard");
    
    replayContBottom.style.transition = "all 0.7s ease-in-out";
    replayContBottom.style.transitionDelay = "4.4s";
    replayContBottom.style.top = "110%";
    
    const watchingContainer = document.getElementById("watchingCont");
    
    watchingContainer.style.transition = "all 0.7s ease-in-out";
    watchingContainer.style.transitionDelay = "4.4s";
    watchingContainer.style.top = "110%";
    
    const watchingBoost = document.getElementById("watchingBoostCont");
    
    watchingBoost.style.transition = "all 0.7s ease-in-out";
    watchingBoost.style.transitionDelay = "4.4s";
    watchingBoost.style.top = "110%";

    let gameWinner = matchEnded['winner_team_num'];
    updateScores(gameWinner);
    updateGameCounter(gameWinner);
    
    showNoTimeInClock = true;
    
    console.log(matchEnded);
    console.log(gameWinner);
    
    
    let blueLogoSrc = $('.blue_logo img').attr('src');
    $('#logoBluePost').attr('src', blueLogoSrc);
    
    let blueTeamName = $('#blueTeamP').text();
    $('.blue_teamname_postgame').text(blueTeamName);
    
    let blueTeamScore = $('.blue_goal_count').text();
    $('.blue_goal_postgame').text(blueTeamScore);
    
    $('.game_count_postgame').text("GAME " + (gameNum-1));
    
    let orangeTeamScore = $('.orange_goal_count').text();
    $('.orange_goal_postgame').text(orangeTeamScore);
    
    let orangeTeamName = $('#orangeTeamP').text();
    $('.orange_teamname_postgame').text(orangeTeamName);
    
    let orangeLogoSrc = $('.orange_logo img').attr('src');
    $('#logoOrangePost').attr('src', orangeLogoSrc);
    
    let teamWinner = matchEnded['winner_team_num'];
    
    
    
    if (teamWinner === 0 && seriesScores[0] > seriesScores[1]){
        
        $('.game_leading_postgame').text(blueTeamName + " Lead " + seriesScores[0] + " - " + seriesScores[1]);

        
    } 
    
    if (teamWinner === 1 && seriesScores[1] > seriesScores[0]){
        
        $('.game_leading_postgame').text(orangeTeamName + " Lead " + seriesScores[0] + " - " + seriesScores[1]);
        
    } 
    
    if ((teamWinner === 1 || teamWinner === 0) && seriesScores[0] === seriesScores[1]) {
        
        $('.game_leading_postgame').text(" Both teams tied At " + seriesScores[1] + " - " + seriesScores[0 ]);
        
    }
    
    let winLeft = document.getElementById('iconL');
    let winRight = document.getElementById('iconR');
    
    if (teamWinner === 0) {
        
        winLeft.style.opacity = "1";
        winRight.style.opacity = "0";
        
    } else if (teamWinner === 1) {
        
        winLeft.style.opacity = "0";
        winRight.style.opacity = "1";
        
    } else {
        
        winLeft.style.opacity = "0";
        winRight.style.opacity = "0";
        
    };
});

WsSubscribers.subscribe("game", "match_destroyed", (matchDestroyed) => {
    // this code adds dropdown transition. use this on game start trigger
    var topCont = document.getElementById("topCont"); //whole container
    var titCont = document.getElementById("titCont"); //top title container
    var serCont = document.getElementById("serCont"); //Series container
    var serTitle = document.getElementById("serTitle"); //Series container
    
    serTitle.style.transition = "all 0.1s ease-out";
    serTitle.style.height = "0%";
    
    titCont.style.transition = "all 1s ease-out";
    titCont.style.top = "100%";

    serCont.style.transition = "all 1s ease-out";
    serCont.style.top = "-100%";
    
    topCont.style.transition = "all 1s ease-in-out";
    topCont.style.transitionDelay = "2s";
    topCont.style.top = "-100%";
    
    
    // Code for Middle layer transitions to show transition after replay
    // Top row
    var blueTopPlayer = document.getElementById("mdrTop");
    var OrangeTopPlayer = document.getElementById("mdlTop");
    
    // Middle Row
    var blueMidPlayer = document.getElementById("mdrMid");
    var OrangeMidPlayer = document.getElementById("mdlMid");
    
    // Bottom Row
    var blueBotPlayer = document.getElementById("mdrBot");
    var OrangeBotPlayer = document.getElementById("mdlBot");
    
    blueTopPlayer.style.left = "-110%";
    
    OrangeTopPlayer.style.right = "-110%";
    
    blueMidPlayer.style.left = "-110%";
    
    OrangeMidPlayer.style.right = "-110%";
    
    blueBotPlayer.style.left = "-110%";
    
    OrangeBotPlayer.style.right = "-110%";
    
    
    var watchingCont = document.getElementById("watchingCont");
    var watchingBoost = document.getElementById("watchingBoostCont");
    
    watchingCont.style.left = "-110%";
    watchingBoost.style.right = "-110%";
    
    console.log(matchDestroyed);
});

WsSubscribers.subscribe("game", "goal_scored", (goalScored) => {
    
    updateTeamScores = true;
    
    const scorerTeam = goalScored['scorer']['teamnum'];
    const scorerTeamCont = document.getElementById('replayCardLogo');
    
    
    const blueLogoImg = document.getElementById('logoBlue');
    const blueImgSrc = blueLogoImg.getAttribute('src');
    const orangeLogoImg = document.getElementById('logoOrange');
    const orangeImgSrc = orangeLogoImg.getAttribute('src');
    
    const scorerTeamLogo = document.getElementById('scorerTeamLogo');
    
    
    if (scorerTeam === 0){
        scorerTeamCont.src = blueImgSrc
        scorerTeamLogo.style.background = "radial-gradient(circle, rgba(7,28,205,0.8) 20%, rgba(5,25,117,0.9) 96%)"
    }  
    
    if (scorerTeam === 1) {
        scorerTeamCont.src = orangeImgSrc
        scorerTeamLogo.style.background = "radial-gradient(circle, rgba(233,149,37,1) 20%, rgba(208,129,35,0.7978405898876404) 96%)"
    }
    
    console.log(goalScored);
});

WsSubscribers.subscribe("game", "update_state", (d) => {
    

    //Set Count down timer
    if (showNoTimeInClock) {
            $('#cntdwnTitle').text('00');
        } else {
            $('#cntdwnTitle').text(
                (d['game']['isOT'] ? '+' : '') + secondsToTime(d['game']['time_seconds'],
                d['game']['time_seconds'] < 60 && !d['game']['isOT'])
            );
        };//end Count down timer
    
    //Set team Scores
    if (updateTeamScores) {
        updateTeamScores = false;
        $(".blue_goal_count").text(d['game']['teams'][0]['score']);
        $(".orange_goal_count").text(d['game']['teams'][1]['score']);
    };//end setting team scores
    
    //Set team Names
    const blTeam = $("#blueTeamP").text(d['game']['teams'][0]['name']);
    const orTeam = $("#orangeTeamP").text(d['game']['teams'][1]['name']); 

    displayTeamLogos();

    
    //Display Overtime dropdown
    let OvertimeCont = document.getElementById("otArea");
    let OTCheck = (d['game']['isOT']);
    let winnerCheck = (d['game']['hasWinner'])
    
    if (OTCheck === true) {
        OvertimeCont.style.transition = "all 0.5s ease-in-out";
        OvertimeCont.style.top = "5px";
        OvertimeCont.style.zIndex = "4";
    }
    
    
    if (OTCheck === true && winnerCheck === true) {
        OvertimeCont.style.transition = "all 0.5s ease-in-out";
        OvertimeCont.style.top = "0";
        OvertimeCont.style.zIndex = "1";
    }
    
    //Display scorecard botttom left
    const hasTarget = (d['game']['hasTarget']);
    const hasReplay = (d['game']['isReplay']);
    const watchingContainer = document.getElementById("watchingCont");
    const watchingBoost = document.getElementById("watchingBoostCont");
    
    if (hasTarget === true && hasReplay === false) {
        watchingContainer.style.transition = "all .69s ease-in-out";
        watchingContainer.style.left = "0";
        watchingContainer.style.top = "";
        watchingBoost.style.transition = "all .69s ease-in-out";
        watchingBoost.style.right = "0";
        watchingBoost.style.top = "";
    }
    
});

WsSubscribers.subscribe("game", "replay_start", (replayStart) => {
    
    //Set replay animation
    // this code adds dropdown transition. use this on game start trigger
    var repCont = document.getElementById("repCont"); //Replay container
    
        repCont.style.transition = "all 0.5s ease-in-out";
        repCont.style.top = "5px";
        repCont.style.zIndex = "2";
    
    console.log(replayStart);
    
    //Display Overtime dropdown
    let OvertimeCont = document.getElementById("otArea");
    repCont.style.transition = "all 0.5s ease-in-out";
    OvertimeCont.style.top = "-200%";
    repCont.style.zIndex = "1";
    
    
    // Code for Middle layer transitions to hide transition on replay
    // Top row
    var blueTopPlayer = document.getElementById("mdrTop");
    var OrangeTopPlayer = document.getElementById("mdlTop");
    
    // Middle Row
    var blueMidPlayer = document.getElementById("mdrMid");
    var OrangeMidPlayer = document.getElementById("mdlMid");
    
    // Bottom Row
    var blueBotPlayer = document.getElementById("mdrBot");
    var OrangeBotPlayer = document.getElementById("mdlBot");
    
    blueTopPlayer.style.transitionProperty = "none";
    blueTopPlayer.style.left = "-110%";
    
    OrangeTopPlayer.style.transitionProperty = "none";
    OrangeTopPlayer.style.right = "-110%";
    
    blueMidPlayer.style.transitionProperty = "none";
    blueMidPlayer.style.left = "-110%";

    OrangeMidPlayer.style.transitionProperty = "none";
    OrangeMidPlayer.style.right = "-110%";

    blueBotPlayer.style.transitionProperty = "none";
    blueBotPlayer.style.left = "-110%";
    
    OrangeBotPlayer.style.transitionProperty = "none";
    OrangeBotPlayer.style.right = "-110%";
    
    //Replay cont show
    var replayContBottom = document.getElementById("replayCard");
    
        replayContBottom.style.transitionProperty = "none";
        replayContBottom.style.opacity = "1";
        replayContBottom.style.top = "";
    
    
    const watchingContainer = document.getElementById("watchingCont");
    
    watchingContainer.style.transitionProperty = "none";
    watchingContainer.style.left = "-110%";
    
    const watchingBoost = document.getElementById("watchingBoostCont");
    
    watchingBoost.style.transitionProperty = "none";
    watchingBoost.style.right = "-110%";
    
});

WsSubscribers.subscribe("game", "replay_end", (replayEnd) => {
    
    //Set replay animation
    // this code adds dropdown transition. use this on game start trigger
    var repCont = document.getElementById("repCont"); //Replay container
    
        repCont.style.transition = "all 1.5s ease-in-out";
        repCont.style.top = "-200%";
        repCont.style.zIndex = 1;
    
    //Replay slide down animation at end of replay
    var replayContBottom = document.getElementById("replayCard");
    
        replayContBottom.style.transitionProperty = "none";
        replayContBottom.style.opacity = "0";
    
    
    console.log(replayEnd);
});




//when game starts again, put everything back
WsSubscribers.subscribe("game", "initialized", (init) => {
    const watchingContainer = document.getElementById("watchingCont");
    
    watchingContainer.style.transitionProperty = "none";
    watchingContainer.style.transitionDelay = "4.4s";
    watchingContainer.style.left = "-110%";
    watchingContainer.style.tra
    watchingContainer.style.top = " ";
    
    const watchingBoost = document.getElementById("watchingBoostCont");
    
    watchingBoost.style.transitionProperty = "none";
    watchingBoost.style.transitionDelay = "4.4s";
    watchingContainer.style.right = "-110%";
    watchingBoost.style.top = " ";

    console.log(init);
});