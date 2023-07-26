import Cart from "./Cart";

const NavBar = () => {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="h-16 flex justify-between items-center px-4 sm:px-14 md:px-16 lg:px-24 xl:px-48 border-b border-zinc-100">
        <p className="font-bold text-lg">PRODUCT <b className="text-gold">CRAFT</b></p>
        <Cart/>
      </div>
    </div>
  );
};

export default NavBar;
