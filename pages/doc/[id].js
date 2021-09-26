// import TextEditor from "../../components/TextEditor";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { getSession, signOut, useSession } from "next-auth/react";
import Login from "../../components/Login";
import { router } from "../../.next/static/chunks/main";
import { getDoc } from "firebase/firestore";

function Doc() {
  const { data: session, status } = useSession();
  //   const data = getDoc(db, "userDoc", id);
  const router = useRouter();
  const { id } = router.query;

  if (status === "unauthenticated") return <Login />;
  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} classsName="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>
        <div>
          <h2></h2>
        </div>
      </header>
    </div>
  );
}

export default Doc;
