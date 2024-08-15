# ReachInbox Technical Assignment

This project is a technical assignment that implements a functional web app using the provided designs and APIs. The app includes features such as user authentication, email management, keyboard shortcuts, a custom text editor, and support for both light and dark modes.

## Installation and Running Locally

To install and run the project on your local system, follow these steps:

1. Clone the repository:
```
git clone "project_url"
```
Navigate to the project directory:
```


cd reachinbox
```
Install the dependencies:

Using npm:
```

npm install
```
Or using Yarn:

```
yarn
```
Run the development server:

Using npm:

```

npm run dev
```
Or using Yarn:
```

yarn run dev
```
Project Features
1. Login Page
Implement the login page using the provided design.
After a successful login, the user will be redirected to the Onebox screen.
2. Onebox Screen
Fetch and display data in the Onebox screen using the following API integrations:
GET /onebox/list
GET /onebox/:thread_id
DELETE /onebox/:thread_id
3. Keyboard Shortcuts
Implement keyboard shortcuts in the Onebox screen:
Pressing "D" should delete a thread.
Pressing "R" should open the Reply box.
4. Custom Text Editor
Implement a custom text editor with the following features:
Add a custom "SAVE" button.
Add a "Variables" button to insert predefined variables.
5. Reply Functionality
Implement the Reply functionality:
Clicking on "Send" should send the reply using the following API:
POST /reply/:thread_id
Payload:
json

{
  "from": "email",
  "to": "email",
  "subject": "",
  "body": "<html></html>"
}
6. Light and Dark Mode
Implement both light and dark mode support across the entire app.
Conclusion
This project showcases the implementation of various features using modern web development practices. It adheres to the provided designs and integrates with the specified APIs to create a functional and user-friendly web application.

arduino


Make sure to replace `"/github-url-of-the-project"` with the actual GitHub URL of your project. Th

