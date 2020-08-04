# Relateness
A React on Rails app that allows managers and leaders keep track of their direct report's basic employment information (Date of hire, birthdate, etc.) as well as their personal interests.  The idea is to allow managers and leaders to better relate to their direct reports on a day-to-day basis by being able to relate to the interests held by their employee(s).  Relateness uses NewsAPI to fetch articles related to the employee's interests.

# Usage
Relateness was built with a Rails/SQLite backend and a React front end, and Redux to manage global state between React componenets.
```
git clone https://github.com/ChrisPhilbin/relateness.git
npm i
rails db:migrate
rails s
```

# Feature Roadmap
- Clean up CSS and overall layout
- Finish the edit employee form
- Implement daily email digest sent to users with updates on their employee's interests
- Allow user to select how many interest items are shown from the News API