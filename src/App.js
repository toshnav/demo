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
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
function App() {
  return (
    <div className="App" >
      <Form/>
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <Inline/> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <UserGreeting />
      <NameList/> */}
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
 