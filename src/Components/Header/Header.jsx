import img from "../../Assets/Ellipse 1.svg";
export default function Header() {
  return (
    <>
      <header className="border-indigo-500/25 border-b-2 p-5 flex justify-between items-center">
        <div className="text-white">
          <h3 className="text-xl md:text-3xl font-bold text-slate-900">
            Knowledge Cafe
          </h3>
        </div>
        <div>
          <img
            src={img}
            alt="Profile"
            className="rounded-full h-12 w-12 object-cover"
          />
        </div>
      </header>
    </>
  );
}
