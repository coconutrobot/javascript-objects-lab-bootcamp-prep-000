var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
  
  return Object.assign({}, recipes, {[key]: value})
  
  var obj = {prop:1};
  recipes[key] = value;
  
  return recipes;
}