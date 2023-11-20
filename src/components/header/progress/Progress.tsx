import { ProgressItem } from "./progressItem/ProgressItem";

export const Progress = () => (
   <article className="flex flex-col items-end justify-between">
      <div className="flex gap-5">
         <ProgressItem value={12} label="Feitos" />
         <ProgressItem value={20} label="Total" />
      </div>
      <span className="text-white block text-sm">Nov, 19, 2024</span>
   </article>
);
