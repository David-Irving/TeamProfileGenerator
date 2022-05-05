# Team Profile Generator
![University of Denver Logog](https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/denver-switchup-thumbnail-a/original.png?1560210160)
## Acceptance Criteria
### GIVEN a command-line application that accepts user input
 |When       | Then
 | --------- |--------
 | I am prompted for my team members and their information | an HTML file is generated that displays a nicely formatted team roster based on user input
 | I click on an email address in the HTML | my default email program opens and populates the TO field of the email with the address
 | I click on the GitHub username | that GitHub profile opens in a new tab
 | I start the application | I am prompted to enter the team manager’s name, employee ID, email address, and office number
 | I enter the team manager’s name, employee ID, email address, and office number | I am presented with a menu with the option to add an engineer or an intern or to finish building my team
 | I select the engineer option | I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu 
 | I select the intern option | I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
 | I decide to finish building my team | I exit the application, and the HTML is generated
 ## Grading Requirements

**Note** If a Challenge assignment submission is marked as “0”, it is considered incomplete and will not count towards your graduation requirements. Examples of incomplete submissions include the following:
 * A repository that has no code
 * A repository that includes a unique name but nothing else
 * A repository that includes only a README file but nothing else
 * A repository that only includes starter code

### Deliverables: 15%
 * A sample HTML file generated using the application must be submitted.
 * Your GitHub repository containing your application code.
### Walkthrough Video: 32%
 * A walkthrough video that demonstrates the functionality of the Team Profile Generator and passing tests must be submitted, and a link to the video should be included in your README file.
 * The walkthrough video must show all four tests passing from the command line.
 * The walkthrough video must demonstrate how a user would invoke the application from the command line.
 * The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.
 * The walkthrough video must demonstrate a generated HTML file that matches the user input.
### Technical Acceptance Criteria: 40%
 * Satisfies all of the preceding acceptance criteria plus the following:
 * Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).
 * Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.
 * The application must have `Employee`, `Manager`, `Engineer`, and `Intern` classes.
### Repository Quality: 13%
 * Repository has a unique name.
 * Repository follows best practices for file structure and naming conventions.]
 * Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
 * Repository contains multiple descriptive commit messages.
 * Repository contains a high-quality readme with description and a link to a walkthrough video.
### Repository Link
 * https://github.com/David-Irving/TeamProfileGenerator

### Preview of Application
