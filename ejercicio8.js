const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(param) {
  let theLongestWord = ''
  for (i = 0; i < param.length; i++) {
    let word = param[i]
    console.log(word.length)
    if (word.length > theLongestWord.length) {
      theLongestWord = word
    }
  }
  return theLongestWord
}

console.log(findLongestWord(avengers))
