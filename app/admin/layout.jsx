import { assets } from "@/Assets/assets";
import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { MdAdminPanelSettings } from "react-icons/md";


export default function Layout({ children }) {
    return (
        
        <div className="flex">
        <ToastContainer theme="dark"/>
        <Sidebar />
        <div className="flex bg-[#f7a541] flex-col w-full">
          <div className="flex items-center justify-between w-full py-3 max-h-[100px] px-12 border-b border-black">
            <div className="flex items-center">
              <MdAdminPanelSettings className="mr-2" size={30} />
              <h3 className="font-lg font-bold text-xl">Admin Panel</h3>
            </div>
            <Image src={assets.profile_icon} width={70} alt="" />
          </div>
          {children}
        </div>
      </div>
   
  );
}