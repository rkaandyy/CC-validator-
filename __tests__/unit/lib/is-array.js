var isArray = require('../../../src/lib/is-array');

describe('isArray', function () {
  it('returns true for arrays', function () {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2])).toBe(true);
    expect(isArray([null])).toBe(true);
  });

  it('returns false for non-arrays', function () {
    expect(isArray()).toBe(false);
    expect(isArray(undefined)).toBe(false);  // eslint-disable-line no-undefined
    expect(isArray(null)).toBe(false);
    expect(isArray(true)).toBe(false);
    expect(isArray(false)).toBe(false);
    expect(isArray(0)).toBe(false);
    expect(isArray(1)).toBe(false);
    expect(isArray('arr')).toBe(false);
    expect(isArray({})).toBe(false);
    expect(isArray({length: 2})).toBe(false);
  });
});
