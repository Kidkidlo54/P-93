player1_name=localStorage.getItem("player1name")
player2_name=localStorage.getItem("player2name")
player1_score=0
player2_score=0
answerturn="player2"
questionturn="player1"
document.getElementById("1_name").innerHTML=player1_name+":"
document.getElementById("2_name").innerHTML=player2_name+":"
document.getElementById("player1score").innerHTML=player1_score
document.getElementById("player2score").innerHTML=player2_score

document.getElementById("player_question").innerHTML="question-Turn "+player1_name
document.getElementById("player_answer").innerHTML="answer-Turn "+player2_name
function send(){
    getWord=document.getElementById("word").value
    word=getWord.toLowerCase()
    char1=word.charAt(1)
    lengthBy2=Math.floor(word.length/2)
    char2=word.charAt(lengthBy2)
    char3=word.charAt(word.length-1)
    remove1=word.replace(char1,"_")
    remove2=remove1.replace(char2,"_")
    remove3=remove2.replace(char3,"_")

    question_word = "<h4 id='word_display'> Q. "+remove3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    

}
function check(){
    getAnswer= document.getElementById("input_check_box").value
    answer= getAnswer.toLowerCase()
    if (answer == word){
        if(answerturn=="player1"){
            player1_score+=1
            document.getElementById("player1score").innerHTML=player1_score
        }
        else{
            player2_score+=1
            document.getElementById("player2score").innerHTML=player2_score
        }
    }
    if(questionturn=="player1"){
        question_turn="player2"
        document.getElementById("player_question").innerHTML="question turn"+player2_name
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="question turn"+player1_name
    }
    if(answerturn=="player1"){
        answer_turn="player2"
        document.getElementById("player_answer").innerHTML="Answer turn"+player2_name
    }
    else{
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn"+player1_name
    }
    document.getElementById("output").innerHTML=""
}