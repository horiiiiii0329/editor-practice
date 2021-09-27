import Head from "next/head";
import Header from "../components/Header";
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Image from "next/image";
import { getSession, useSession } from "next-auth/client";
import DocumentRow from "../components/DocumentRow";
import Login from "../components/Login";
import Modal from "@material-tailwind/react/Modal";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import { useState, useEffect } from "react";
import { db } from "../firebase";

export default function Home() {
  const { data: session, status } = useSession();
  const [showModal, setshowModal] = useState(false);
  const [input, setInput] = useState("");
  const [snapShot, setSnapShot] = useState([]);

  // useEffect(() => {
  //   const docs = [];
  //   getDocs(collection(db, "userDoc")).then((snapshot) => {
  //     snapshot.docs.forEach((note) => {
  //       let currentID = note.id;
  //       let appObj = { ...note.data(), ["id"]: currentID };
  //       docs.push(appObj);
  //     });

  //     setSnapShot(docs);
  //   });
  //   // onSnapshot(collection(db, "userDoc"), (snapshot) => {
  //   //   setSnapShot(
  //   //     snapshot.docs.map((doc) => {
  //   //       doc.data();
  //   //     })
  //   //   );
  //   // });
  // }, []);
  // console.log(snapShot);

  const createDocument = () => {
    if (!input) return;

    db.collection("userDocs").doc(session.user.email).collection("docs").add({
      filleName: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
    setshowModal(false);
  };

  const modal = (
    <Modal size="sm" active={showModal} toggler={() => setshowModal(false)}>
      <ModalBody>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="outline-none w-full"
          placeholder="Enter name of a documenbt"
          onKeyDown={(e) => e.key === "Enter" && createDocument()}
        ></input>
      </ModalBody>
      <ModalFooter>
        <Button
          color="bule"
          buttonType="link"
          onClick={(e) => setshowModal(false)}
          ripple="dark"
        >
          Cancel
        </Button>
        <Button
          color="blue"
          buttonType="link"
          onClick={createDocument}
          rirrple="light"
        >
          Create
        </Button>
      </ModalFooter>
    </Modal>
  );

  if (status === "unauthenticated") return <Login />;

  return (
    <div>
      <Head>
        <title>Hoogle Docs Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {modal}

      <section className="bg-gray-100 pb-10 px-10 ">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Start a new document</h2>
            <Button
              color="gray"
              buttonType="outline"
              iconOnly={true}
              ripple="dark"
              className="border-0"
            >
              <Icon name="more_vert" size="3xl" />
            </Button>
          </div>
          <div>
            <div
              onClick={() => setshowModal(true)}
              className="relative h-52 w-40 border-2 cursor-pointer hover:border-blue-700"
            >
              <Image src="https://links.papareact.com/pju" layout="fill" />
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-gray-700">
              Blank
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray text-gray-700">
          <div className="flex items-center justify-between pb-5 text-sm text-gray-700">
            <h2 className="font-medium flex-grow">My Document</h2>
            <p className="mr-12">Date Created</p>
            <Icon name="folder" size="3xl" color="gray" />
          </div>
          {/* {snapShot.length &&
            snapShot.map((doc) => (
              <DocumentRow
                key={doc.id}
                id={doc.id}
                fieldName={doc.fieldName}
                date={doc.timestamp}
              />
            ))} */}
        </div>
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
