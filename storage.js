// Example objects
const gameComputer = {
    "name": "Gaming Computer",
    "type": "electronics",
    "location": "Bedroom",
    "description": "I enjoy playing video games on this computer",
}
  
  const cowMug = {
      "name": "Moo Mug",
      "type": "dishware",
      "location": "kitchen",
      "description": "I love to drink coffee out of this mug it has little utters on the bottom of the mug."
}

  const waterBottle = {
      "name": "nalgene",
      "type": "dishware",
      "location": "kitchen",
      "description": "I bring this water bottle with me everywhere I go",
}

  const doggyBed = {
      "name": "Rolo's bed",
      "type": "furniture",
      "location": "bedroom",
      "description": "This is my dog's bed.  She loves it."
}

  const kevinsBed = {
    "name": "Kevin's bed",
    "type": "furniture",
    "location": "kitchen",
    "description": "This is Kevin's bed. He loves it."
}

const frenchPress = {
    "name": "French Press",
    "type": "appliance",
    "location": "kitchen",
    "description": "This is Kevin's French press for making coffee. He loves it very much."
}

const television = {
    "name": "television",
    "type": "electronics",
    "location": "living room",
    "description": "This is the TV living room.  Kevin never watches TV, but needed filler for this exercise."
}

const skateboard = {
    "name": "cruiser board",
    "type": "toy",
    "location": "Living room",
    "description": "This is Kevin's skateboard.  Sometimes he will cruise on his skateboard while his dog runs in front pulling him."
}

const macBook = {
    "name": "macbook pro",
    "type": "electronics",
    "location": "bedroom",
    "description": "This is Kevin's French macbook pro computer.  He enjoys doing his school work on this computer and using it while in bed before sleep."
}

const upstairsToilet = {
    "name": "Upstairs toilet",
    "type": "appliance",
    "location": "bathroom",
    "description": "This is a toilet in the upstairs bathroom.  It is quite nice and comfortable.  It's right next to the shower even!!"
}

let electronics = []
let furniture = []
let toy = []
let appliance = []
let dishware = []

electronics.push(macBook)
electronics.push(gameComputer)
electronics.push(television)
toy.push(skateboard)
dishware.push(cowMug)
dishware.push(waterBottle)
appliance.push(frenchPress)
appliance.push(upstairsToilet)
furniture.push(kevinsBed)
furniture.push(doggyBed)

let homeInventory = {
    "electronics": electronics,
    "toy": toy,
    "dishware": dishware,
    "appliance": appliance,
    "furniture": furniture
}

let homeInventoryString = JSON.stringify(homeInventory)
localStorage.setItem("homeInventory", homeInventoryString)


