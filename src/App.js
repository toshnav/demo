import logo from './logo.svg';
import './App.css';
import Mycom from './components/Greet';
import Wellcome from './components/Wellcome';
import Message from './components/Message';
import Counter from './components/Counter';
import Greet from './components/Greet';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
function App() {
  return (
    <div className="App" >
      <UserGreeting />
      <NameList/>
      {/* <ParentComponent/> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind/> */}
      {/* <Counter/> */}
      {/* <Message/>     */}
      {/* <Greet name="RT" heroName="Toofan" />
  <Wellcome name = "Toshnav " heroName="Kobe"/> */}
    </div>
  );
}

export default App;
 