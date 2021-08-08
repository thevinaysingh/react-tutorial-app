This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

## Git cheatsheet

[source1](https://www.techiediaries.com/delete-local-remote-git-branches/)

### Remove All Local Branches not on Remote

$ git branch -r | egrep -v -f /dev/fd/0 <(git branch -vv | grep origin) | xargs git branch -d

Let's break this command:

First we get all remote branches using the git branch -rcommand
Next, we get the local branches not on the remote using theegrep -v -f /dev/fd/0 <(git branch -vv | grep origin) command,
Finally we delete the branches using the xargs git branch -d command.

### Delete All Your Local Git Branches Except Master

$ git branch | grep -v "master" | xargs git branch -D
We use the grep -v "master" command to search for branches except the master then we delete them using the git branch -D command.

### Delete Local and Remote Branch

$ git branch --merged // Checked merged branch
$ git branch -d branch-name // Delete local Branch
$ git push --delete origin branch-name // Delete remote branch

### How do I sync local and remote branches?

git fetch --prune

### How to change the URI (URL) for a remote Git repository?

git remote set-url origin https://github.com/thevinaysingh/react-tutorial-app.git
