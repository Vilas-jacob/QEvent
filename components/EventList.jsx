'use client';
import React, {Suspense} from "react";
const { useSearchParams } = require("next/navigation");
const { default: EventCard } = require("./EventCard");

const EventList = ({eventsData})=>{
    const searchParams = useSearchParams();
    const artistName = searchParams.get('artistName');
    const tagName = searchParams.get('tagName');
    //console.log("Tag Name........", tagName);

    let filteredEvents;

    if(artistName) {
        filteredEvents = eventsData.filter((event)=>event.artist === artistName);
    } else if(tagName) {
        filteredEvents = eventsData.filter((event)=>event.tags && event.tags.includes(tagName));
    } else {
        filteredEvents =  eventsData;
    }
    //const filteredEvents = artistName ? eventsData.filter((event)=>event.artist === artistName) : eventsData;
    //console.log("FilteredEvents.....", filteredEvents);
    return (
        <Suspense fallback={<div>Loading Events..</div>}>
        <div className="grid grid-cols-3 gap-4">
            {
                filteredEvents.map((event)=>(
                    <EventCard key={event.id} eventData={event}/>
                ))
            }
        </div>
        </Suspense>
    );
};

export default EventList;