document.addEventListener("DOMContentLoaded",game)
var chields=document.querySelectorAll(".field")
var button=document.querySelector("#reset")
function game(){
    button.addEventListener("click",reset)   
   
    chields.forEach((value)=>{
        value.addEventListener("click",move)
    })
    function move(event){
        let target=event.target
        let position=target.id
        let playerMove=players[playerTime]
        if(movePosition(position)){
            setTimeout(() => {
                alert(`O jogo Acabou!! o vencedor é o ${playerMove}`)
                
            }, 100); 
        }
        uptadeAll()
    }
    function uptadeAll(){
        
        chields.forEach((c)=>{
        
            let chield = c.id
            let cValue=chieldsValue[chield]
            if(cValue!=""){
                console.log("aqui")
                c.innerHTML=`<div class="${cValue}"></div`           
            }
            else{
                c.innerHTML=""
            }
        })    
    }
    function reset(){
        chieldsValue = ["", "", "", "", "", "", "", "", ""]
        playerTime = 0;
        GameOver= false
        uptadeAll()
    }

}
