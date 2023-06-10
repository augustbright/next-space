import { AuthProvider } from './component/auth-provider'
import { Nav } from './component/nav.component'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Space',
  description: 'Next Space: Reviving social networking with cutting-edge technology.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Nav />
          <div className='container mx-auto min-h-screen'>
            {children}
          </div>
          <footer>
            <p className="text-sm italic">© 2023 Next Space. All rights reserved.</p>
          </footer>
        </body>
      </html>
    </AuthProvider>
  )
}
