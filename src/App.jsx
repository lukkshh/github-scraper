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
      <div className="w-full h-screen bg-slate-900 flex justify-center items-center ">
        {/* Buttons Side */}
        <section className="bg-slate-800 w-1/4 h-screen flex justify-center items-center flex-col ">
          <button
            onClick={() => {
              SetView("ViewProfile");
            }}
            className="bg-slate-700	 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full m-2 h-12 w-4/5"
          >
            View Profile
          </button>
          <button
            onClick={() => {
              SetView("ViewFollowers");
            }}
            className="bg-slate-700	 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full m-2 h-12 w-4/5"
          >
            View Followers
          </button>
          <button
            onClick={() => {
              SetView("ViewFollowings");
            }}
            className="bg-slate-700	 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded-full m-2 h-12 w-4/5"
          >
            View Followings
          </button>
        </section>

        {/* Preview Side */}
        <section className="bg-slate-800 w-3/4 h-screen">
          <ViewPage />
        </section>
      </div>
    </>
  );
}

export default App;
