# typescript-nodejs-react-server-redux-webpack
This is an example project showcasing multi-page server side React rendering. The use-case is to create a React website which is SEO-friendly and has a very fast first load.
React Components are interchangeable between server and client applications and in order to have it work correctly, server-side state must be transfered to the client so the React Components start out with the correct states. To achieve this we make use of Redux.

Most React-Redux examples one can find on the web are mostly very simple example applications like ToDo lists which don't reflect how a more complex website could be implemented. So in this example project I showcase a more complex React-Redux application with multiple components, compositions and component iterations while altogether having a normalized Redux store to support it.

# Installation, build and run
1. Run `npm install`
1. Run `gulp watch` to build and keep a watch on the project for changes.
    1. or run `gulp watch-release` if you want to build a release version using production ReactJS.
    1. or if you only want to run the build once. You can run `gulp build` or `gulp release`.
1. Run `npm run dev` to start the webserver in development mode.
    1. For Windows run `npm run devw`
  
