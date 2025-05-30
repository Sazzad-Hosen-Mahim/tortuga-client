import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ViewContext } from "@/pages/Service/ViewContext";


import { useContext } from "react";
import { FaList } from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const ServiceTopBar = () => {
  const { currentView, setCurrentView } = useContext(ViewContext);

  return (
    <div className="w-full bg-gray-300 h-[70px] rounded-xs p-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Sort By:</span>
        <Select>
          <SelectTrigger className="w-[180px] bg-primary-bg rounded-none">
            <SelectValue placeholder="Position" />
          </SelectTrigger>
          <SelectContent className="rounded-none">
            <SelectItem value="light" className="!hover:bg-primary-orange ">
              A-Z
            </SelectItem>
            <SelectItem value="dark">Price</SelectItem>
            <SelectItem value="system">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-2 me-3">
        <button
          onClick={() => setCurrentView("list")}
          className={`p-2 rounded-md ${
            currentView === "list" ? "text-blue-500 " : "text-gray-600"
          }`}
        >
          <FaList className="text-lg" />
        </button>
        <button
          onClick={() => setCurrentView("grid")}
          className={`p-2 rounded-md ${
            currentView === "grid" ? "text-blue-500 " : "text-gray-600"
          }`}
        >
          <TfiLayoutGrid3Alt className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ServiceTopBar;
