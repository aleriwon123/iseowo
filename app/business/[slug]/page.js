import { db } from "@/config/firebase.config";
import { getDoc, doc } from "firebase/firestore";

export default async function Page({params}){
    const params_ = await params;

    let business = {}

    const res = await getDoc(doc(db,"directories",params_.slug));
    if (res.exists()) {
        business = res.data()
    } else {
        alert("Business does not exist")
    }

    console.log(business);
    return(
        <main>
            <p>business name:{business?.businessName}</p>
            <p>category:{business?.category}</p>
        </main>
    )
}