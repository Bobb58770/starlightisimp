import React from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { LuGamepad2 } from "react-icons/lu";
import { BannerAd } from "../components/Ad";
import packagejson from "../../package.json";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-5 overflow-hidden">
      <Logo width="200px" height="200px" />
      <h1 className="text-4xl font-bold my-5">Welcome to Probe Games!</h1>
      <p className="text-lg mb-5">
        Your favorite place for unblocked games! Enjoy a wide selection of fun
        and exciting games without any restrictions.
      </p>
      <Link to="/science">
        <button className="btn btn-primary">
          <LuGamepad2 size={24} />
          Start Playing
        </button>
      </Link>
      <BannerAd />

      {/* Footer */}
      <footer className="mt-10 fixed bottom-0 w-full bg-black text-white p-5 text-center">
        <p>© {new Date().getFullYear()} Pls Don't Sue!</p>
        <div className="gap-2 flex justify-center">
          {import.meta.env.DEV && (
            <p className="badge badge-primary p-3">
              <p>Development mode</p>
            </p>
          )}
          <p className="badge badge-primary p-3">
            <p className="text-base">v{packagejson.version}</p>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
