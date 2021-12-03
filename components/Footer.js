import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 bg-black p-10 text-gray-300 xs:grid-cols-1">
      <div className="flex flex-col">
        <div className="flex flex-row items-center py-5">
          <Image alt="logo" src="/images/logo.png" width={40} height={40} />
          <div className=" mx-2 text-lg font-semibold">Find My Stay</div>
        </div>
        <div className="py-2 text-xs font-semibold">2022 @ findmystay.com</div>
        <div className="py-2 text-xs font-semibold">Phone and Email</div>
        <div className="py-2 text-xs font-semibold">Terms and Conditions</div>
        <div className="py-2 text-xs font-semibold">About</div>
      </div>
      <div className="flex py-5 flex-col xs:py-0">
        <div className="p-2 font-semibold xs:px-0">
          Get notified when we do something special!
        </div>
        <div className="flex flex-row">
          <div className="p-2 xs:px-0">
            <BsInstagram />
          </div>
          <div className="p-2 xs:pr-0">
            <BsTwitter />
          </div>
          <div className="p-2 xs:pr-0">
            <BsFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
}
