/*
 * View model for OctoPrint-GPPLSLA
 *
 * Author: Chandler
 * License: MIT
 */
$(function() {
    function GpplslaViewModel(parameters) {
        var self = this;

        // assign the injected parameters, e.g.:
        // self.loginStateViewModel = parameters[0];
        // self.settingsViewModel = parameters[1];

        // TODO: Implement your plugin's view model here.
    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        GpplslaViewModel,

        // e.g. loginStateViewModel, settingsViewModel, ...
        [ /* "loginStateViewModel", "settingsViewModel" */ ],

        // e.g. #settings_plugin_gpplsla, #tab_plugin_gpplsla, ...
        [ /* ... */ ]
    ]);
});
