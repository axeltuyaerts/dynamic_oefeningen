import {collection,query, orderBy} from 'firebase/firestore';
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import React, {useState} from "react";
import {Form} from "react-bootstrap";

const personConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    const [search, setSearch] = useState("");

    console.log({values, loading, error});
    return (
        <>
            <Form>
                <Form.Label>search</Form.Label>
                <Form.Control value={search}
                              onChange={e => setSearch(e.target.value)}/>
            </Form>
            <Persons persons={values?.filter((p => p.name.includes(search) || p.city.includes(search)))}
                     title={"personen uit de db"} isInitiallyOpen={true}/>
        </>
    )
}