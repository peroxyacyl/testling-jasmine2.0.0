describe("Simple Test", function() {
  it("Simple Addition", function(done) {
    expect(Utilities.add(1,2)).toEqual(3);
    done();
  });
});