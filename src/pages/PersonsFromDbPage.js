import {collection, query, orderBy, addDoc, updateDoc, doc} from 'firebase/firestore';
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {MyButton} from "../components/MyButton";

const personConverter = {
    toFirestore: function (dataInApp) {
        return {
            name: dataInApp.name,
            age: Number(dataInApp.age),
            city: dataInApp.city,
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};


export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("city"));
    const [values, loading, error] = useCollectionData(queryRef);
    const [search, setSearch] = useState("");
    console.log({values, loading, error});

    async function addDummyPerson() {
        const newPerson = {
            name: "DUMMY",
            age: 19,
            city: "Mechelen"
        };
        try{
        await addDoc(collectionRef, newPerson);
        console.log("Persoon succesvol toegevoegd.");
        } catch (error) {
            console.error("Fout bij toevoegen van persoon!", error);
        }
    }

    function incrementAllAges(amount) {
        if (values) {
            values.forEach((person) => {
                const personRef = doc(firestoreDB, 'persons', person.id);
                const updatedFields = {
                    age: person.age + amount
                };
                updateDoc(personRef, updatedFields);
            });
        }
    }

    return (
        <>
            <Form>
                <Form.Label>search</Form.Label>
                <Form.Control value={search}
                              onChange={e => setSearch(e.target.value)}/>
            </Form>
            <MyButton onClick={() => addDummyPerson()}>+dummy</MyButton>
            <MyButton onClick={() => incrementAllAges(1)}>age+1</MyButton>
            <MyButton onClick={() => incrementAllAges(-1)}>age-1</MyButton>
            <Persons persons={values?.filter((p => p.name.includes(search) || p.city.includes(search)))}
                     title={"personen uit de db"} isInitiallyOpen={true}/>
        </>
    )
}