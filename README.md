# Messaging Center

### Summary
This front-end project was designed to demo an inbox / messaging platform. It was built using React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 

### Installation & Getting Started

Navigate to the project directory. From the command line:

`npm install`

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Decisions & Important Notes
As this project is meant to serve as a demo, I chose not to incorporate a back end. The data are imported directly onto the component `message-index.jsx`. The message delete functionality is handled by front end state and will only persist until page reload. 

Messages are sorted by a function stored in `/src/util/message-util.js`. First, duplicate pairs of sender uuid and content are removed by storing the messages in a hash table. The remaining unique messages are then plugged into a sorting function. To test this functionality:

* add JSON file to the `src` folder. Be sure that the JSON is structured identically to the sample `data.json`:
```JSON
{ "messages": [
        {
        "sentAt":...,
         "uuid":...,
         "content":...,
         "senderUuid":...},
        ]
}
```

* import file onto `messages-index.jsx`. The sorting function is already imported

* create a variable to hold your sorted data, e.g.: `var sortedMessages = sortData(messages);`, where `messages` is the data you imported from your JSON and `sortData` is the imported sorting function

When incorporated, I recommend handling the sort/remove duplicates functionality on the backend. This will reduce the content size of the file, therefore reducing bandwidth. It will also avoid unnecessary work on the frontend, which will be important if we have multiple platforms (iOS/android + web).