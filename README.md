# Module 3 -- Pet Project

Create a small application that retrieves data from Github's Stack Builders organization. For this, you'll use Github's public API:  https://docs.github.com/en/rest/reference/repos#list-organization-repositories. 
 
The application should show: 
- Repositories with more than 5 stars
- Last 5 updated repositories 
- Sum of all repository stars 

Considerations: 
- Each functionality can be a function
- Try to make pure functions wherever possible.
- Include unit tests and test coverage
    - Unit tests may not connect to GitHub, but use a fixture with preprocessed data
