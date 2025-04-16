'use client';
import { useRouter } from "next/navigation";

const Tag = ({text}) => {
  //console.log("Tag Props.........", props);
  //const { tagName } = props;
  const router = useRouter();
  //console.log("Tag Text.......", tagName);

  const handleTagFilter = ()=>{
    router.push(`/events?tagName=${text}`);
  }
  
  return (
    <div onClick={handleTagFilter} className="bg-gradient-to-r from-orange-400 to-teal-600 text-white rounded-2xl w-fit px-3 py-1 text-center font-bold hover:scale-110 hover:cursor-pointer">
      # {text}
    </div>
  );
};

export default Tag;
