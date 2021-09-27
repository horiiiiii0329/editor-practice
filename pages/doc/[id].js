// import TextEditor from "../../components/TextEditor";
import Icon from "@material-tailwind/react/Icon";
import { useRouter } from "next/dist/client/router";
import { db } from "../../firebase";
import { getSession, signOut, useSession } from "next-auth/client";
import { useState, useEffect } from "react";
import Login from "../../components/Login";
import { collection, getDocs } from "firebase/firestore";
import Button from "@material-tailwind/react/Button";
import TextEditor from "../../components/TextEditor";

function Doc() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { id } = router.query;
  const [snapShot, setSnapShot] = useState([]);

  if (status === "unauthenticated") return <Login />;

  useEffect(() => {
    let docs = [];
    getDocs(collection(db, "userDoc"))
      .then((snapshot) => {
        snapshot.docs.forEach((note) => {
          let currentID = note.id;
          let appObj = { ...note.data(), ["id"]: currentID };
          docs.push(appObj);
        });
      })
      .then(console.log(docs));

    setSnapShot(docs);
  }, []);

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <span onClick={() => router.push("/")} className="cursor-pointer">
          <Icon name="description" size="5xl" color="blue" />
        </span>
        <div className="flex-grow px-2">
          <h2>DUMMY_DATA</h2>
          <div className="flex items-center text-sm space-x-1 -ml-1 h-8 text-gray-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>

        <Button
          color="lightBlue"
          buttonType="filled"
          className="hidden md:inline-flex h-10"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="light"
        >
          <Icon name="people" size="md" />
          SHARE
        </Button>
        <img
          className="rounded-full cursor-pointer h-10 w-10 ml-2"
          src={session?.user?.image}
          alt=""
        />
      </header>

      <TextEditor />
    </div>
  );
}

export default Doc;
