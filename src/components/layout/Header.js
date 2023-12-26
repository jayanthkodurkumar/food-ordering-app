import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex items-center  justify-between mt-4">
        <nav className="flex gap-4 text-gray-500 font-semibold ">
          <Link className="text-primary font-semibold text-2xl" href={""}>
            ST PIZZA
          </Link>
          <Link href={""}>Home</Link>
          <Link href={""}>Menu</Link>
        </nav>
        <nav className="flex gap-4 text-gray-500 font-semibold">
          {" "}
          <Link
            className="flex gap-4 text-gray-500 font-semibold"
            href={"/login"}
          >
            Login
          </Link>
          <Link
            className="bg-primary rounded-full text-white px-8 "
            href={"/register"}
          >
            Register
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
