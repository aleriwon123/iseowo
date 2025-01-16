"use client"
import Link from "next/link"
import { BusinessCard } from "@/components/BusinessCard";
import { useState,useEffect } from "react";
import { db } from "@/config/firebase.config";
import { getDocs,collection,query,orderBy } from "firebase/firestore";



export default function Page (){

  const [directories,setDirectories] = useState([]);

    useEffect(() => {
        const handleFetchDirectories = async () => {
            const q = query(
                collection(db,"directories"),
                orderBy("createdAt","desc")
            );

            const onSnap = await getDocs(q);

            const compiledData = [];

            onSnap.docs.forEach(doc => {
                compiledData.push({
                    id:doc.id,
                    data:doc.data()
                })
            });

            setDirectories(compiledData)
        }

        handleFetchDirectories()
    },[]);

  return(
    <main className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-4 px-2 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8">
      <div className="bg-gray-100 rounded-sm p-2">

      </div>

      <div className="col-span-3 flex flex-col gap-6">
        {directories.map(biz => <BusinessCard key={biz?.id} bizId={biz?.id} data={biz?.data}/>)}
      </div>

      <div className="hidden lg:flex bg-gray-100 rounded-sm p-2">
      
      </div>

    </main>
    
  )
}