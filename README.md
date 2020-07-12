
##  Description

A simple CMD application that allow user to  access data from the SQL server using NODE and also, the user can mainpulate the data by deleting from the record, updating the record or just viewing the record,. 


## Installation

This application requires MySQL (run "npm install mysql" in your terminal), and Inquirer (run 'npm install inquirer' also, might need to install " npm install" for the node_modules [mightNoteBeNeeded]). 

## Usage

![Database Schema](Assets/SQLNodeJS.mkv)

After installing MySQL and Inquirer, run the server.js file from the command line of your terminal. This will bring up a set of questions asking you what you would like to do to the database holding your employees. You are given the option to view, delete, or update existing information about employees. Once you are done making changes, you can end the application and the connection to your database will be ended.
License


![Database Schema](Assets/schema.png)


  


## Bonus

* The command-line application should allow users to:

  * Update employee managers

  * View employees by manager

  * Delete departments, roles, and employees

  * View the total utilized budget of a department -- ie the combined salaries of all employees in that department

