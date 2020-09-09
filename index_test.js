const assert = require('assert');
const Rooster = require('../index');

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //setup
      const expected = 'cock-a-doodle-doo!';
      //exercise
      const actual = Rooster.announceDawn();
      //verify
      assert.equal(actual, expected);
    });
  });

  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      const hour = 4;
      const time = Rooster.timeAtDawn(hour);

      const timeType = typeof(time);

      assert.strictEqual(timeType, "string");
    });

    it("throws an error if passed a number less than 0", () => {
      const hour = -1
      const time = Rooster.timeAtDawn(hour);
      
      assert.ifError(time);
    });

        it("throws an error if passed a number greater than 23", () => {
      const hour = 24
      const time = Rooster.timeAtDawn(hour);
      
      assert.ifError(time);
    });


  });
});
