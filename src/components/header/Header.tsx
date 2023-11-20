import { Progress } from "./progress/Progress";

export const Header = () => (
   <section className="border-b-4 border-[#2BBBEE] w-full h-1/4 bg-[url('/public\bg-header.svg')] bg-cover bg-bottom p-5">
      <div className="grid grid-flow-col h-full pt-14">
         <div className="flex flex-col justify-between">
            <span className="text-white block text-4xl font-body">
               Your Things
            </span>
            <span className="text-white block text-sm">Nov, 19, 2024</span>
         </div>
         <Progress />
      </div>
   </section>
);
