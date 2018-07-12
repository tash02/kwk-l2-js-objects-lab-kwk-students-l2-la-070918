// Write your solution in this file!
var driver = {
  name: "tasha"
}
function updateDriverWithKeyAndValue (driver, key, value){
  // driver.age="15"
  Object.assign(
    {},driver, {key:value}
    )
}
