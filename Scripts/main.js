
exports.activate = function() {}
exports.deactivate = function() {}


nova.commands.register("selectWithinQuotes", (editor) => {
	let newSelectedRanges = [];
	for (const range of editor.selectedRanges) {
		const bounds = new Range(0, editor.document.length);
		let head = range.start;
		let tail = range.end;
		
		const isQuote = /"|'|`/;
		
		while (head > 0) {
			head -= 1;
			const char = editor.getTextInRange(new Range(head, head + 1));
			
			if (isQuote.test(char)) {
				head += 1;
				break;
			}
		}
		
		while (tail < bounds.end) {
			const char = editor.getTextInRange(new Range(tail, tail + 1));
			if (isQuote.test(char)) {
				break;
			}
			tail += 1;
		}
		newSelectedRanges.push(new Range(head, tail));
	}
	editor.selectedRanges = newSelectedRanges;
});

