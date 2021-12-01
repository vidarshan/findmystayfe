import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 bg-black p-10 text-gray-300">
      <div className="flex flex-col">
        <div className="flex flex-row items-center py-5">
          <Image src="/images/logo.png" width={40} height={40} />
          <div className=" mx-2 text-lg font-semibold">Find My Stay</div>
        </div>
        <div className="py-2 text-xs font-semibold">2022 @ findmystay.com</div>
        <div className="py-2 text-xs font-semibold">Terms and Conditions</div>
        <div className="py-2 text-xs font-semibold">About</div>
      </div>
      <div className="flex py-5 flex-col">
        <div className="p-2 font-semibold">
          Get notified when we do something special!
        </div>
        <div className="flex flex-row">
          <div class="p-2">
            <BsInstagram />
          </div>
          <div class="p-2">
            <BsTwitter />
          </div>
          <div class="p-2">
            <BsFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
}
