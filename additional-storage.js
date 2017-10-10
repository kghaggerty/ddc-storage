const storedInventory = localStorage.getItem("homeInventory")
let newHomeInventory = JSON.parse(storedInventory)

const downstairsToilet = {
    "name": "downstairs toilet",
    "type": "appliance",
    "location": "bathroom",
    "description": "This is a toilet in the upstairs bathroom.  It is quite nice and comfortable.  It's right next to the shower even!!"
}
newHomeInventory.appliance.push(downstairsToilet)

homeInventoryString = JSON.stringify(newHomeInventory)
localStorage.setItem("homeInventory", homeInventoryString)

