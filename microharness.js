function runTests(tests) {
    "use strict";
    var colors = {
        p: 'background: #222; color: #bada55',
        f: 'background: red; color: white'
    };

    var divider = new Array(40).join('-');
    
    function log(text, style){
      console.log(text, style);
    }

    log('Beginning ' + Object.keys(tests).length + ' tests');

    // start with a clean slate
    var passcount = 0;
    var failcount = 0;

    for (var name in tests) {
        var prettyName = name.replace(/_/g, ' ');

        // run test and ensure returned === expected
        var results = tests[name]();
        if (results[0] === results[1]) {
            // test success
            log(prettyName + ' %cPASS', colors.p);
            passcount++;
        } else {
            // test failure
            log(prettyName + ' %cFAIL', colors.f);
            log('↳ got ' + results[0] + ' and expected ' + results[1]);
            failcount++;
        }
    }

    log(divider);
    log(divider);

    // summarize
    if (failcount === 0) {
        log('%c' + passcount + ' tests passed (100% success)', colors.p);
    } else {
        log('%c' + passcount + ' tests passed', colors.p);
        log('%c' + failcount + ' tests failed', colors.f);
    }
}
