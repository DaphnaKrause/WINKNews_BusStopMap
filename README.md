# WINKNews_BusStopMap

Separate page for [Final Map](https://www.winknews.com/lee-county-bus-stop-times/)
Final [Story with Map included]()

# Background
###### For part of my summer, I am working for WINK News in Fort Myers.

I was given a set of data outlining bus stop times in Lee County. The addresses included cross streets that lead to an intersection that the bus stops were at.

I wanted to map this data using **Leaflet** because it gave me the flexibility to add my own code and images to spice things up. 

Leaflet requires Lat and Long coordinates, something that I was finding by plugging in my cross streets in Google Maps. But I had thousands of Data Points and was on a deadline.

## Reverse Geocoding
I turned to Texas A & M they have [geocoding services](http://geoservices.tamu.edu/Services/Geocode/)… Sadly they don't do cross streets so they couldn't help me with this specific problem but they helped me on another project I was working on (I will post that Repo as well.)

This is a phone number I found on there facebook page, They are very nice and are happy to answer any of your data related questions. 
(979) 862-3551

## Back to Square 1:
I have the data, *I Just need Lat and Long.*
This is where handy dandy python always comes in clutch. 
I started writing a script that would run on a Google API 
>You can have a couple [API’s Free](https://developers.google.com/maps/documentation/geocoding/get-api-key) on a trial basis 
Shout out to NICAR for helping me know what the heck I just said. 

## Back-on Deadline
Again I'm a journalist on a deadline so I reached out to a developer friend who was able to find an *old Reverse GeoCoding Script* that helped to seal the deal. 

The code ran through **Jupyter notebook** and worked wonders. Some of the points came back in Arizona and California to name a few places, just all over the place... So I fixed some by hand and excluded outliers creating a sampling of a bigger data set.

## Yay!
So now I had my Lat and Long in an excel file
I used [Mr.Data Converter](https://shancarter.github.io/mr-data-converter/) by copying my excel file and asking for a JSON file to be returned.
I then saved by times JSON files in my js folder.

Note you can Change the Colors/Images of your leaflet map markers! I found this great [GitHub about markers](https://github.com/pointhi/leaflet-color-markers) that helped me out!

Also, If you are looking for how to create a Leaflet map I would suggest [this document](https://docs.google.com/document/d/1viIoBJKjJhu5wUjGPO2z4UQqkbQlP6KimdPsQdS4oqA/edit)
made by Mindy McAdams she is a Data Journalism Professor at the University of Florida. This is a great resource that talks you through the whole process step by step.


Additionally, I used the following documentation by Prof.McAdams to create a [Virtual Environment](https://docs.google.com/document/d/1g6A5vbniN2ZoFUWaHJD35t9qiXS9raJ14hlzK4qot7g/edit) in my Folder in order to open a new Jupyter Notebook.

## The files I included in this Repo are my:
1. HTML
2. Images (The markers I used)
3. js (All my data in JSON format)
4. styles (My one CSS file, this is just how I formatted my page, WINK News has there own styles that they plugged in when they uploaded it to the site)

Hope this helps,

Happy Coding!
