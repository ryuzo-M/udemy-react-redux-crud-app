
function App() {
  // return (
  //   <h1>
  //     Hello, world
  //   </h1>
  // );
  const greeting = "Hi, React!";
  let dom = <h1 className="foo">{greeting}</h1>;
  dom = <input type="button" value="Click!" onClick={() => {console.log("I am clicked.")}} />;
  return dom;
}

export default App;
