import Link from "next/link";


export default function Layout({ children }) {
  return <>
    <header className="fixed top-0 left-0 w-screen bg-white dark:bg-black h-12 flex items-center border-b z-10">
      <div className="w-8" />
      <Link href='/'><span className="text-xl">ProllyYes</span></Link>
      <div className="w-8" />
    </header>
    <div>
    <div className="h-12" />
      {children}
    </div>
  </>

}
