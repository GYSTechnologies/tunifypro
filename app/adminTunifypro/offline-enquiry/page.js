
import AdminLayout from "../AdminLayout";
import OfflineEnquiryForm from "@/components/sections/admin/OfflineEnquiryForm";
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
      <AdminLayout>
        <OfflineEnquiryForm/>
        </AdminLayout>
    </div>
  );
}
