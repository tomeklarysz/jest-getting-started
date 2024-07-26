export const cipher = (str, factor) => {
  const shiftStr = (s) => {
    const charCode = s.charCodeAt()
    if (charCode < 65 || charCode > 122 || (charCode > 90 && charCode < 97)) {
      return s
    }
    const code = charCode + factor
    if (s.charCodeAt() <= 90 && code > 90) {  // making sure it's upper case
      return String.fromCharCode(64 + (code - 90))  // 65 is "A", 90 is "Z"
    }
    if (code > 122) {
      return String.fromCharCode(96 + (code - 122))  // 96 is "a"
    }
    return String.fromCharCode(code)
  }
  const letters = str.split('')
  for (let i=0; i<letters.length; i++) {
    letters[i] = shiftStr(letters[i])
  }
  return letters.join('')
}