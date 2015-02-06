describe('Teoria Chord Progression', function() {
    var DIST = process.cwd() + '/dist',
        assert = require("assert"),
        teoria = require('teoria'),
        progression = require(DIST + '/teoria-chord-progression');

    describe('with invalid arguments', function() {
        it('throws an error if correct number of args aren\'t provided', function() {
            assert.throws(progression, /Expected 2 arguments but received 0./);
        });

        it('throws an error if TeoriaScale is not provided', function() {
            assert.throws(function() { progression('not a scale', []); }, /Invalid argument: TeoriaScale./);
        });

        it('throws an error if Array is not provided', function() {
            var scale = teoria.scale('c', 'major');
            assert.throws(function() { progression(scale, 'not an array'); }, /Invalid argument: Integer Array./);
        });

        it('throws an error if Array contains NaNs', function() {
            var scale = teoria.scale('c', 'major');
            assert.throws(function() { progression(scale, [1, 2, 'egg']); }, /Invalid argument: Integer Array./);
        });

        it('throws an error if Array contains numbers outside of provided scale\'s range', function() {
            var scale = teoria.scale('c', 'major'),
                degrees = scale.notes().length;
            assert.throws(function() { progression(scale, [1, 2, degrees + 1]); }, /Invalid Progression: Scale has 7 degrees./);
        });
    });

    describe('with valid arguments', function() {
        var validScale,
            validProgression;

        beforeEach(function() {
            validScale = teoria.scale('c', 'major');
            validProgression = [2, 5, 1];
        });

        it('does not throw', function() {
            assert.doesNotThrow(function() { progression(validScale, validProgression); });
        });
    });
});