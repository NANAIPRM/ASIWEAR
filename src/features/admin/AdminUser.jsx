import Headers from "../layouts/Headers";
import AdminSidebar from "../layouts/AdminSidebar";
export default function AdminUser() {
  return (
    <div>
      <Headers />
      <div className="flex mt-[-20px]">
        <AdminSidebar />
        <div></div>
      </div>
    </div>
  );
}
