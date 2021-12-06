import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex">
            <Link href="/">
              <a className="flex items-center py-6">
                <Image
                  alt="logo"
                  src="/images/logo.png"
                  width={30}
                  height={30}
                />
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
