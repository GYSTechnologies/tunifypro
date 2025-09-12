import Home from "@/components/sections/home/Home";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import AdminLayout from "../AdminLayout";
import Login from "@/components/sections/admin/Login";
export const metadata = {
  title: 'Admin - Tunifypro',
  description:'',
  icons:{
    icon:'/tunifyprologo.png',
  },
}
export default function page() {
    return (
        <div className="">
            <Login />
        </div>
    );
}
