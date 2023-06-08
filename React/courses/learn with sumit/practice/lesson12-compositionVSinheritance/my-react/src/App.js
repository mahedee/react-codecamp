import logo from './logo.svg';
import './App.css';
import Emoji from './components/composition/Emoji';
import Bracket from './components/composition/Bracket';
import Text from './components/composition/Text';
// import Text from './components/inheritence/Text'


function App() {
  // return <Text />;

  // send addEmoji function to Text component as child of Emoji
  // just wrapping as child

  // return <Emoji>
  //   {({ addEmoji }) => <Text addEmoji = {addEmoji} />}
  // </Emoji>
  return(
    <Emoji>
      {({addEmoji}) => (
        <Bracket>
        {({addBracket}) => <Text addEmoji={addEmoji} 
        addBracket ={addBracket} />}
        </Bracket>
      )}
    </Emoji>
  );
}

export default App;
