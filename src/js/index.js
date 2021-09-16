import '../css/styles.css';
import * as Utils from './utils';
import * as Api from './data-business';

Api.getCharacters().then((dataCharacters) => {
    const characterArray = [];
    for (let character of dataCharacters) {
      const item = Utils.createCharacterRow(character);
      characterArray.push(item);
    };

    for (let list of characterArray) {
        document.getElementById("root").append(list);
    }
  });

