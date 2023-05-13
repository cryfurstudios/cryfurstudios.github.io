(function(ext) {
    // Define the name and blocks of your extension
    var descriptor = {
        blocks: [
            [' ', 'load extension from %s', 'loadExtension', 'extension.js'],
        ]
    };

    // Function to load an extension from a file
    function loadExtension(filename) {
        // Validate the filename to prevent path traversal attacks
        if (filename.indexOf('/') !== -1 || filename.indexOf('\\') !== -1) {
            throw new Error('Invalid filename');
        }

        // Load the file using a XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open('GET', filename, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    try {
                        // Evaluate the extension code in the context of the parent window
                        window.parent.eval(xhr.responseText);
                    } catch (e) {
                        console.error('Error loading extension:', e);
                    }
                } else {
                    console.error('Error loading extension:', xhr.statusText);
                }
            }
        };
        xhr.send();
    }

    // Register the extension
    ext.loadExtension = loadExtension;
    ScratchExtensions.register('Extension Loader', descriptor, ext);
})({});
