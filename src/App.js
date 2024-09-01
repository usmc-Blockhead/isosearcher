import logo from './assets/images/logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Future home of ISO Searcher.com
        </p>
        <form action="https://formsubmit.co/dcooper53@gmail.com" method="POST">
          <input type="text" name="name" placeholder='Name' required />
          <input type="email" name="email" placeholder='Email' required />
          <input type="hidden" name="_template" value="table" />
          <button type="submit">Send</button>
        </form>
        <p>Sign up for our newsletter and updates!</p>
      </header>
    </div>
  );
}

export default App;
