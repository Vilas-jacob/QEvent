"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function CreateEvent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    tags: "",
    artist: "",
    price: 0,
  });

  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/");
    }
  }, [session, status, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventCreate = async (e) => {
   
    e.preventDefault();
    const randomImageNumber = Math.floor(Math.random() * 99) + 1;
    const newEvent = {
      id: uuidv4(),
      image: `https://randomuser.me/api/portraits/men/${randomImageNumber}.jpg`,
      ...formData,
      tags: formData.tags.split(",").map((tag) => tag.trim()),
    };

    try {
      const response = await fetch(
        "https://qevent-backend.labs.crio.do/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newEvent),
        }
      );
      
      if (response.ok) {
        //const createdEvent = await response.json();
        //router.push(`/events/${createdEvent.id}`);
        router.push(`/events`);
        //console.log("POST successfull....");
      } else {
        throw new Error("Failed to add new Event");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  if (!session) {
    return <div>Loading...</div>;
  }
  return (
    <div className="mx-16">
      <h1 className="font-bold py-2 bg-gradient-to-b from-orange-500 via-orange-300 to-teal-600 text-transparent bg-clip-text text-2xl">
        Create New Event
      </h1>
      <form onSubmit={handleEventCreate}>
        <div className="space-y-12">
          <div className="border-y border-gray-900/10 p-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-orange-400"
                >
                  Event Name:
                </label>
                <div className="mt-2">
                  
                    <input
                      className="block w-full rounded-md bg-white border border-teal-200 px-3 py-1.5 text-base text-gray-900 outline-2 outline-offset-2 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      placeholder="Enter Event Name"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm/6 font-medium text-orange-400" htmlFor="artist">Artist:</label>
                <div className="mt-2">
                <input
                  className="block w-full rounded-md border border-teal-200 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Enter Artist Name"
                  type="text"
                  id="artist"
                  name="artist"
                  value={formData.artist}
                  onChange={handleChange}
                  required
                />
                </div>
              </div>
             
              <div className="sm:col-span-3">
                <label
                  className="block text-sm/6 font-medium text-orange-400"
                  htmlFor="location"
                >
                  Event Location:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border border-teal-200 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    placeholder="Enter Event Location"
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label className="block text-sm/6 font-medium text-orange-400" htmlFor="tags">Event Tags:</label>
                <div className="mt-2">
                <input
                  className="block w-full rounded-md border border-teal-200 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Enter Tags (comma-separated)"
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  required
                />
                </div>
              </div>
              <div className="sm:col-span-2 sm:col-start-1">
                <label
                  className="block text-sm/6 font-medium text-orange-400"
                  htmlFor="date"
                >
                  Event Date:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border border-teal-200 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  className="block text-sm/6 font-medium text-orange-400"
                  htmlFor="time"
                >
                  Event Time:
                </label>
                <div className="mt-2">
                  <input
                    className="block w-full rounded-md border border-teal-200 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm/6 font-medium text-orange-400" htmlFor="price">Price:</label>
                <div className="mt-2">
                <input
                  className="block w-full rounded-md border border-teal-200 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Enter Ticket Price"
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
                </div>
              </div>
              <div className="col-span-full">
                <label className="block text-sm/6 font-medium text-orange-400" htmlFor="description">Event Description:</label>
                <div className="mt-2">
                <textarea
                  className="block w-full rounded-md border border-teal-200 bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  placeholder="Enter Event Description"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
                </div>
              </div>
              
          
              

              
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
        <button className="text-sm/6 font-semibold bg-gradient-to-b from-orange-400 via-orange-300 to-teal-600 text-transparent bg-clip-text" type="button">Cancel</button>
        <button className="rounded-md bg-gradient-to-r from-orange-400 to-teal-600 text-white px-3 py-2 text-sm font-semibold shadow-xs hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" type="submit">Create Event</button>
        </div>
          </div>
          
        </div>
       
      </form>
    </div>
  );
}
