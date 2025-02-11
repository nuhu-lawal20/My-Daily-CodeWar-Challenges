// Description:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//My Solutions:
//1)
function removeExclamationMarks(s) {
    let str = s.split('')
    let remEx = []
    str.forEach(x => (x==='!' ? 0 : remEx.push(x)))
      return remEx.join('');
  }

  //2)
  function removeExclamationMarks(s) {
    return s.replaceAll('!','');
}