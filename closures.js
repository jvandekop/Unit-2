function createCharacter(Name, HP, moves) {

    let hp = HP;

    let name = Name;

    let movesList = moves;

    return {

        getHP: function() {
            return hp;
        },

        getName: function() {
            return name;
        },

        appendMoves: function() {
            const movesDiv = document.querySelector('.moves');
            for (const move of movesList) {
                const paragraph = document.createElement('p');
                paragraph.textContent = move;
                movesDiv.appendChild(paragraph);
            }
        }
    };
}


const myCharacter = createCharacter('Player 1', 100, 'Attack', 'Defend', 'Heal');


myCharacter.appendMoves();


console.log('HP:', myCharacter.getHP());
console.log('Name:', myCharacter.getName());
