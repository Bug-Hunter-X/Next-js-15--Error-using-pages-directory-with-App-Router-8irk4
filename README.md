# Next.js 15 App Router Error: Using pages directory with App Router

This repository demonstrates a common error encountered when migrating or working with Next.js 15's App Router.  The error arises from attempting to use the traditional `pages` directory structure while the App Router is enabled.

## Problem

When using the App Router, the `pages` directory is ignored.  Attempting to render components placed within `pages` will result in a build failure, with the app not rendering.

## Solution

The solution is to refactor your application to use the new `app` directory structure.  Move all of your page components and related files into the `app` directory following the App Router conventions.

## How to Reproduce

1.  Create a Next.js 15 app using the App Router.
2.  Place a component (e.g., `pages/index.js`) within the `pages` directory. 
3.  Attempt to build and run the application. 
4. Observe the build error.

## Files

* `bug.js` : Shows the faulty code using `pages` directory with App Router.
* `bugSolution.js` : Shows the corrected code using the `app` directory.
