var ChordProgression = require('./chord-progression');

module.exports = function(scale, progression, chordLength) {
    return new ChordProgression(scale, progression, chordLength);
};
