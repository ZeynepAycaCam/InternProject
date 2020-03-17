function reverseString( str ) {
	var str2 = "";
	for ( i = str.length - 1; i >= 0; i-- )
	{
		str2 = str2 + str.charAt(i);
	}
	return str2;
}

//var str1 = prompt( "Please enter your name", "" );
console.log( "The reverse of the string is: " + reverseString( "abcde" ) );