import Image from 'next/image';

export default function NavBar() {
  return (
    <div>
      <nav className="h-20 w-full">
        <Image
          src={'/images/logo-2.png'}
          alt="25 Words Or Less"
          width="800"
          height={100}
          className="h-full object-contain mx-auto my-2"
        />
      </nav>
    </div>
  );
}
