var ChordProgression = require('./lib/chord-progression');

module.exports = function createNewChordProgression(scale, progression, chordLength) {
    return new ChordProgression(scale, progression, chordLength);
};
