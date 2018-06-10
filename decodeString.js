function replacer(match, p1, p2, p3) {
  return p3.repeat(p1);
}

function decodeString(s) {
  let derivedString = '';
  derivedString = s.replace(/(\d+)(\[)([a-zA-Z]+)(\])/g, replacer);

  if (/\d/.test(derivedString)) {
    return decodeString(derivedString);
  } else {
    return derivedString;
  }
}

// sample test cases
decodeString('4[ab]');
decodeString('2[b3[a]]');
decodeString('2[a]3[b]');
decodeString('3[a]2[bc]');
decodeString('2[abc]3[de]fg');
