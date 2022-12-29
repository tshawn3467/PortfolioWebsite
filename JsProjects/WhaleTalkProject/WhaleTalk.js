let translate = 'Turpentine and Turtles';

function translator(word) {
  let whaleLanguage = [];
  word = word.toLowerCase();
  let combine = '';

  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) === 'a') {
      whaleLanguage.push('a');
    } else if (word.charAt(i) === 'e') {
      whaleLanguage.push('ee');
    } else if (word.charAt(i) === 'i') {
      whaleLanguage.push('i');
    } else if (word.charAt(i) === 'o') {
      whaleLanguage.push('oo');
    } else if (word.charAt(i) === 'u') {
      whaleLanguage.push('uu');
    }
  }

  for (let i = 0; i < whaleLanguage.length; i++) {
    combine = combine + whaleLanguage[i];
  }
  return combine;
}

console.log(translator(translate));