import ArtistCard from "@/components/ArtistCard";

export default async function Artists(){
    const url = 'https://qevent-backend.labs.crio.do/artists';
    const response = await fetch(url);
    const artistsData = await response.json();
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                {artistsData.map((artist)=>(
                     <ArtistCard key={artist.id} artistData={artist} />  
                ))               
                }
                
            </div>
        </>
    );
};