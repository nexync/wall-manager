import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import {Button} from 'antd'

export default function ProfilePage() {
	const [name, setName] = useState("");
	const [file, setFile] = useState(null);
	const [photoURL, setPhotoURL] = useState("");
	const {currUser, users} = useContext(GlobalContext)
  const history = useHistory();

  useEffect(() => {
    const prefillData = async () => {
      try {
				const user = users[currUser.user.id]
				
				console.log(user)

        setName(user.displayname);
        // setPhotoURL(profileDoc.data().photoURL);
      } catch (err) {
        console.log(err.message);
      }

    };

    prefillData();
  }, []);

  // function handleChange(e) {
  //   setFile(e.target.files[0]);
  // }

  // function handleUpload(e) {
  //   e.preventDefault();

  //   return new Promise((resolve, reject) => {
  //     const uploadTask = storage.ref(`/images/${file.name}`).put(file);
  //     uploadTask.on("state_changed", console.log, console.error, () => {
  //       storage
  //         .ref("images")
  //         .child(file.name)
  //         .getDownloadURL()
  //         .then(url => {
  //           setFile(null);
  //           // console.log(url);
  //           setPhotoURL(url);
  //           resolve(url);
  //         });
  //     });
  //   });
  // }

  // const onSubmit = async e => {
  //   e.preventDefault();

  //   try {
  //     const uid = firebase.auth().currentUser.uid;

  //     const query = await db
  //       .collection("profiles")
  //       .where("user", "==", uid)
  //       .get();

  //     const profileDoc = query.docs[0];

  //     console.log(name);

  //     let url = photoURL;
  //     if (file !== null) url = await handleUpload(e);

  //     await profileDoc.ref.update({
  //       name: name,
  //       status: status,
  //       photoURL: url
  //     });

  //     console.log(profileDoc.data());
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   history.push("/dashboard");
  // };

  // if (firebase.auth().currentUser == null) {
  //   history.push("/");
  // }

  return (
		<>
    <p>Under construction sorry :(</p>
		<Button ghost = 'true' onClick = {() => history.push('/dashboard')}>Back</Button>
		</>
	)
}

