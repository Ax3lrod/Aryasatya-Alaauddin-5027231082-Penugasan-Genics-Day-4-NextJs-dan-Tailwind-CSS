import Image from "next/image";
import Contactinput from "../components/container/Contactinput";
import Contactlist from "../components/container/Contactlist";

export default function Home() {
  return (
    <>
      <div className="w-[800px] mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h1 className="font-semibold text-[42px] mb-6 text-center text-gray-800">
          Contact Apps
        </h1>
        <h2>Add New Contact</h2>
        <Contactinput />
        <Contactlist />
      </div>
    </>
  );
}
