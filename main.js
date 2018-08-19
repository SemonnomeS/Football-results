var results = document.getElementById('results');
var team = document.getElementById('team');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');
var btn5 = document.getElementById('btn5');

btn1.addEventListener("click", function(){
  var request = new XMLHttpRequest();

  request.open('GET', 'https://apifootball.com/api/?action=get_standings&league_id=62&APIkey=02222063054db1d6bb7304621751a53d0178b751b5e919dccd3f4890431c6187');
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    renderHTML(data);
  };
  request.send();
});

btn2.addEventListener("click", function(){
  var request = new XMLHttpRequest();

  request.open('GET', 'https://apifootball.com/api/?action=get_standings&league_id=109&APIkey=02222063054db1d6bb7304621751a53d0178b751b5e919dccd3f4890431c6187');
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    renderHTML(data);
  };
  request.send();
});

btn3.addEventListener("click", function(){
  var request = new XMLHttpRequest();

  request.open('GET', 'https://apifootball.com/api/?action=get_standings&league_id=117&APIkey=02222063054db1d6bb7304621751a53d0178b751b5e919dccd3f4890431c6187');
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    renderHTML(data);
  };
  request.send();
});

btn4.addEventListener("click", function(){
  var request = new XMLHttpRequest();

  request.open('GET', 'https://apifootball.com/api/?action=get_standings&league_id=127&APIkey=02222063054db1d6bb7304621751a53d0178b751b5e919dccd3f4890431c6187');
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    renderHTML(data);
  };
  request.send();
});

btn5.addEventListener("click", function(){
  var request = new XMLHttpRequest();

  request.open('GET', 'https://apifootball.com/api/?action=get_standings&league_id=79&APIkey=02222063054db1d6bb7304621751a53d0178b751b5e919dccd3f4890431c6187');
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    renderHTML(data);
  };
  request.send();

});

function renderHTML(data){
  var result = "";

  for (var i = 0; i < data.length; i++) {
      result += '<button onClick="my(\'' + data[i].team_name + '\')">'+ data[i].team_name + '</button>';
  }
  document.getElementById('results').innerHTML = result;
}

function my(name) {
  var request = new XMLHttpRequest();

  request.open('GET', "https://apifootball.com/api/?action=get_H2H&firstTeam="+name+"&"+"secondTeam="+name+"&APIkey=02222063054db1d6bb7304621751a53d0178b751b5e919dccd3f4890431c6187");
  request.onload = function(){
    var data = JSON.parse(request.responseText);
    teamHTML(data);
  };
  request.send();
}

function teamHTML(data){
  var result = "";
  var lastResults = data.firstTeam_lastResults;
  
  for (var i = 0; i < 5; i++) {
      result += "<h1>"+ lastResults[i].match_hometeam_name+" "+lastResults[i].match_hometeam_score+" : "+lastResults[i].match_awayteam_score+" "+lastResults[i].match_awayteam_name + "</h1>"+"<hr>";

  }
  document.getElementById('team').innerHTML = result;
}
