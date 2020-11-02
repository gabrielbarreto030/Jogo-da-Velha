var chieldsValue = ["", "", "", "", "", "", "", "", ""]
var playerTime = 0;
var GameOver= false
var symbol = ["o", "x"]
var players=["Cachorro","Gato"]
var winStates= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function movePosition(position) {
    if(GameOver){
        return
    }
    if (chieldsValue[position] == "") {
        chieldsValue[position] = symbol[playerTime]
        winGame()
        playerTime=(playerTime==0)?1:0       
        
    }
    return GameOver
}
function winGame(){
    for(state of winStates){
        let value1= state[0]
        let value2= state[1]
        let value3= state[2]
        if(chieldsValue[value1]==chieldsValue[value2] && chieldsValue[value2]== chieldsValue[value3] && chieldsValue[value1]!=""){
            GameOver=true
        }
    }

}