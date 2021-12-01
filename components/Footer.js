import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="grid grid-cols-2 bg-black p-10 text-gray-300">
      <div className="flex flex-col">
        <div className="py-2">Find my Stay</div>
        <div className="py-2 text-xs">2022 @ findmystay.com</div>
        <div className="py-2 text-xs">Terms and Conditions</div>
        <div className="py-2 text-xs">About</div>
      </div>
      <div className="flex flex-col">
        <div className="p-2">Get notified when we do something special!</div>
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
