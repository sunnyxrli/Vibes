Vibes
Smile at work

Hi-Fi Prototype Readme
Link: https://expo.io/@sunnyxrli/Vibes
Tommy Bruzzese, Sunny Li, Juliet Okwara, Misbah Surani

Operating Instructions:
This prototype was developed for the iPhone X using React Native, Firebase, and Expo. The .zip file of the GitHub repository can be downloaded from our website http://hci.stanford.edu/courses/cs147/2019/au/projects/HealthandWellness/Vibes.

iOS:
Go to the App Store.
Download Expo Client.
Login to Expo Client with the following information:
Username: sunnyxrli
Password: teamVibes
Go to the Profile tab in Expo Client.
Under published projects, click Vibes.

Android:
Go to the App Store.
Download Expo Client.
Go to https://expo.io/@sunnyxrli/Vibes.
Scan the QR code on the right side of the screen.

Wizard of Oz:
To easily show the effect of each mood in the demo, the mood that was last checked-in by the user becomes the team’s mood (as opposed to what would be an average of all the different moods checked-in that day).

Hard Coded Features:
The user (Charlie) that everyone must login as is hard-coded.
Vibes comes preloaded with hard-coded team members, “Team Thoughts” and “Team Tasks.”
Users can write any Team Thought they want, and it will post to a running database feed; however, the Team Task created by the user is hard-coded, so specific text, dates, and categories have to be selected when creating the task.
Team Task categories, teammates, expiration dates, and action items in each task come preloaded and have been hard-coded.
The “More Data” popup overlap is hard-coded but changes with the associated mood.

Limitations:
Vibes does not support a fully-implemented user sign-up and log-in process. There is no option for the creation of a new user account. Users can only log-in as the provided user account by tapping on the password field on the Login page to autofill data.
The first check-in of the day is required.
Because updating the “Tasks You’ve Joined” section of the Team Tasks page is not directly involved in our task flow and demo script,  joining a task will not add that task to the “Tasks You’ve Joined” section.
The “Action Items” list for each task supports the addition of a single “Action Item.” After that “Action Item” has been added by clicking the plus button, no other additions are supported.
Once the application is exited and restarted, certain parts of the app are reset such as the mood info, liked thoughts, and action items and tasks that are added and completed. However, thoughts will persist due to the usage of the Firebase.
In a real, fully-functionally version of the app, there would be other features such as a tutorial explaining the correlation between team mood and colors, an overview of how to use the app, and user profile pages.

Tasks Info and Pointers
Tasks:
Check how your team is feeling.
Contribute to the Team Thoughts.
Create a Team Task from a Team Thought.
Complete the Miami Trip Team Task (because you just did all the required to-do's) .
Join and view the action items of a Team Task you are interested in.

Pointers:
Action Items must be claimed before they can be completed. 
Action Items can be undone.

