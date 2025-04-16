//import { useParams } from "next/navigation";

import Tag from "@/components/Tag";

export default async function EventDetails({params}){

    const eventId = await params.eventId;
    const response = await fetch(`https://qevent-backend.labs.crio.do/events/${eventId}`);
    const eventDetails = await response.json();

    return (
        <div className="text-dark m-4 border-slate-100 border rounded-md px-16 py-2.5">
            <div className="items-center">
      
            <img  className="w-auto h-64 mb-3 shadow-lg m-auto " src={eventDetails.image} />
            </div>
            <div>
                <h1 className="bg-gradient-to-b from-orange-500 via-orange-300 to-teal-600 text-transparent bg-clip-text text-2xl font-bold">{eventDetails.name}</h1>
                <h2 className="bg-gradient-to-b from-orange-400 via-orange-400 to-teal-600 text-transparent bg-clip-text text-lg font-bold">{eventDetails.location}</h2>
                <h2 className="bg-gradient-to-b from-orange-400 via-orange-400 to-teal-600 text-transparent bg-clip-text text-lg font-bold">{eventDetails.artist}</h2>
            </div>
            <div className="flex flex-wrap gap-4 items-center mt-12 mb-8">
                {eventDetails.tags && Array.isArray(eventDetails.tags) && eventDetails.tags.length > 0 ?
                    (eventDetails.tags.map((tag)=>(
                        <Tag text={tag} key={tag} />
                    ))    
                    ) : (
                        <span>No tags available</span>
                    )
            }
            </div>
            <div>
                <p className="text-md">{eventDetails.description}</p>
            </div>
            <div className="flex justify-between mt-4">
            <h3 className="bg-gradient-to-r from-orange-400 to-teal-600 text-transparent bg-clip-text text-2xl font-bold">
              {" "}
              {eventDetails.price > 0
                ? `$ ${eventDetails.price.toLocaleString()}`
                : "FREE"}
            </h3>
            <button className="bg-red-500 text-white rounded-lg px-4">Buy Tickets</button>
            </div>
            
        </div>
    );
};