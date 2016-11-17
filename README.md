# μHarness

μHarness (or MicroHarness) is a JS helper function for no-frills testing. Weighing in at < 0.KiB minified, it's simple to get up and running.

## Installation

Clone the repo and include `harness.min.js` in your page:

```html
<script src="microharness.min.js"></script>
```

## Usage

Define tests in a JSON object comprising anonymous functions as the data and the test name as the key (underscores in test names will be converted to spaces for display). Return an array from each function where the zeroth element is the expected output/testing standard and the first element is the actual value you wish to test. For example, to test that basic math works:

```js
var tests = {
    world_isnt_on_fire: function() {
        var actual = 1 + 1;
        var expected = 2;
        return [expected, actual];
    }
};
```

Run the tests by calling `runTests(tests);` (or whatever you have named your object of tests). Results will be output to your console. See `example.html` for a full example.

![Example output from microharness](http://i.imgur.com/nQeDSk8.png)
