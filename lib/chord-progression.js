var piu = require('piu');

function ChordProgression(scale, progression, chordLength) {
    if(!scale || !progression) {
        throw new Error('Expected 2 arguments but received 0.');
    }

    if(!scale.notes || !scale.transpose) {
        throw new Error('Invalid argument: TeoriaScale.');
    }

    if(!(progression instanceof Array) || progression.filter(function(n) { return typeof n !== 'number'; }).length > 0) {
        throw new Error('Invalid argument: Integer Array.');
    }

    if(chordLength && chordLength !== 3 && chordLength !== 4) {
        throw new Error('Invalid argument: Supported chord lengths are 3 and 4.');
    }

    this.chordLength = chordLength || 3;
    this.notes = scale.notes();
    this.chords = progression.map(function(n) {
        return this._parseChord(n - 1);
    }.bind(this));
}

ChordProgression.prototype._parseChord = function _parseChord(n) {
    var rootNote = this.notes[n],
        chordNotes = [],
        chordName,
        i;

    if(!rootNote) {
        throw new Error('Invalid Progression: Scale has ' + this.notes.length + ' degrees.');
    }

    for(i = 0; i < this.chordLength; i++) {
        chordNotes.push(this.notes[(n + (2 * i)) % this.notes.length]);
    }

    chordName = piu.name(piu.infer(chordNotes)[0]);
    chordName = chordName.replace(/^([A-G]|b|#)+/, '');

    return rootNote.chord(chordName);
};

ChordProgression.prototype.getChords = function getChords() {
    return this.chords;
};

ChordProgression.prototype.getChord = function getChord(n) {
    return this.chords[n];
};

ChordProgression.prototype.simple = function simple() {
    return this.chords.map(function(chord) {
        return chord.notes().map(function(note) {
            return note.toString();
        });
    });
};

module.exports = ChordProgression;
