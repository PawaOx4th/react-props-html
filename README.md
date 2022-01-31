# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## In code.

**Note: Example Input element pass props follow input element.!**

        import React from  "react"
    
      
    
    /**
    
    * Example : 1
    
    * It's a React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
    
    */
    
    // type TPropsInput = {} & React.DetailedHTMLProps<
    
    // React.InputHTMLAttributes<HTMLInputElement>,
    
    // HTMLInputElement
    
    // >
    
      
    
    /**
    
    * Example : 2
    
    * The `input` element is a built-in React element.
    
    */
    
    // type TPropsInput = JSX.IntrinsicElements["input"]
    
      
    
    /**
    
    * Example : 3
    
    * It's a React component that has a `ref` property.
    
    */
    
    // type TPropsInput = React.ComponentPropsWithRef<"input">
    
      
    
    /**
    
    * Example : 4
    
    * The type of the props of the React component that is returned by the function.
    
    */
    
    type  TPropsInput  =  React.ComponentPropsWithoutRef<"input">
    
      
    
    export  function  Input({ ...props }:  TPropsInput) {
    
    return  <input  type="text" {...props} />
    
    }

