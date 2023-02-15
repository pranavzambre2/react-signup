import './App.css';
import Leftpannel from './Leftpannel';
import Rightpannel from './Rightpannel';
const App = () =>
(
  <div className="main flex flex-row">
    <Leftpannel className="left" />
    <Rightpannel className="right" />
  </div>
)


export default App;
