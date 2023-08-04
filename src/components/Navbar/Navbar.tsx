import { getServerSession } from "next-auth";
import Link from "next/link";
import AuthinProfile from "./AuthinProfile";

import { authOptions } from "@/lib/auth";
const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="navbar bg-base-300 rounded-xl flex justify-between items-center">
      <div>
        <Link
          href={"/"}
          className="btn btn-ghost normal-case text-xl text-primary"
        >
          NexTicket
        </Link>
        <Link href={"/create-ticket"} className="btn btn-ghost">
          Add Tickets
        </Link>
      </div>

      <div className="dropdown dropdown-end mr-10">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full bg-slate-200 flex items-center justify-center text-center">
            <span className="text-3xl font-bold text-slate-500">
              {session?.user?.name[0]}
            </span>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52"
        >
          {/* <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li> */}
          {/* <li>
            <a>Settings</a>
          </li> */}
          <AuthinProfile />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
