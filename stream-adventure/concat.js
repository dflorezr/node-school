const concat = require('concat-stream');

process.stdin.pipe(
    concat(function (data){
        reverse = data.toString().split('').reverse().join('');
        process.stdout.write(reverse);
    })
)
