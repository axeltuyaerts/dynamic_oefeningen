import {collection, query, where} from 'firebase/firestore';
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {MenuCard} from "../components/MenuCard";

const productConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export function MenuFromDbPage() {
    const collectionRef = collection(firestoreDB, 'menuproducts').withConverter(productConverter);
    const queryRef = query(collectionRef, where("price", "==", 1), where("name", ">", "c"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({error});
    return (
        <>
            <MenuCard products={values} title={"Menu"}/>
        </>
    )
}