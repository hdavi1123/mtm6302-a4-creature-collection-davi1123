// PROVIDED: use this collection to generate the entries.
const $creatures = [
  {
    "name": "Moss Dragon",
    "description": "A gentle gardener who grows tiny forests wherever it naps.",
    "image": "assets/moss-dragon.svg",
    "alt": "A green dragon with leafy horns and small wings."
  },
  {
    "name": "Cloud Fox",
    "description": "A sky wanderer collecting soft clouds and lost daydreams.",
    "image": "assets/cloud-fox.svg",
    "alt": "A pale blue fox with pointed ears and a fluffy tail."
  },
  {
    "name": "Ember Salamander",
    "description": "A warm little companion that keeps campfires glowing.",
    "image": "assets/ember-salamander.svg",
    "alt": "An orange salamander with a flame at the end of its tail."
  },
  {
    "name": "Moon Owl",
    "description": "A quiet navigator who reads the stories written in stars.",
    "image": "assets/moon-owl.svg",
    "alt": "A purple owl with a crescent moon on its forehead."
  },
  {
    "name": "Crystal Turtle",
    "description": "A patient explorer carrying a sparkling crystal garden.",
    "image": "assets/crystal-turtle.svg",
    "alt": "A mint green turtle with purple crystals on its shell."
  },
  {
    "name": "Mushroom Sprite",
    "description": "A woodland storyteller with a spotted cap and muddy boots.",
    "image": "assets/mushroom-sprite.svg",
    "alt": "A small cream sprite wearing a red spotted mushroom cap."
  }
]

// YOUR WORK: build these features using the supplied HTML, CSS, and data.

// 1. Select the collection and preference controls.
const collection = document.querySelector('#collection')
const themeControl = document.querySelector('#theme')
const layoutControl = document.querySelector('#layout')

// 2. Use a loop to generate the creature entries. See START-HERE.md for markup.

// pseudocode: for each creature in the array
//  create an <li class="creature">
//  add the image with its alt text
//  add a div with the name and decription
//  add the <li> to the collection list

for (const creature of $creatures) {
  const entry = document.createElement('li')
  entry.classList.add('creature')

  const image = document.createElement('img')
  image.src = creature.image
  image.alt = creature.alt

  const info = document.createElement('div')
  info.classList.add('creature-info')

  const name = document.createElement('h3')
  name.textContent = creature.name

  const description = document.createElement('p')
  description.classList.add('creature-description')
  description.textContent = creature.description

  info.append(name, description)
  entry.append(image, info)
  collection.appendChild(entry)
}

// 3. Listen for changes to each preference control and update the appearance.

// pseudocode:
//  when the theme changes -> set bodys data theme to the chosen value
//  when the layout changes -> set the collections data layout to the chosen value

function applyTheme (theme) {
  document.body.dataset.theme = theme
  themeControl.value = theme
}

function applyLayout (layout) {
  collection.dataset.layout = layout
  layoutControl.value = layout
}

themeControl.addEventListener('change', function () {
  applyTheme(themeControl.value)
})

layoutControl.addEventListener('change', function () {
  applyLayout(layoutControl.value)
})

// 4. Save both selected preferences to Local Storage.

// pseudocode: whe either control changes
//  put the theme and lyout into one object
//  store it as JSON undet the assignment key
//  show a "saved" message

const STORAGE_KEY = 'mtm6302-a4-creature-preferences'
const statusMessage = document.querySelector('#status')

function savePreferences () {
  const preferences = {
    theme: themeControl.value,
    layout: layoutControl.value
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
  statusMessage.textContent = 'Preferences saved.'
}

themeControl.addEventListener('change', savePreferences)
layoutControl.addEventListener('change', savePreferences)

// 5. Check for saved data on load and restore the controls and appearance.

// pseudocode: 
//  get the saved text local storage
//  if it exists -> parse, apply theme and layout, show "restored" message 
//  if not -> keep forest/cards, show a message, don't save anything

const savedData = localStorage.getItem(STORAGE_KEY)

if (savedData !== null) {
  const savedPreferences = JSON.parse(savedData)
  applyTheme(savedPreferences.theme)
  applyLayout(savedPreferences.layout)
  statusMessage.textContent = 'Your saved preferences were restored.'
} else {
  statusMessage.textContent = 'No saved preferences yet. Choose a habitat and layout.'
}

// Add short pseudocode comments before writing each feature.
