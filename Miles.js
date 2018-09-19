
//  Miles.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-21 File created.   2016-11-21 Last modification.

/*  The result of the calculation is printed in four different
    ways in this program.
    
    It seems that you cannot format much with the standard
    util.format() function.

*/

const util = require( "util" ) ; // to access the util(ities) module

const tools = require( "./externals/tools.js" ) ; // for sprintf() and printf()

process.stdout.write( "\n This program prints conversion tables." 
                   +  "\n Type a letter to select a conversation table." 
				   
				   + "\n m miles to kilometers "
				   + "\n k kilometers to miles "
				   + "\n p pounds to kilograms "
				   + "\n x exit the program \n\n" ) ;
				   
				   

process.stdin.on( "data", function( input_from_user ) 
{

   // The statements below will be executed automatically after
   // the user has typed in the value.
   

   var distance_in_miles = 10 ;
   
   var distance_in_kilometers ;
   
   var distance_in_kilometers1 = 10 ;
   
   var distance_in_miles1 ;
   
   var pounds = 10 ;
   
   var kilograms ;
   
   
   var user_selection = String( input_from_user ).charAt( 0 ) ;
  
   
   if ( user_selection == 'm' || user_selection == 'M' )
   {  
		 while ( distance_in_miles <= 110 ) 
      {
        
		 distance_in_kilometers = 1.6093 * distance_in_miles
		 
         tools.printf( "\n %10.2f  %10.2f",
		 
         distance_in_miles, distance_in_kilometers ) ;
		 
         distance_in_miles = distance_in_miles  + 10 ;
	  }
	  }		
	if ( user_selection == 'k' || user_selection == 'K' )  
	{
	while ( distance_in_kilometers1 <= 110 ) 
	{
		
		distance_in_miles1 = distance_in_kilometers1 / 1.6093 
		
		tools.printf ( "\n %10.2f %10.2f",
		
		distance_in_kilometers1, distance_in_miles1 ) ;
		
		distance_in_kilometers1 = distance_in_kilometers1 + 10 ;
	}
	}
	if ( user_selection == 'p' || user_selection == 'P' )
	{
		while ( pounds <= 110 )
		{
		 kilograms = 0.4536 * pounds
		 tools.printf ( "\n %10.2f %10.2f", 
		 pounds, kilograms ) ;
		 pounds = pounds + 10 ;
		 
		}
	}	
	if ( user_selection == 'x' || user_selection == 'X' )
	{
		process.exit()
	}
	
		process.stdout.write ( "\n This program prints conversion tables." 
                   +  "\n Type a letter to select a conversation table." 
				   
				   + "\n m miles to kilometers "
				   + "\n k kilometers to miles "
				   + "\n p pounds to kilograms "
				   + "\n x exit the program \n\n" ) ;
} ) ;





