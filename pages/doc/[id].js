// import TextEditor from "../../components/TextEditor";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { getSession, signOut, useSession } from "next-auth/react";
import Login from "../../components/Login";

function Doc() {
  const { data: session, status } = useSession();

  if (status === "unauthenticated") return <Login />;
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1"></header>
    </div>
  );
}

export default Doc;
