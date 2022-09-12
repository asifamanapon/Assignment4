function isJavaScriptFile(string) {
    if (typeof(string) == 'string') {
        if (string.endsWith('.js')) {
            console.log('True');
            return string;
        }
        else {
            console.log('False');
        }

    }
    else {
        console.log('Enter a .js file');
    }
}

let stringInput = 'aliyaBhat.js'
let stringcheck = isJavaScriptFile(stringInput);
