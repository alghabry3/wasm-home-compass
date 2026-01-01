import { Helmet } from 'react-helmet-async';
import AdminLayout from '@/components/admin/AdminLayout';
import { Building } from 'lucide-react';

const AdminProperties = () => {
  return (
    <>
      <Helmet>
        <title>إدارة العقارات | وسم هوم العقارية</title>
      </Helmet>

      <AdminLayout title="إدارة العقارات">
        <div className="bg-card rounded-xl p-8 shadow-soft border border-border text-center">
          <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
            <Building className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-xl font-bold text-foreground mb-2">إدارة العقارات</h2>
          <p className="text-muted-foreground">
            صفحة إدارة العقارات - سيتم إضافة المحتوى لاحقاً
          </p>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminProperties;
