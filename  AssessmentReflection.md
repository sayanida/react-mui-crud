# Assessment Reflection

### AI Acknowledgement
_**I acknowledge the use of ChatGPT in the following ways (OpenAI, 2025):**_
- To check the correct syntax and coding practices for React and MUI
- To assist in understanding error messages
- To support questions and understanding regarding the implementation of dialogs and tables
- To aid in interpreting the assignment requirements and organising related concepts

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

1. Build the UI layout and basic appearance (table, buttons, dialog placement)
2. Gradually add functionality step by step (Add → View → Edit → Delete)
3. Adjust styling and layout to make the interface clean and responsive.

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

- **Props** vs **State**: I found it challenging to fully grasp the differences between props and state, particularly when passing data and handling events between components, and I still need to deepen my understanding of communication and coordination between parent and child components.  
    - Managing state for selected rows in the DataGrid
    - Handling Dialog open/close
- **Add/Save Functionality**: Implementing the Add and Save actions was difficult. I was unsure how to write the code, as my previous experience was mainly with static HTML and CSS. Understanding JavaScript syntax and making the user data dynamically update the table required a lot of time.
- **Code Organization**: Initially, I wrote all code in App.js, but as the code grew complex, I realized the need to separate functionality into different components. This taught me the importance of writing flexible, maintainable code and understanding inter-component communication. 
Following AI advice, I learned to split the code into reusable components:
    - **App.js**: Root component, renders the overall app and includes GridTable.
    - **GridTable.js**: Handles main logic, state management, DataGrid display, user data management, and dialog control.
    - **UserDialog.js**: UI for input forms, receives all state from parent.
    - **Toolbar.js**: Displays Add/Edit/Delete buttons, with logic handled by parent via events.
    - **GridTable.js** is the **parent component**, and **UserDialog.js** and **Toolbar.js** are the **child components**.   


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

1. What is the recommended way for beginners or junior developers to use AI during learning and development?

2. Which AI tools for development do professionals use, and how do they integrate them into their workflow?

3. What kind of application or small project should I try building next to continue improving?

4. Which parts of my code structure or state management that you think I should improve or restructure?

5. When you were starting out, what parts of React or JavaScript did you find the most challenging, and how did you work through them?

6. For junior roles, which skills or habits do employers value the most?


