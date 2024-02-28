- Benefits of Parcel:

1. File Watcher Algorithm - C++
2. Bundling
3. Minify
4. Cleaning our code
5. Dev and Production build
6. Image optimization
7. Caching while development
8. Compression
9. Compatible with older version of browser
10. HTTPS on development server
11. Manages port number
12. Consistent Hashing Algorithm
13. Zero config require
14. Creates a server
15. Tree Shaking - Removing un-wanted packages

- JSX

1. JSX uses React.createElement() behind the scenes
2. JSX is converted to JavaScript
3. JSX -> React.createElement() -> Object -> HTML(DOM)
4. Babel converts the JSX into javascript

- React Components

1. Functional Components - NEW
2. Class based Components - OLD

- Functional component: It is a function which returns some peice of react element
- It is a convention (not necessarily) to write a component name starting with a capital letter
- We can write any piece of JS code inside {} braces
- Component Composition : Using component inside a component

- React Fragment: A jsx in react can have only one parent element. To overcome this issue, <React.Fragment></React.Fragment> or <></> is used to contain multiple parent element inside a jsx.

- Config Driven UI: Controlling our frontend driven by a config given from backend.

- Optional Chaining
- React Fibre
- Reconciliation

- Two types of import:

1. Named Import: It is done when a component is exported in the manner:
   export const Title = () => {
   return(
   <div></div>
   );
   };
   import {Title} from './components/Title'; // This way we are importing only one component,

2. Default Import: It is done when a component is exported as default.
   const Title = () => {
   return(
   <div></div>
   );
   };
   export default Title;
   import Title from './components/Title'; // Here we are importing everything that is exported as default.

- One-way Data Binding:

- Hooks: It is just a normal function which returns an array. The first value of this array is the variable name. The second value is a function to update the variable.
- useState(): It is used to create a state variable.
- useEffect(): It takes two arguments:
  1.  Firstly, it takes a callback function
  2.  Secondly, it takes a dependancy array.
- State Variable:

- Comparison between local variable creation in JS and local state variable in ReactJS using useState Hook:
  const searchText = "abc"; ---> JS
  const [searchText] = useState("abc"); ---> ReactJS

- Best practice to add API call is inside useEffect() hook with empty dependency array [], so that every time the component mounts or renders it will make an API call.

- useEffect() hook takes two things passed inside it:

  1. A callback function: It gets called after every render.
  2. A dependancy array: If it is empty, the callback function is called only once after initial render. If there's something present in the dependancy array then the callback will be executed whenever any value changes. If the dependancy array is not passed, useEffect will be called at every single render.

- react-router-dom: npm i react-router-dom
- BrowserRouter: Wraps all the routes with this tag.
- createBrowserRouter: used to create a router. It takes some configuration. This configuration is an array, i.e., it is a list of paths.
- RouterProvider: It is a component used to render according to the router, we need to provide this router to my root.render(). This RouterProvider is passed in root.render(<RouterProvider router={appRouter}/>)

#Types of routing

- Client Side Routing: The URL changes but no server request is made.
- Server Side Routing: The URL also changes but a server request is made.

- Link tag: It is just anchor tag behind the scenes.

- Outlet: It is a component which will be replaced by another component based on the route. All the children will go in the Outlet based on the route.

- useParams(): It is a hook which is used to read a dynamic URL.

# Things to remember:

- Nested routes
- Dynamic routes
- How to handle error in routes and create an error page for the same
- Create forms using Formik
