import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Me | sohamnaik.com',
    description: 'things about me in more detail',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 
