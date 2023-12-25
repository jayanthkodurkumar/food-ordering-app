import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="grid grid-cols-2 gap-10 py-8 ">
      <div>
        <h1 className="text-4xl font-semibold">
          Everything is better with a Pizza
        </h1>
        <p className="my-4 text-gray-500">
          Pizza is the missing piece that makes everyday complete, a simple yet
          deliciour joy in life
        </p>
        <div className="py-4 flex gap-4">
          <button className="bg-primary text-white flex gap-2 px-8 py-4 rounded-full uppercase">
            {" "}
            Order now
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizza.avif"}
          alt={"pizza"}
          className="object-contain rounded-3xl"
          width={400}
          height={200}
        />
      </div>
    </section>
  );
}
