import PropTypes from 'prop-types';

function createGenStr(gen) {
  // console.log('start create generation string.');
  if (gen !== undefined) {
    // console.log('clear to check generation property.');
    // console.log('generation number : ', gen);
    if (gen === 1) {
      return gen + "st";
    } else if (gen === 2) {
      return gen + "nd";
    } else if (gen === 3) {
      return gen + "rd";
    } else {
      return gen + "th";
    }
  }
}

function Members(props) {
  return <div>Hi, I'm {props.name}. {createGenStr(props.gen)} generation member.</div>
}

Members.defaultProps = {
  gen: 0
}

Members.propTypes = {
  name: PropTypes.string.isRequired,
  gen: PropTypes.number
}

class profile {
  constructor(name, gen) {
    this.name = name;
    this.gen = gen;
  }
}

function App() {
  let profiles = [];
  profiles.push(new profile("Suisei"));
  profiles.push(new profile("Fubuki", 1));
  profiles.push(new profile("Ayame", 2));
  profiles.push(new profile("Polka", 5));

  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <Members name={profile.name} gen={profile.gen} key={index} />
        })
      }
    </div>
  );
}

export default App;
