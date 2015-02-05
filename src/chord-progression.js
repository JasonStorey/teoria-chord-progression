function ChordProgression(scale, progression) {
    if(!scale || !progression) {
        throw new Error('Expected 2 arguments but received 0.');
    }

    if(!scale.notes || !scale.transpose) {
        throw new Error('Invalid argument: TeoriaScale');
    }

    if(!(progression instanceof Array) || progression.filter(function(n) { return typeof n !== 'number'; }).length > 0) {
        throw new Error('Invalid argument: Integer Array');
    }
    // Does nothing... yet.
}

module.exports = ChordProgression;