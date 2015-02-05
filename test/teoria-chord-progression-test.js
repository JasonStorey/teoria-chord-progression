describe('Teoria Chord Progression', function() {
    var DIST = process.cwd() + '/dist',
        assert = require("assert"),
        teoria = require('teoria'),
        progression = require(DIST + '/teoria-chord-progression');

    it('does nothing... yet', function() {
        assert.doesNotThrow(progression);
    });
});