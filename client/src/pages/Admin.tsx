import AdminForms from "@/components/AdminForms";

export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8" data-testid="page-admin">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage alumni profiles, events, and success stories
        </p>
      </div>

      <AdminForms />
    </div>
  );
}