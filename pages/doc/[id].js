// import TextEditor from "../../components/TextEditor";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { getSession, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Login from "../../components/Login";
import { router } from "../../.next/static/chunks/main";
import { getDoc, doc } from "firebase/firestore";

function Doc() {
  const [note, setNote] = useState([]);
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  //   const docRef = doc(db, "userDoc", id);
  //   const docSnap = getDoc(docRef);

  if (status === "unauthenticated") return <Login />;

  //   if(!loadingSnapshot && !snapshot?.data()?.fileName){
  //       router.replace("/")
  //   }

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>
        <div className="flex-grow px-2">
          <h2>DUMMY TITLE</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Doc;
