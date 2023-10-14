'use strict'

// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  const regExp = /[!\.?]/

  const newStr = str.split(' ').map((el, i, arr) => {
    const newLetter = el[0] + 'ay'
    if (el.match(regExp)) return el
    return el.replace(el, `${el.slice(1) + newLetter}`)
  })

  console.log(newStr.join(' '))
  return newStr.join(' ')
}

pigIt('Pig latin is cool .')
