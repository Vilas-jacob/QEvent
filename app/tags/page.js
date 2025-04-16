'use client';
import Tag from "@/components/Tag";

export default async function Tags(){
    const url = 'https://qevent-backend.labs.crio.do/tags';
    const response = await fetch (url);
    const tagsData = await response.json();
    

    return (
        
        <div className="flex flex-wrap gap-4 p-4 mx-8 justify-center">
            {
                tagsData.map((tag)=>(
                    <Tag key={tag.id} text={tag.name} />
                ))
            }
        </div>
        
    );
};