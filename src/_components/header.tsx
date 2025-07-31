import Image from "next/image";

import LogoMarca from "../../public/cerg.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-red-100 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Image
              src={LogoMarca}
              alt="Centro Educacional Ribeiro Gouvêa - CERG"
              width={140}
              height={40}
              className="h-16 w-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
