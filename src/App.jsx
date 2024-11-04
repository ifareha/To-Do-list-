
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Show from "./components/Show";

const App = () => {
  return (
    <div className=" border-t-2 w-screen h-screen bg-zinc-800 flex  items-center flex-col">
       <Header  />
       <Tasks />
        <Show   />
    </div>
);
};

export default App;