import Newtask from "./components/Newtask";
import Describe from "./components/Describe";
import Setting from "./components/Setting";
import Suggest from "./components/Suggest";
import Post from "./components/Post";
import Foot from "./components/Foot";
function App() {
  return (
    <div className="App">
      <Newtask />
      <Describe />
      <Setting />
      <Suggest />
      <Post />
      <Foot />
    </div>
  );
}

export default App;