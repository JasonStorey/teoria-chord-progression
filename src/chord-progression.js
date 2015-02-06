function ChordProgression(scale, progression) {
    var notes;

    if(!scale || !progression) {
        throw new Error('Expected 2 arguments but received 0.');
    }

    if(!scale.notes || !scale.transpose) {
        throw new Error('Invalid argument: TeoriaScale.');
    }

    if(!(progression instanceof Array) || progression.filter(function(n) { return typeof n !== 'number'; }).length > 0) {
        throw new Error('Invalid argument: Integer Array.');
    }

    notes = scale.notes();

    progression.forEach(function(n) {
        var degree = notes[n - 1];

        if(!degree) {
            throw new Error('Invalid Progression: Scale has ' + notes.length + ' degrees.');
        }
    });
}

module.exports = ChordProgression;