import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/"> Home </Link>
        </li>
        <li>
          <Link href="/register"> Register </Link>
        </li>
        <li>
          <Link href="/login"> Login </Link>
        </li>
        <li>
          <Link href="/products"> Products </Link>
        </li>
        <li>
          <Link href="/products/create"> Create Product </Link>
        </li>
      </ul>
    </nav>
  );
}
