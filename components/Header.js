import Image from "next/image";

function Header() {
  return (
    <header>
      <h1>This is the header</h1>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="Logo"
      />
    </header>
  );
}

export default Header;
