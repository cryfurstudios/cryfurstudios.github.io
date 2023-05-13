(function(ext) {
    // Define the name and blocks of your extension
    var descriptor = {
        blocks: [
            [' ', 'load extension', 'loadExtension'],
        ]
    };

    // Function to load an extension from a file
    function loadExtension() {
        // Trigger the file input element to allow the user to select a file
        var fileInput = document.getElementById('extensionFileInput');
        fileInput.click();
        fileInput.onchange = function() {
            // Load the selected file as a text file
            var file = fileInput.files[0];
            var reader = new FileReader();
            reader.readAsText(file);
            reader.onload = function() {
                try {
                    // Evaluate the extension code in the context of the parent window
                    window.parent.eval(reader.result);
                } catch (e) {
                    console.error('Error loading extension:', e);
                }
            };
        };
    }

    // Register the extension
    ScratchExtensions.register('Extension Loader', descriptor, ext);
})({});
