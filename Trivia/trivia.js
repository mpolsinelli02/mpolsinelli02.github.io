    
var score = 0
var i = 1
var ans = 1
var correct = new Audio('correct.mp3');
var incorrect = new Audio('incorrect.mp3');
function submitAnswer(){
    y = document.getElementById("qans").value
    var yy=y.toUpperCase();
    x = document.getElementById("question").value
if (ans===1){
    y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        correct.play();
        score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
    }
    document.view.qscore.value=score
}
else if (ans===2){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}
else if (ans===3){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}
else if (ans===4){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}
else if (ans===5){ 
	y = document.getElementById("qans").value
    if(yy==="C"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}
else if (ans===6){ 
	y = document.getElementById("qans").value
    if(yy==="A"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}     
else if (ans===7){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}
else if (ans===8){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}
else if (ans===9){ 
	y = document.getElementById("qans").value
    if(yy==="B"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}         
else if (ans===10){ 
	y = document.getElementById("qans").value
    if(yy==="D"){
        document.getElementById("question").value="You are right"
        correct.play();
         score++
    }
    else {
        document.getElementById("question").value="You are wrong"
        incorrect.play();
        
    }
    document.view.qscore.value=score
}         
	ans++; 
}
        
function main(){ 
if (i===1){ 
	document.view.qnum.value=i;
    document.view.qscore.value=0;
	document.view.question.value ="What is Montreal's hockey team called? \na)Montreal Nordiques \nb)Montreal Golden Knights \nc)Montreal Canadiens \nd)Montreal Red Wings";
    document.view.qans.value=""
}
else if (i===2){ 
	document.view.qnum.value=i;	
	document.view.question.value ="When was the last time the Toronto Maple Leafs won the Stanley cup? \na)1999 \nb)2010 \nc)1912 \nd)1967";
    document.view.qans.value=""
}
else if (i===3){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is Toronto's soccer team called? \na)Toronto Galaxy \nb)Toronto FC \nc)Toronto Impact \nd)Toronto Whitecaps";
    document.view.qans.value=""
}
else if (i===4){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What is the name of Las Vegas' new hockey team? \na)Las Vegas Invaders \nb)Las Vegas Kings \nc)Las Vegas Golden Knights \nd)Las Vegas Ducks";
    document.view.qans.value=""
}
else if (i===5){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which team won the Stanley cup in 2015? \na)Boston Bruins \nb)L.A. Kings \nc)Chicago Blackhawks \nd)Detroit Red Wings";
    document.view.qans.value=""
}
else if (i===6){ 
	document.view.qnum.value=i;	
	document.view.question.value ="What was Quebec's Team called? \na)Quebec Nordiques \nb)Quebec Icecaps \nc)Quebec Canadiens \nd)Quebec Flames";
    document.view.qans.value=""
}
else if (i===7){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which of the following is a Canadian team? \na)Anaheim Ducks \nb)Calgary Flames \nc)Colorado Hurricanes \nd)Arizona Coyotes";
    document.view.qans.value=""
} 
else if (i===8){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Which NHL team has the largest fan base? \na)Vancouver Canucks \nb)Chicago Blackhawks \nc)Montreal Canadiens \nd)Toronto Maple Leafs";
    document.view.qans.value=""
}
else if (i===9){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who won the mls cup in 2017? \na)Seattle Sounders \nb)Toronto FC \nc)LA Galaxy \nd)New York Red Bulls";
    document.view.qans.value=""
}
else if (i===10){ 
	document.view.qnum.value=i;	
	document.view.question.value ="Who won the superbowl in 2017? \na)Atlanta Falcons \nb)Green Bay Packers \nc)Pittsburgh Steelers \nd)New England Patriots";
    document.view.qans.value=""
}    
else if (i===11){
    alert("You got"+ " " + Math.round(score/(i-1)*100)  + "% for this Trivia Quiz")
}
	i++; 
}