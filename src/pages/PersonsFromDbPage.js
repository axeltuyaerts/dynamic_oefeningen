import {collection} from 'firebase/firestore';
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import React from "react";

const personConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return{...data, id: snapshot.id}
    }
};

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB,'persons').withConverter(personConverter);

    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values,loading,error});
    return(
        <>
            <div>Persons from db</div>
            <Persons persons={values} title={"personen uit de db"}/>
        </>
    )
}