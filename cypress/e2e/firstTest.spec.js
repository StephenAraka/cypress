/*
  1. describe, then tests inside describe
  2. can also have describe inside a descibe
  3. beforeEach = hook called before every test
*/



describe('Our first suite', () => {

  describe('Our suite section', () => {

    beforeEach('code called before each test', () => {
      // Put repetitive code here - eg login functionality
    });

    it('Some test name', () => {

    });
  });

  it('first test', () => {

  });

  it('second test', () => {

  });

  it('third test', () => {

  });

});

describe('Our second suite', () => {

  it('first test', () => {

  });

  it('second test', () => {

  });

  it('third test', () => {

  });

});
