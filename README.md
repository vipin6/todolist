# todolist

Welcome to the To-Do List project repository! This web application allows you to create, manage, and delete tasks with ease. It was built using HTML, CSS, JavaScript, and Bootstrap for the frontend, 
and MongoDB serves as the database for task storage.

**Table of Contents**

1) Project Overview

2) How it Works

3) Why MongoDB

4) Getting Started
   
   4.1) Prerequisites

   4.2) Installation
  
5) Usage

6) Lessons Learned

7) Contact

**Project Overview**

The To-Do List project provides a simple and user-friendly way to manage tasks. Here's a brief overview of its features:

**Task Creation:** You can add tasks by clicking on the "+" icon on the screen, entering the task name, and pressing Enter.

**Task Deletion:** Completed tasks can be deleted by clicking on the checkbox in front of the task name.

**How it Works**

The project follows a straightforward process:

**Frontend Interface:** The HTML, CSS, and Bootstrap components create the user interface for adding and displaying tasks.

**JavaScript:** JavaScript is used to handle user interactions. When you add a task, JavaScript sends a request to the server with the task details. When you delete a task, it sends a request to delete 
the task from the database.

**MongoDB:** MongoDB is used as the database to store task data. Each task is represented as a document in a MongoDB collection.

**Why MongoDB?**

MongoDB was chosen for this project due to its flexibility and ease of use with JavaScript. Its JSON-like document format aligns well with the structure of task data. 
MongoDB also allows for straightforward querying and updating of data, making it a suitable choice for managing tasks.

**Getting Started**

**Prerequisites**

Before you begin, ensure you have the following prerequisites:

> Node.js

> MongoDB
1) Installation

     Clone this repository: git clone https://github.com/vipin6/mytodo-master

2) Navigate to the project directory:
   
       cd mytodo-master

4) Install dependencies:
   
        npm install

6) Start the server:
   
       npm start

The application should now be accessible at http://localhost:3000.

**Usage**

1. Visit the website at http://localhost:3000.

2. Click the "+" icon to add a task.

3. Enter the task name and press Enter to save it.

4. To delete a completed task, click the checkbox in front of the task name.

**Lessons Learned**

During the development of this project, I gained valuable experience in:

1. Building a dynamic web application with HTML, CSS, JavaScript, and Bootstrap.

2. Implementing CRUD (Create, Read, Update, Delete) functionality.

3. Integrating MongoDB as a backend database.

4. Handling user interactions and data management asynchronously with JavaScript.

**To implement the functionality that deletes a task when a checkbox is checked, you can use JavaScript to listen for the checkbox change event and then remove the corresponding task from both the frontend 
and the MongoDB database. Here's a simplified code snippet to demonstrate this process:**

**Contact**

If you have any questions or suggestions, please feel free to contact the project maintainer:

Vipin

GitHub: https://github.com/vipin6
Email: vipinlamba.2706@gmail.com
