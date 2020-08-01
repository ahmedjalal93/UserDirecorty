# User Directory
A simple dynamic user directory search engine

## Approach
Used Axios to fetch user data from api 

on page load used componentDidMount to populate all the data and set the state

searchUsers is called when the search form input changes. 

after the page load, the data is kept in array for a reference and for the purpose of not calling the api every time the user search something.

another array is made to hold the filtered data from the reference array

The data will then be filtered to closest matual string 

Made componeneds fot table and rows and used bootstrap to style my table

