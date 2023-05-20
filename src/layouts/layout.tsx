import Sidebar from '@/components/sidebar/sidebar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap bg-white" style={{ minHeight: '100vh' }}>
      <Sidebar />
      <main className={`w-4/5 ${inter.className}`}>{children}</main>
    </div>
  );
}
