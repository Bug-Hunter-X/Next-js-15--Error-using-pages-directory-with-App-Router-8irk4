```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>This is an example app.</p>
    </div>
  );
}
```
This code snippet will cause an error in Next.js 15 if you're using the App Router and have not created an `app` directory.  The App Router requires the `app` directory structure.  Attempting to use the pages directory with the App Router will result in a build error.