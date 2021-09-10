/*
* @Author: kukqvfnv
* @Date:   2021-09-09 09:56:36
* @Last Modified by:   kukqvfnv
* @Last Modified time: 2021-09-09 09:56:44
*/
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});