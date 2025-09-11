
import AdminLayout from "../AdminLayout";
import OfflineEnquiryForm from "@/components/sections/admin/OfflineEnquiryForm";
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
        <OfflineEnquiryForm/>
        </AdminLayout>
    </div>
  );
}
