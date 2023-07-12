// Modify the make_shirt() function 
// so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    var default_message = 'I love JS';
    if (size == 'large' || size == 'medium')
        message = default_message;
    console.log("Size of the shirt is ".concat(size, "\n    \nmessage that has to print on it is: ").concat(message));
}
make_shirt('large', 'BCITians#19');
