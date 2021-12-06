import Link from "next/link";
import { FcHome } from "react-icons/fc";

export default function Header() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <Link href="/">
              <a className="flex items-center py-6 ">
                <FcHome className="mr-2" />
                <span className="font-semibold text-gray-500 text-lg">
                  Findmystay
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
