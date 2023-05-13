(function(ext) {
    // Define the name and blocks of your extension
    var descriptor = {
        blocks: [
            ['r', 'battery percentage', 'getBatteryPercentage'],
        ]
    };

    // Function to get the battery percentage
    function getBatteryPercentage() {
        return navigator.getBattery().then(function(battery) {
            return battery.level * 100;
        });
    }

    // Register the extension
    ext.getBatteryPercentage = getBatteryPercentage;
    ScratchExtensions.register('Battery Extension', descriptor, ext);
})({});
