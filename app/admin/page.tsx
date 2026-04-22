import { Metadata } from 'next'
import AdminLayout from '@/components/admin/AdminLayout'

export const metadata: Metadata = {
  title: 'Editorial Dashboard | The Daily Report',
  description: 'Admin panel for managing articles, media, and content',
}

export default function AdminPage() {
  return <AdminLayout />
}
