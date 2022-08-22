
const playerNameList = [];

//=========showPlayer Function==========//

function showPlayer(){
    const showPlayName = document.getElementById('selection');
    showPlayName.innerText = '';
    for(let i  = 0; i < playerNameList.length; i++){

        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th>${i+1}.</th>
        <th>${playerNameList[i]}</th>
        `;
        if(i < 5){
            showPlayName.appendChild(tr);
        }
        else{
            alert("Sorry!! You can not add more than 5 players");
            break;
        }
    }
}

// =============Player Selection=======//
function selectPlayer(selected){
    const playerName = selected.parentNode.children[0].innerText;;
    if(playerNameList.length < 5){
        playerNameList.push(playerName);
        selected.disabled = true;
    }
    else{
        alert("Sorry!! You can not add more than 5 players");
    }
    showPlayer();
}

// ===========Player Name show Part==========//

document.getElementById('player-cost-btn').addEventListener('click', function(){
    const totalPlayer = playerNameList.length;
        
    let everyPlayer = getInputValueById('player');
    if(playerNameList.length < 6 && (isNaN(everyPlayer) === false)){
        const totalExpense = everyPlayer * totalPlayer;
        document.getElementById('expenses').innerText = totalExpense;
    }
    else if(everyPlayer < 1){
        alert('Please select player before');
    }
    else{
        alert('Please select player before');
    }

});

// ============Cost Calculation Part=========//
document.getElementById('total-cost').addEventListener('click', function(){
    const totalPlayerCostString = document.getElementById('expenses').innerText;
    const totalPlayerCost = parseFloat(totalPlayerCostString);
    
    const managerCost = getInputValueById('manager-cost');
    
    const coachCost = getInputValueById('coach-cost');
    if(managerCost >= 0 && coachCost >= 0){
        const totalCost = totalPlayerCost + managerCost + coachCost;
        document.getElementById('total').innerText = totalCost;
    }
    else{
        alert('Please fill-up input field !!');
    }
    return totalCost;
});
