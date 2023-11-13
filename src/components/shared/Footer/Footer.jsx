import { BsInstagram, BsTwitter, BsFacebook } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className="flex justify-between gap-4 bg-secondary p-4">
      <div className="flex gap-2">
        <div>
          <BsInstagram className="text-4xl text-white" />
        </div>
        <div>
          <BsTwitter className="text-4xl text-white" />
        </div>
        <div>
          <BsFacebook className="text-4xl text-white" />
        </div>
      </div>
      <div className="text-white">
        <span className="flex">All Rights Reserved 2023</span>
      </div>
    </footer>
  );
}
