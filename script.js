var chessboard = function() {
	var board = "";
	var space = " ";
	var hash = "#";
	var size = 8;

	for (var y = 0; y < size; y++) {
		for (var x = 0; x < size; x++) {
			if ((y + x) % 2)
				board += space;
			else
				board += hash;
		}
			board += "\n";
	} 
	console.log(board);
}();