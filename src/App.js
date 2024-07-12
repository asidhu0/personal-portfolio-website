import './App.css';
import NavBar from './components/NavBar/NavBar';
import WebsitePage from './WebsitePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <WebsitePage />
      </header>
      {/* <p className="text-fdsajlkfkdsl">
        All user input is parsed into a linked list to efficiently manage commands, arguments, and symbols like pipes and redirection
        The system call, fork(), us used to create a new child process which uses the input data to run the command using execvp()
        sshell supports output redirection and piping, including complex scenarios with multiple pipes by properly managing file descriptors
        Environment variables can be set and used and robust error management ensures incorrect command usage does not happen
        There are three built in commands (pwd, cd, exit) that execute without forking new processes using functions such as chdir() and getcwd()
      </p> */}
    </div>
  );
}

export default App;
