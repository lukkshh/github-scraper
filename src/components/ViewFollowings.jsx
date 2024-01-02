import { useState } from "react";
import Loading from "./Loading";

const ViewFollowings = () => {
  const [Bp, SetBp] = useState(false);
  const [Error, SetError] = useState(null);
  const [UserData, SetData] = useState([]);
  const [Username, SetUsername] = useState("");
  const [isLoading, SetLoading] = useState(false);

  const Display = () => {
    return (
      <>
        {isLoading ? (
          <Loading />
        ) : Error ? (
          <div className="w-full h-full flex items-center justify-center text-white font-bold">
            {Error}
          </div>
        ) : (
          <div className="bg-slate-700 m-2 w-full h-full rounded-3xl overflow-y-scroll flex flex-wrap justify-evenly items-baseline">
            {UserData.map((user) => (
              <div
                key={user.id}
                className="flex justify-around items-center rounded-3xl m-2 p-3 h-18 w-52 bg-slate-500"
              >
                <img
                  src={user.avatar_url}
                  className="w-16 h-16 rounded-full"
                  alt=""
                />
                <div>
                  <p className="text-white font-bold">{user.login}</p>
                  <a
                    target="_blank"
                    href={user.html_url}
                    className=" text-white"
                  >
                    Profile link
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </>
    );
  };

  const FetchData = async () => {
    try {
      SetBp(true);
      SetLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${Username}/following`
      );
      const data = await response.json();
      SetData(data);
      SetLoading(false);
      if (response.status === 404) {
        SetError(data.message);
        SetLoading(false);
        return;
      }
      if (response.status === 403) {
        SetError(data.message);
        SetLoading(false);
        return;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      SetLoading(false);
    }
  };

  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <div className=" bg-slate-700 w-4/5 h-20 m-2 rounded-3xl flex justify-center items-center">
        <p className="bg-slate-900 h-1/2 w-2/12 rounded-3xl flex justify-center items-center font-bold text-white">
          View Followings
        </p>
        <input
          type="text"
          onChange={(e) => {
            SetUsername(e.target.value);
          }}
          placeholder="Github Username"
          className="bg-slate-900 text-white rounded-3xl p-4 m-2 w-4/6 h-1/2"
        />
        <button
          onClick={FetchData}
          className="bg-slate-900	 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded-full"
        >
          Search
        </button>
      </div>
      <div className="bg-slate-700 m-2 w-4/5 h-3/5 rounded-3xl">
        {Bp ? <Display /> : ""}
      </div>
    </section>
  );
};

export default ViewFollowings;
