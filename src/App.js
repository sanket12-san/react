import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar";
import Heading from "./heading"
import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';



class App extends Component {
  componentDidMount() {
    addResponseMessage("If you are feeling down, try holding a pencil between your top lip and your nose for five minutes.");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  }
 
  render() {
    return (
      <div >
<Navbar />
<Heading />

        <Chat
          handleNewUserMessage={this.handleNewUserMessage}
          title="Hi There"
          sendPlaceHolder='Write A Reply..'
          subtitle="This team Responds"
        />
      </div>
    );
  }
}

export default App;
