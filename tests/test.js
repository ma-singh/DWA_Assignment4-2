const expect = require('chai').expect;
const Book = require('../src/models/book');

describe('Finding Matches', () => {
  it('Should be a function', () => {
    expect(Book.findMatches).to.be.a('function');
  });
});
