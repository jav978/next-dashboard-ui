import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* LEFT */}
      <div className="p-4 w-[14%]  md:w-[8%] lg:w-[16%] xl:w-[14%] 2xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center gap-2 justify-center lg:justify-start"
        >
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block font-bold">SchoolLama</span>
        </Link>
        <Menu />
        </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] 2xl:w-[86%] bg-[#f7f8fa] overflow-scroll" >
        <Navbar />
        {children}
      </div>
    </div>
  );
}
