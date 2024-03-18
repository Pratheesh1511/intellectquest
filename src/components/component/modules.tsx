/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/9EpAGANVaGH
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Homepage } from "@/components/component/homepage"

export function Modules() {
  return (
    <div>
      <div>
        <header className="flex items-center justify-between gap-4 pb-6">
          <Link className="flex items-center gap-2" href="#">
            <ChevronLeftIcon className="h-6 w-6" />
            <h1 className="text-2xl font-bold tracking-tight">IntellectQuest</h1>
          </Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/"><Button variant="outline">Go Back</Button></Link>
            </div>
          </header>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <button className="flex flex-col items-center gap-2">
            <button className="text-sm font-medium rounded-lg border border-slate-200 border-gray-200/70 backdrop-blur-sm p-2 w-[100px] h-8 flex items-center justify-center dark:border-slate-800">
              <Link href='/pdf'>1</Link>
            </button>
            <img
              alt="1"
              className="rounded-xl"
              height="125"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/125",
                objectFit: "cover",
              }}
              width="200"
            />
          </button>
          <button className="flex flex-col items-center gap-2">
            <button className="text-sm font-medium rounded-lg border border-slate-200 border-gray-200/70 backdrop-blur-sm p-2 w-[100px] h-8 flex items-center justify-center dark:border-slate-800">
              2
            </button>
            <img
              alt="2"
              className="rounded-xl"
              height="125"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/125",
                objectFit: "cover",
              }}
              width="200"
            />
          </button>
          <button className="flex flex-col items-center gap-2">
            <button className="text-sm font-medium rounded-lg border border-slate-200 border-gray-200/70 backdrop-blur-sm p-2 w-[100px] h-8 flex items-center justify-center dark:border-slate-800">
              3
            </button>
            <img
              alt="3"
              className="rounded-xl"
              height="125"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/125",
                objectFit: "cover",
              }}
              width="200"
            />
          </button>
          <button className="flex flex-col items-center gap-2">
            <button className="text-sm font-medium rounded-lg border border-slate-200 border-gray-200/70 backdrop-blur-sm p-2 w-[100px] h-8 flex items-center justify-center dark:border-slate-800">
              4
            </button>
            <img
              alt="4"
              className="rounded-xl"
              height="125"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/125",
                objectFit: "cover",
              }}
              width="200"
            />
          </button>
          <button className="flex flex-col items-center gap-2">
            <button className="text-sm font-medium rounded-lg border border-slate-200 border-gray-200/70 backdrop-blur-sm p-2 w-[100px] h-8 flex items-center justify-center dark:border-slate-800">
              5
            </button>
            <img
              alt="5"
              className="rounded-xl"
              height="125"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/125",
                objectFit: "cover",
              }}
              width="200"
            />
          </button>
          <button className="flex flex-col items-center gap-2">
            <button className="text-sm font-medium rounded-lg border border-slate-200 border-gray-200/70 backdrop-blur-sm p-2 w-[100px] h-8 flex items-center justify-center dark:border-slate-800">
              6
            </button>
            <img
              alt="6"
              className="rounded-xl"
              height="125"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/125",
                objectFit: "cover",
              }}
              width="200"
            />
          </button>
        </div>
      </div>
    </div>
  )
}


function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

export default Modules;