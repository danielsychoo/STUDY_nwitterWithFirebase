import React, { useEffect } from 'react';
import { FIREBASE_AUTH, FIREBASE_FIRESTORE } from 'config/firebase';

const MyProfile = () => {
  const currentUserUid = FIREBASE_AUTH.currentUser.uid;
  const getMyNweets = async () => {
    const myNweets = await FIREBASE_FIRESTORE.collection('nweets')
      .where('writerId', '==', currentUserUid)
      .orderBy('createdAt')
      .get();

    await console.log(myNweets.docs.map(doc => doc.data()));
  };
  useEffect(() => {
    getMyNweets();
  }, []);

  return <div>MyProfile component</div>;
};

export default MyProfile;
