teoria-chord-progression
========================
Diatonic chord progressions for [Teoria.js](https://github.com/saebekassebil/teoria) - the JS lib for music theory.

_Teoria.js is a lightweight and fast JavaScript library
for music theory, both Jazz and Classical. It aims at providing an intuitive
programming interface for music software (such as Sheet Readers,
Sheet Writers, MIDI Players etc.)._

Features
-------
- A chord progression object, for creating and managing groups of `teoria.chord`
- Supports browser and Node environment

Installation
-----------

via npm:
``` bash
npm install teoria-chord-progression
```

Browser compatible build available in `./dist`

Usage
------

teoria-chord-progression depends on [Teoria.js](https://github.com/saebekassebil/teoria).
```javascript
var teoria = require('teoria'),
    teoriaChordProgression = require('teoria-chord-progression');

// create teoria.scale object
var cMajorScale = teoria.scale('c', 'major');

// chords 1-7 in heptatonic scale
var chords = [2, 5, 1];

// construct a diatonic chord progression
var twoFiveOne = teoriaChordProgression(cMajorScale, chords);

// or pass chord length argument to build 7th chords
var twoFiveOne7thChords = teoriaChordProgression(cMajorScale, chords, 4);

// get teoria.chord by index
var Dmin7 = twoFiveOne7thChords.getChord(0);

// get simple representation
twoFiveOne7thChords.simple(); // [ [ 'd3', 'f3', 'a3' ], [ 'g3', 'b3', 'd4' ], [ 'c3', 'e3', 'g3' ] ]

```

Building
--------

Fetch the code:

```bash
git clone git@github.com:JasonStorey/teoria-chord-progression.git
```

Enter the directory, and install the dependencies:
```bash
cd teoria-chord-progression && npm install
```

And build:
```bash
npm run build
```

Run the tests:
```bash
npm test
```
