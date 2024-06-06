import { useUser, useSignOut } from "@gadgetinc/react";
import { api } from "../api";
import { Link } from "react-router-dom";

export default function () {
  const user = useUser(api);
  const signOut = useSignOut();

  return user ? (
    <>
      
      <div>
        {/* <a href="/edit/files/web/routes/signed-in.jsx" target="_blank" rel="noreferrer" style={{ fontWeight: 500 }}>
          web/routes/signed-in.jsx
        </a> */}
      </div>
      
    </>
  ) : null;
}
