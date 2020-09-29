
exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


// Invoked by the "Foobar" command
nova.commands.register("more-selections.insertFoobar", (editor) => {
    // Begin an edit session
    var position = editor.selectedRange.start;
    editor.edit(function(e) {
        // Insert the string "Foobar"
        e.insert(position, "Foobar");
    });
});

