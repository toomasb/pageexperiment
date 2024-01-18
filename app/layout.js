import { Inter } from 'next/font/google'
import './globals.css'
import { PageExperimentContext } from '../components/PageExperimentContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PageExperiment',
  description: 'Effortless A/B testing',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>
      <PageExperimentContext apiKey="yourapikey">
        {children}
        </PageExperimentContext>
        </body>
    </html>
  )
}

