"use client";

import { Toolbar } from "@/components/Toolbar";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import { document } from "postcss";

interface DocumentIdPageProps {
    params: {
      documentId: Id<"documents">;
    }; 
};

const documentIdPage = ({
  params
} : DocumentIdPageProps) => {
  const document = useQuery(api.documents.getById,{
    documentId:params.documentId 
  });

  if(document === undefined) {
    return <div>Loading...</div>
  }

  if(document === null){
    return <div>Document Not DFound</div>
  }
  return (
    <div className="pb-40">
      <div className="h-[35vh]" />
      <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
      <Toolbar initialData= {document}/>
      </div>
    </div>
  );
}

export default documentIdPage;