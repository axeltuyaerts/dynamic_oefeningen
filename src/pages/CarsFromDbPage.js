import {collection} from "firebase/firestore";
import {firestoreDB} from "../services/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Cars} from "../components/Cars";

const carsConverter = {
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
};

export function CarsFromDbPage() {
    const collectionRef = collection(firestoreDB, 'cars').withConverter(carsConverter);
    const [values, loading, error] = useCollectionData(collectionRef);
    console.log({values, loading, error});
    return (
        <>
            <Cars cars={values} title={"Auto's uit database"} isInitiallyOpen={true}/>
        </>
    )
}