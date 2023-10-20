import {collection, query, orderBy, addDoc, updateDoc, deleteDoc} from 'firebase/firestore';
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Persons} from "../components/Persons";
import React, {useState} from "react";
import {Form, Modal} from "react-bootstrap";
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


function PersonFromEdit({show, onHide}) {
    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Bewerk persoon</Modal.Title>
            </Modal.Header>
        </Modal>
    )
}

export function PersonsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'persons').withConverter(personConverter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    const [search, setSearch] = useState("");
    const [showEditModal, setShowEditModal] = useState(false);
    const [personSelected, setPersonSelected] = useState(null);
    console.log({values, loading, error});

    async function addDummyPerson() {
        const newPerson = {
            name: "DUMMY",
            age: 19,
            city: "Mechelen"
        };
        try {
            await addDoc(collectionRef, newPerson);
            console.log("Persoon succesvol toegevoegd.");
        } catch {
            console.log("ERROR dummy persoon is NIET toegevoegd");
        }
    }

    async function incrementAllAges(amount) {
        const arrayOfPromises = values.map(person => updateDoc(person.ref, {age: person.age + amount}));
        Promise.all(arrayOfPromises);
        console.log(`Alle leeftijde verhoogd met ${amount} is gelukt`);
    }

    async function deletePerson(person) {
        try {
            await deleteDoc(person.ref);
            console.log(`Persoon met ID ${person.id} is succesvol verwijderd`);
        } catch {
            console.log('Fout bij het verwijderen van de persoon');
        }
    }

    function editPerson(person) {
        setPersonSelected(person)
    }

    const closeEditModal = () => {
        setPersonSelected(null);
        setShowEditModal(false);
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
            {personSelected && (
                <div className={"bg-warning"}>
                    <p>EDITING PERSON: {personSelected.name}</p>
                </div>
            )}
            <Persons
                persons={values?.filter((p => p.name.includes(search) || p.city.includes(search)))}
                title={"personen uit de db"}
                isInitiallyOpen={true}
                onDeletePerson={deletePerson}
                onEditPerson={editPerson}
            />
            <PersonFromEdit show={showEditModal} onHide={closeEditModal} />
        </>
    );
}