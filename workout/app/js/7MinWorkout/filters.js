//  Sintaxis de los filtros
// {{ expression | filterName : inputParam1 }}
//An expression is followed by the pipe symbol | , which is followed by the filter name
//and then an optional parameter ( inputParam1 ) separated by a colon ( : )

/*
Ej:

$scope.myDate=new Date(2014,7,7,10,30,50);
<br>{{myDate}} <!--2014-08-07T05:00:50.000Z-->
<br>{{myDate | date}} <!--Aug 7, 2014-->
<br>{{myDate | date : 'medium'}} <!--Aug 7, 2014 10:30:50 AM-->
<br>{{myDate | date : 'short'}} <!--8/7/14 10:30 AM-->
<br>{{myDate | date : 'd-M-yy EEEE'}} <!--7-8-14 Thursday-->
*/

/*
Filtros comunes de Angular:

date: As we have seen earlier in the chapter, the date filter is used to format
	the date in a specific format. This filter supports quite a number of formats
	and is locale-aware too. Look at the documentation for the date filter for
	more details: https://docs.angularjs.org/api/ng/filter/date .

uppercase and lowercase: These two filters, as the name suggests, change
	the case of the string input.

number: This filter is used to format string data as numeric. If the input is
	not a number, nothing is rendered.

filter: This very confusing filter is used to filter an array based on a predicate
	expression. It is often used with the ng-repeat directive such as:
	exercise in workout.exercises | filter: 'push'
	
This code will filter all exercises where any string property on an exercise
	object contains the word push. Filter supports a number of additional
	options and more details are available in the official documentation
	at https://docs.angularjs.org/api/ng/filter/filter .
*/

//Implementando un filtro
angular.module('7minWorkout').filter('secondsToTime', function(){

	return function(input){
		var sec = parseInt(input,10);

		if(isNaN(sec)){
			return "00:00:00";
		}

		var hours = Math.floor(sec/3600);

		var minutes = Math.floor((sec - (hours * 3600)) / 60);
		var seconds = sec - (hours * 3600) - (minutes * 60);
		
		return ("0" + hours).substr(-2) + ':' + ("0" + minutes).substr(-2) + ':' + ("0" + seconds).substr(-2);

	}




});