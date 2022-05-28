import {useEffect} from 'react';
import {getFirestore, collection, getDoc, setDoc} from 'firebase/firestore';
import app from '../firebase'

export default function useChannel(channelId) {

    useEffect(() => {
        const db = getFirestore(app);
        const colRef = collection(db, 'channels');
        
        //read
        async function getChannelData() {
            const channelData = await getDoc(`${colRef}/${channelId}`);
            setDoc()
            return channelData.data();
        }
    })
}


