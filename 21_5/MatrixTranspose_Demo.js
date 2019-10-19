document.getElementsByTagName('title')[0].innerHTML = "0060 - MatrixTranspose_Demo";

var body = document.getElementsByTagName('body')[0];
var print = function ( text ) {
	
	if ( text === undefined )
		text = "";	
	
	text = addHTMLWhitespaces( text );
	text = justifyText( text, 200 );

	body.innerHTML += text;
}
var println = function ( text ) {
		
	if ( text === undefined )
		text = "";	
	
	print( text + '</br>' );
}
String.prototype.format = function() {
	
	var result = this;
	
	for ( i = 0; i < arguments.length; i++ ) {
		
		var pattern = new RegExp("\\{" + i + "\\}", "g" );
		result = result.replace( pattern, arguments[i] );
	}
	
	return result;
}
var addHTMLWhitespaces = function ( text ) {
	
	var pattern = new RegExp(" ", "g" );
	return text.replace( pattern, '&nbsp;' );
}
var justifyText = function ( text, inlineChars ) {
	
	var result = "";
	
	for ( var i = 0, counter = 1; i < text.length; i++ ) {
		
		if ( counter == inlineChars ) {
			
			if ( text[ i ] == " " || text[ i ] == "&" && isWhiteSpaceCode( text, i ) ) {
				
				result += "</br>";
				counter = 1;
			}
		}
		else {
			counter++;
		}
		result += text[ i ];
	}

	return result;
}
var isWhiteSpaceCode = function ( text, index ) {
	
	var result = true;
	
	var code = "&nbsp;";
	if ( ( index + code.length ) <= text.length ) {
		
		for ( var i = 0; result && i < code.length; )
			if ( text[ index++ ] != code[ i++ ] )
				result = false;
	}

	return result;
}
var run = function () {

	var matrix = 
	[
		[ 1, 2, 3 ],
		[ 4, 5, 6 ]
	];
	
	println( "Matrix:" );
	printMatrix( matrix );
	println("");

	println( "Transpose matrix:" );
	var matrixT = transpose( matrix );
	printMatrix( matrixT );
}

function addSpaceLeft( text, length ) {
	
	while ( text.length < length ) {
		
		text = " " + text;
	}
	
	return text;
}

function printMatrix( matrix ) {
	
	for ( var i in matrix ) {
		
		for ( var j in matrix[ i ] ) {
			
			print( addSpaceLeft(matrix[ i ][ j ].toString(), 4) );
		}
		println( "" );
	}
}

function transpose( matrix ) {
	
	var result = new Array( matrix[ 0 ].length );
	
	for ( var i = 0; i < result.length; i++ ) {
		
		result[ i ] = new Array( matrix.length );
		for ( var j = 0; j < result[ i ].length; j++ ) {
			
			result[ i ][ j ] = matrix[ j ][ i ];
		}
	}
	
	return result;
}

run();











