import Button from "@/components/Button";
import { Input } from "@/components/Input";
const buttons = [
  { button: "All", isActive: true },
  { button: "Acive", isActive: false },
  { button: "Completed", isActive: false },
];
export default function Home() {
  return (
    <div className="justify-center items-center bg-white w-94.25 h-72.5 rounded-md px-4 py-6">
      <h1 className=" text-xl font-semibold w-full text-center h-5">
        To-Do list
      </h1>
      <div className="flex gap-1.5 py-5">
        <Input />
        <button className="bg-blue-500 px-4 py-2 rounded-md text-white">
          Add
        </button>
      </div>
      <div className=" gap-1.5 flex">
        {buttons.map((element, key) => {
          return (
            <Button
              key={key}
              button={element.button}
              isActive={element.isActive}
            />
          );
        })}
      </div>
      <div className="pt-8 pb-10 flex justify-center text-[14px]">
        <p>No tasks yet. Add one above!</p>
      </div>
      <div className="gap-1 flex justify-center text-[12px]">
        <p>Powered by</p>
        <p className="text-blue-500">Pinecone academy</p>
      </div>
    </div>
  );
}
