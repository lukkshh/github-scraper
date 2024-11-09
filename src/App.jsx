import "./App.css";
import { useState } from "react";
import ViewProfile from "./components/ViewProfile";
import ViewFollowers from "./components/ViewFollowers";
import ViewFollowings from "./components/ViewFollowings";

function App() {
  const [View, SetView] = useState("ViewProfile");

  const ViewPage = () => {
    switch (View) {
      case "ViewProfile":
        return <ViewProfile />;
        break;
      case "ViewFollowers":
        return <ViewFollowers />;
        break;
      case "ViewFollowings":
        return <ViewFollowings />;
        break;
    }
  };
  return (
    <>
      <div className="w-full  flex flex-col justify-center items-center ">
        <section className="bg-slate-900 w-full flex justify-center items-center max-sm:w-full max-sm:h-auto ">
          <button
            onClick={() => {
              SetView("ViewProfile");
            }}
            className="bg-slate-700	max-sm:text-xs hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full m-2 h-12 "
          >
            View Profile
          </button>
          <button
            onClick={() => {
              SetView("ViewFollowers");
            }}
            className="bg-slate-700	max-sm:text-xs hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full m-2 h-12 "
          >
            View Followers
          </button>
          <button
            onClick={() => {
              SetView("ViewFollowings");
            }}
            className="bg-slate-700	max-sm:text-xs hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full m-2 h-12 "
          >
            View Followings
          </button>
        </section>
        <section className="bg-slate-800 w-full ">
          <ViewPage />
        </section>
      </div>
    </>
  );
}

export default App;
