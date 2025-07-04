'use client';
//import axios from "axios";
//import { useEffect, useState } from "react";
//import EventCard from "@/components/EventCard";
import React,{Suspense} from "react";
import EventList from "@/components/EventList";

export default async function Events() {
  //const [data,setData]=useState();
  const url = "https://qevent-backend.labs.crio.do/events";
  const response = await fetch(url);
  const eventsData = await response.json();

  //console.log("Events......", eventsData);

  return (
    <>
    <Suspense fallback={<div>Loading Events...</div>}>
      <EventList eventsData={eventsData} />
      </Suspense>
    </>
  );
}
