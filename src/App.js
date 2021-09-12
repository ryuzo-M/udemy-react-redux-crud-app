
function Members(props) {
  return <div>Hi, I'm {props.name}. {props.group} group member.</div>
}

Members.defaultProps = {
  group: "0th"
}

class profile {
  constructor(name, group) {
    this.name = name;
    this.group = group;
  }
}

function App() {
  let profiles = [];
  profiles.push(new profile("Fubuki", "1st"));
  profiles.push(new profile("Ayame", "2nd"));
  profiles.push(new profile("Polka", "5th"));
  profiles.push(new profile("Suisei"));

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <Members name={profile.name} group={profile.group} key={index} />
        })
      }
    </div>
  );
}

export default App;
