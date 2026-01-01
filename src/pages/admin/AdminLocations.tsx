import { Helmet } from 'react-helmet-async';
import AdminLayout from '@/components/admin/AdminLayout';
import { MapPin } from 'lucide-react';

const AdminLocations = () => {
  return (
    <>
      <Helmet>
        <title>إدارة المدن والأحياء | وسم هوم العقارية</title>
      </Helmet>

      <AdminLayout title="إدارة المدن والأحياء">
        <div className="bg-card rounded-xl p-8 shadow-soft border border-border text-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">إدارة المدن والأحياء</h2>
          <p className="text-muted-foreground">
            صفحة إدارة المواقع الجغرافية - سيتم إضافة المحتوى لاحقاً
          </p>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminLocations;
