function student( name, sclass, rollno  )
{
	this.name = name;
	this.sclass = sclass;
	this.rollno = rollno;
	this.showProperties = printProperties;
}

function printProperties()
{
	console.log( this.name + "," + this.sclass + "," + this.rollno );
}

var student1 = new student( "David Rayy" , "VI" , 12 );

student1.showProperties();