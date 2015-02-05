var ChordProgression = require('./chord-progression');

module.exports = function(scale, progression) {
    return new ChordProgression(scale, progression);
};