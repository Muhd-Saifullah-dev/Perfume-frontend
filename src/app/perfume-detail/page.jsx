
"use client"
// pages/perfume-details/[id].js
import React from "react";
import Image from "next/image";
// import { useRouter } from "next/router";
import Picture from "../../../public/ss 7.png"
const PerfumeDetails = () => {
//   const router = useRouter();
//   const { id } = router.query; // Extract the perfume ID from the URL
//   const [perfume, setPerfume] = useState(null);

  // Simulating fetching perfume data
//   useEffect(() => {
//     if (id) {
//       // You can replace this with a real API call to fetch perfume details
//       const fetchPerfumeDetails = async () => {
//         const response = await fetch(`/api/perfumes/${id}`);
//         const data = await response.json();
//         setPerfume(data);
//       };

//       fetchPerfumeDetails();
//     }
//   }, [id]);

  // If the perfume data isn't loaded yet, display a loading message
//   if (!perfume) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Ttile</h1>
      <div className="flex">
        <Image
          src={Picture}
          alt="Imaghess"
          className="w-[300px] h-[300px] object-cover rounded-lg"
        />
        <div className="ml-6">
          <p className="text-lg text-gray-600 mb-4 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, perspiciatis repellendus. Cupiditate a eveniet debitis dolorem magnam impedit, sapiente aspernatur.</p>
          <p className="text-xl font-semibold text-gray-900 mb-4">
            $Price
          </p>
          <button
            onClick={() => alert("Added to Cart!")}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 flex-shrink"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfumeDetails;
