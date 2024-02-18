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
