import AdminPageLayout from "@/components/layout/AdminPageLayout";
import { MembersListClient } from "@/components/admin/MembersListClient";

export default function AdminMembersPage() {
    return (
        <AdminPageLayout
            title="Members"
            subtitle="Manage registered members and track community growth."
            activePage="members"
        >
            <MembersListClient />
        </AdminPageLayout>
    );
}
