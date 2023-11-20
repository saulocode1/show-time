import { ProgressItemProps } from "./ProgressItem.types";

export const ProgressItem = ({ value, label }: ProgressItemProps) => {
   return (
      <div className="flex flex-col items-end">
         <span className="text-white block text-2xl">{value}</span>
         <span className="block text-sm text-slate-400">{label}</span>
      </div>
   );
};
