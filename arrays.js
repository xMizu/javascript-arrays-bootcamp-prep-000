var chocolateBars = ['snicker', 'hundred grand','kitkat','skittles']

function addElementToBeginningOfArray (array, element) {
  var aETBOF = [element,...array]
  return aETBOF;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)  
  return array
}

function addElementToEndOfArray (array, element) {
  var aETEOF = [element,...array]
  return aETBOF;
}

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element)  
  return array
}