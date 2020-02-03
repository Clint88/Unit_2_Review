"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: 
   Date:   

	
*/

var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'>" + "<caption>Upcoming Events</caption>" + "<tr><th>Date</th> <th>Event</th> <th>Price</th></tr>";
//this will create the calender form august 30 to the next date in 14 days
var endDate = new Date(thisDay.getTime() + 14*24*60*60*1000);


//this will display the 14 days
for(var i = 0; i<eventDates.length; i++){
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleDateString();
//the += will add a day and start over for 14 days
   if(thisDay <= eventDate && eventDate <= endDate){
      tableHTML += "<tr>" + "<td>" + eventDay + " " + eventTime + "</td>" + "<td>" + eventDescriptions[i] + "</td>" + "<td>" + eventPrices[i] + "</td>" + "</tr>";
   }
}

tableHTML += "</table>";
//this displays the table
document.getElementById("eventList").innerHTML = tableHTML;