# Summative 1 School building area calculator READ ME
---

## Project overview
It was identified that when proposing the build of a new school, guidance on school size was not clear. The documentation was convoluted and hidden in file directories. This led to delays in the design and ultimately the delivery of new schools.<br>
A solution was needed to calculate the size of a new school based on the school type and the number of pupils attending. The solution should be clear and easy to use. Crucially the solution should be easily accessible eliminating the need to search through folder structures and documents.
## Design
The following design was produced in Figma and demonstrated to senior stakeholders for approval.
![Initial design of the proposed solution](https://github.com/a21am09/se_summative1/assets/152915109/c63c14a6-4931-4f4e-b111-1cf86f089d29)
## Project plan
The delivery plan for this project was an agile methodology with sprints. The initial MVP requirements were gathered and documented. However, the project was open to changing requirements. If a new requirement or change in functionality was needed the change was discussed and implemented if deemed necessary for the MVP. If this occurred, it was crucial all stakeholders knew of the change and the associated impacts to timescales.<br>
As this project was very small with limited stakeholders the sprints were also very short. Development work occurred in days rather than weeks.<br>
To track the progress of requirement gathering and development a GitHub Project board was used. Requirements and bugs were raised as issues on the board initially as backlog items. Once reviewed, if the issue should be worked on for the MVP the issue would move to ‘ready’. When picked up by a developer the issue moved to ‘in progress’ to indicate development work was underway. The time in ‘in progress’ varied depending on the complexity of the work. After the developer had finished their work and committed their changes the issue would be marked as ‘in review’. This stage is used to confirm if the functionality had been developed correctly and to the acceptance criteria documented in the issue. If a built component did not meet the acceptance criteria or otherwise failed the review the issue was passed back and forth between ‘in review’ and ‘in progress’. This continued until the build component was correct. When the built component was confirmed to be correct the issue was moved to the ‘done’ state. <br>
Critical information about the requirements or the build of the components were communicated through comments on the issue. This formed a log of the problems encountered and how they were resolved.<br>
Issues can be moved between states manually and often were for the ‘backlog’ and ‘ready’ states. After this they were assigned to work branches which meant the state of the issue was updated automatically as the work branch was changed, committed, pulled, and then merged.

## Tool MVP
The MVP of the school building area calculation consists of a graphical user interface and a function to calculate the school building area based on data entered by the user.<br>
The user interface is a html file, index.html, containing guidance text for the user and input controls. These have been formatted with the index.css style sheet.<br>
To perform the area calculation the schoolSizeCalculate function is defined in the index.js file. This function inputs two values, a type of school, and number of pupil places. It returns the building area needed for a school of the requirements given. If a type of school is entered that is not recognised an error will be returned. If text is entered as the number of pupil places an error will be returned informing this field is required to be a whole number. To correctly format the inputs of the function controls have been implemented in the index.html user interface file.<br>
Unit testing on the JavaScript function is performed with the jest test package. Test suites are documented in the index.test.js test script. All unit tests at the end of MVP development are passing.<br>
The user journey through the tool starts with the user accessing the html user interface. After inputting values for school type and number of pupil places the calculate button can be pressed. This triggers the submission of the html form component. The submission of the form calls the schoolSizeCalculate function passing in the two values provided by the user. The output of the function is displayed in a header underneath the user inputs.

##Tool construction
Before development commenced a GitHub repository was created and linked to a project board. The repository would be the data store for the project. Issues were created for small build components. These contained descriptions of the component that needed to be build, a user story statement in the form of “as a…I need…so that...”, and acceptance criteria. All issues were labelled appropriately with the set labels in GitHub. These issues were labelled as enhancements.
Once the initial set of issues were created the development could begin. A developer would be assigned to an issue to build the functionality described. The developer would begin by cloning the repository to their local machine and creating a new branch for their work. All new work was contained within its own branch to keep to a concept of one feature linked to one issue linked to one branch. The developer then built the described functionality ensuring that what was built met the acceptance criteria. Any questions or technical issues were communicated as comments on the issue.
Any changes made to the JavaScript function required additional unit tests to be constructed. The new tests must pass in addition to the existing tests for the development to be considered complete.
Once development on the feature was complete any changes to the repository files are staged and committed. The committed changes were reviewed in GitHub to include meaningful titles and descriptions of the changes made.
A pull request was then made from the commit where the changes are reviewed again to confirm they meet the acceptance criteria and do not negatively affect the existing code. Unit test results are also checked in this review. Once JavaScript functions were built the Node.js workflow was applied to the repository. After modifying the yml file to work with Node.js v21 the workflow executed all unit tests once the pull request was created. This highlighted any failing tests during the review. The review is performed by a senior developer who will decide whether to merge the branch into the main branch or reject the pull request. If the branch is merged the work item branch is removed.
The number and types of issues created was dynamic and could be added to as work was identified. This occurred with bugs from testing and could happen for a change in requirements.
Once initial requirements were set out in issues the school building area calculator was built starting with the basic text and guidance on a user interface. Afterwards the input controls to drive the area calculation were added. Separately the JavaScript function was developed independently of the user interface. A background image and user interface formatting were completed next. Finaly the html code was modified to include the JavaScript function. To call the calculation function, pass in parameters from the user, and display the result to the user. Bugs were identified and fixed continuously thoughout development.

## Evaluation
This tool is limited in its scope but meets the MVP requirements for a solution. The tool has been laid out simply with enough guidance that extra documentation would not be required by a novice user. Standard black text and white input boxes ensure the tool is accessible. The background transparency has also been increased to maintain sufficient contrast between itself and the tool content.<br>
The functionality of the tool has been designed as such to prevent users entering incorrect values. The type of school input is a drop-down box. This enforces only specific values and prevents errors when running the school area calculation. Furthermore, the pupil places input accepts only positive whole numbers. This fits with the logic of the numbers representing people. Error handling has been coded into the school area calculation function to return a meaningful error to user if text is entered instead of numbers. Due to a change in the input form this error message is now redundant but will provide useful functionality if the school area calculation function is used for another tool.<br>
Despite being a simple tool, the design could be improved to make the user interface more professional. The controls to input data are small and look outdated. Modifications to the styling would make them more modern looking and appealing to the user. The inputs are also aligned to the centre of the screen. Since they are not the same size they appear out of alignment. Due to technical capability and time constrains this could not be rectified. Aligning the inputs to the same position and size, as shown in the initial Figma design, would improve the look of the tool.
