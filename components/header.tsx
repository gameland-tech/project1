import Link from "next/link";

const Header = () => {
  return (
    <>
      <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/dashboard"}>Dashboard</Link></li>
      </ul>
    </>
  );
};
export default Header;
