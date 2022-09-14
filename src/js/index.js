import '../css/styles.css';
import * as Utils from './utils';
import * as Api from './data-business';
let characterId = '';
Api.getCharacters().then((dataCharacters) => {
  const characterArray = [];
  const characterDetails = [];

  for (let character of dataCharacters) {
    const item = Utils.createCharacterRow(character);
    characterDetails.push(character);

    item.onclick = () => {
      characterId = character.char_id;
      Api.getCharacterById(characterId).then((characterDetails) => {
        Utils.showCharacter(characterDetails[0]);
      });
    };

    characterArray.push(item);
  }

  for (let list of characterArray) {
    document.getElementById('root').append(list);
  }
});
