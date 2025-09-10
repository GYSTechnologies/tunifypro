import Home from "@/components/sections/home/Home";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import AdminLayout from "../AdminLayout";
import ProductEnquiry from "@/components/sections/admin/ProductEnquiry";

export const metadata = {
  title: 'Admin - Tunifypro',
  description:'',
  icons:{
    icon:'/home/hero1.jpg'
  }
}

export default function page() {
  return (
    <div className="">
      <AdminLayout>
        <ProductEnquiry/>
        </AdminLayout>
    </div>
  );
}
