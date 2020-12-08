# Travel App Capstone Project

## Overview
This project delivers an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Extend your project options
The following additiona 'extend your project' options have been applied:
1) if the destination (city) does not deliver an image from Pixaby, then a destination (country) image will be returned instead.
2) Multiple date forecasts are extracted and presented (if the departure date is more than 7 days away)
3) Icons are used

## General notes
I have configured the input field so that if the departure date is more than 7 days away, the weather forecast output brings through 15 days of forecasting and allows the user to step through.

If the departure date is within a week, the current weather is shown, with no options for navigation.  

When the user attempts to input a date, they are limited to a date between today and 30 days from today.  30 days is arbitrary, but just applied to demonstrate the input date can be constrained to a date range.
