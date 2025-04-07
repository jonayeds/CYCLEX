import { Dot } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl">
      <p className="flex items-end gap-1">
        Loading
        <Dot className="animate-bounce duration-700" />
        <Dot className="animate-bounce duration-700 delay-100 " />
        <Dot className="animate-bounce duration-700 delay-200" />
      </p>
    </div>
  );
};

export default Loading;
