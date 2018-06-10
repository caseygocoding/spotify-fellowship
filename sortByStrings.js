function sortByStrings(s, t) {
  let newString = '';
  let charactersNotInCheckString = '';

  t.split('').forEach(char => {
    s.split('').forEach(innerChar => {
      if (innerChar === char) {
        newString += innerChar;
      } else if (t.indexOf(innerChar) === -1 && char === t[0]) {
        charactersNotInCheckString += innerChar;
      }
    });
  });
  return newString + charactersNotInCheckString;
}

// sample test cases
sortByStrings('weather', 'therapyw');
sortByStrings('good', 'odg');
sortByStrings('goofy', 'ogy');
