// Write your solution in this file!
 driver = {name: "Sam", address: "11 Broadway"}
function updateDriverWithKeyAndValue (driver, key, value){
  // driver.age="15"
  return Object.assign(
    {},driver, {[key]: value}
    )
}
