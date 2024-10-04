export default function input({ type, name, placeholder }) {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full p-3 my-3 border border-gray-300 rounded-md font-sans text-[16px] focus:border-blue-500 focus:outline-none"
        required=""
      />
    </>
  );
}
