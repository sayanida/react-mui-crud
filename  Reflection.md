# Assessment Reflection

### AI Acknowledgement
_**I acknowledge the use of ChatGPT in the following ways (OpenAI, 2025):**_
- To check the correct syntax and coding practices for React and MUI
- To assist in understanding error messages
- To support questions and understanding regarding the implementation of dialogs and tables
- To aid in interpreting the assignment requirements and organising related concepts

<small>All coding and implementation work was done by myself. AI tools were used solely to aid understanding and were not employed to generate answers or complete code.

## 1. Task Completion
_**How far through did you get in the task? Did you complete it all?**_

- I was unable to complete all tasks, mainly the Edit and Delete functions. When selecting a row and clicking the “Edit” or “Delete” buttons, the row was not correctly recognized, preventing editing or deletion. I was also unable to work on the Optional Extension.    

## Goals
| Category | Task | Details | Status |
|----------|------|---------|--------|
| **Grid View** | Implement a Grid view | Show a table view of user data using MUI Grid | ✅ |
| **CRUD Actions** | Create | Add a new user | ✅ |
| | Read | Open a user to view property values | ✅ |
| | Update | Edit an existing user and save it | ❌ |
| | Delete | Remove a user from the data set | ❌ |

## Requirements
| Category | Task | Details | Status |
|----------|------|---------|--------|
| **MUI Components** | Use only MUI library components | Ensure all UI elements come from MUI | ✅ |
| **Grid Features** | Columns | Show a column for each data field | ✅ |
| | Sorting | Allow columns to be sorted | ✅ |
| | Filtering | Disable Grid filtering | ✅ |
| | Toolbar | Include toolbar for action buttons | ✅ |
| **User Data** | Properties | First Name, Last Name, Age | ✅ |
| | Input Types | Use appropriate input type for each property | ✅ |
| **Actions in Toolbar** | Add New | Add a new user to the grid | ✅ |
| | Edit | Select an existing user to edit | ❌ |
| | Delete | Select a user in the grid to delete | ❌ |
| **User Dialog** | CRUD via Dialog | Implement all CRUD actions via dialog | ❌ |
| **Design** | MUI Theme | Use default MUI theme | ✅ |
| | Icons | Include Material Icons where appropriate | ✅ |
| | Layout | Ensure Grid is responsive and add a simple title | ✅ |



## 2. Task Breakdown
_**What was your process for breaking down the tasks into manageable steps?**_  

- I divided tasks and branch as follows:
    - **feature/setup**　→ first setup and installing MUI
    - **feature/grid-display** → Create Grid table
    - **feature/add-user-dialog** → Create Dialog for “Add New” function
    - **refactor/add-user-dialog** → Create Dialog for “ReadOnly”function
    - **feature/edit-user** → Create Dialog for “Edit” function
    - **feature/delete-user** → Create Dialog for  “Delete” function
    - **feature/layout** → Add style (title and responsive break point)
    - **docs/add-reflection-md**　→ create reflection md file

## 3. Challenges / Difficult Learning
_**Which aspects posed a problem or difficult learning for you?**_

- Several aspects of this assignment posed challenges and required further learning:
    - Managing state for selected rows in the DataGrid
    - Handling Dialog open/close
    - **Component Imports**: I frequently forgot to import necessary components, which caused most of the errors.
	- **Add/Save Functionality**: Implementing the Add and Save actions was difficult. I was unsure how to write the code, as my previous experience was mainly with static HTML and CSS. Understanding JavaScript syntax and making the user data dynamically update the table required a lot of time.
	- **Code Organization**: Initially, I wrote all code in App.js, but as the code grew complex, I realized the need to separate functionality into different components. Following AI advice, I learned to split the code into reusable components:
        - **App.js**: Root component, renders the overall app and includes GridTable.
        - **GridTable.js**: Handles main logic, state management, DataGrid display, user data management, and dialog control.
        - **UserDialog.js**: UI for input forms, receives all state from parent.
        - **Toolbar.js**: Displays Add/Edit/Delete buttons, with logic handled by parent via events.
    This taught me the importance of writing flexible, maintainable code and understanding inter-component communication.   
    - **Props** vs **State**: I found it challenging to fully grasp the differences between props and state, especially when passing data and events between components.

- 


## 4. Thoughts on MUI Library
_**What do you think of the MUI library?**_

- I used to designing from scratch using HTML and CSS, but I think using MUI significantly reduce the amount of time I spent on development and made it feel like I will be able to develop more efficiently. 
- I learned MUI is a convenient library that lets us quickly create professional UI. 
- The components are flexible, support responsiveness out of the box, and styling using the sx property is very easy. 
- Components with many settings, such as DataGrid, feel a bit complicated to me and I'm still not used to Dialog so I feel like I need to study more.

## 5. Maintainability
_**Talk about a particular aspect/element and why you think it would be easy to maintain.**_

- I found that dividing components into smaller parts and managing them allowed for very efficient management.
- The UserDialog component supports all user operations, including Add, Edit, and Read, so if implemented correctly, - I think it will be easy to reuse and maintain. By passing properties such as editing and readOnly, I can reuse the same component for different purposes, reducing code duplication.

## 6. Technical Questions
_**Do you have any technical questions after completing this task?**_

1. As a beginner/junior developer, I use AI tools to help me understand concepts or solutions that I don’t fully grasp yet. For example, I ask AI for sample code or explanations, and then study and adapt them to ensure I actually understand the solution. However, sometimes I am unsure whether I’m approaching it correctly or fully understanding it. 

    From a professional perspective:  
    - **What is the recommended way for beginners or junior developers to use AI during learning and development?**  
    - **Which AI tools do professionals use, and how do they integrate them into their workflow?**