import { useState } from "react";
import Loading from "./Loading";

const ViewProfile = () => {
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
          <div className="w-full h-full flex flex-col items-center justify-center text-white">
            <div className="w-full h-2/5 p-2 flex items-center justify-center">
              <img
                className="w-[25%] h-[90%] rounded-[50%]"
                src={UserData.avatar_url}
                alt=""
              />
            </div>
            <div className="w-full h-3/5 flex flex-col justify-center items-center">
              <p className="w-full h-1/5 flex items-center justify-center text-xl font-bold">
                {UserData.login}
              </p>
              <div className="w-full h-4/5 flex items-center justify-around">
                <ul className="list-disc">
                  <li>
                    Name: <span className="font-bold">{UserData.name}</span>
                  </li>
                  <li>
                    Email: <span className="font-bold">{UserData.email}</span>{" "}
                  </li>
                  <li>
                    Blog: <span className="font-bold">{UserData.blog}</span>{" "}
                  </li>
                  <li>
                    Twitter:{" "}
                    <span className="font-bold">
                      {UserData.twitter_username}
                    </span>{" "}
                  </li>
                  <li>
                    Company:{" "}
                    <span className="font-bold">{UserData.company} </span>
                  </li>
                  <li>
                    Location:{" "}
                    <span className="font-bold">{UserData.location}</span>{" "}
                  </li>
                </ul>
                <ul className="list-disc">
                  <li>
                    Type: <span className="font-bold">{UserData.type}</span>
                  </li>
                  <li>
                    Followers:{" "}
                    <span className="font-bold">{UserData.followers}</span>{" "}
                  </li>
                  <li>
                    Following:{" "}
                    <span className="font-bold">{UserData.following}</span>{" "}
                  </li>
                  <li>
                    Hireable:{" "}
                    <span className="font-bold">{UserData.hireable}</span>{" "}
                  </li>
                  <li>
                    Public Repos:{" "}
                    <span className="font-bold">{UserData.public_repos}</span>{" "}
                  </li>
                  <li>
                    Created At:{" "}
                    <span className="font-bold">{UserData.created_at}</span>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const FetchData = async () => {
    try {
      SetBp(true);
      SetLoading(true);
      const response = await fetch(`https://api.github.com/users/${Username}`);
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
    <section className="w-full h-screen flex flex-col justify-center items-center">
      <div className=" bg-slate-700 w-4/5 h-20 m-2 rounded-3xl flex justify-center items-center">
        <p className="bg-slate-900 h-1/2 w-2/12 rounded-3xl flex justify-center items-center font-bold text-white">
          View Profile
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

export default ViewProfile;
