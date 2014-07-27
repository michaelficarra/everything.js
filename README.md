everything.js
=============

A single javascript file that contains every ECMA-262 edition 5.1 grammatical production.

### Usage Example

Mocha:

```js
test("exercise my program", function(done) {
  fs.readFile(require.resolve("everything.js"), function(err, programText) {
    var program = esprima.parse("" + programText);
    assert.equal(runMyProgramOn(program), /* expected value */, "message");
    done();
  });
});
```
