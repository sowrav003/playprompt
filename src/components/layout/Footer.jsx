import Link from "next/link"


const Footer = () => {
  return (
    <div className="flex items-center justify-between bg-background text-foreground px-14 py-6 border-t border-border mt-4">
        <div className="flex flex-col items-start justify-center bg-background text-foreground py-6">
            <h1 className='text-2xl font-bold'>PlayPrompt</h1>
            <p className='text-sm text-muted-foreground'>© 2026 PlayPrompt. All rights reserved.</p>
        </div>
        <div    className="flex flex-col items-center justify-center bg-background text-foreground py-6">
            <ul className='flex items-center justify-center gap-6 py-4 text-sm text-muted-foreground'>
                <li><Link href="/">CHANGELOG</Link></li>
                <li><Link href="/">GITHUB</Link></li>
                <li><Link href="/">STATUS</Link></li>
                <li><Link href="/">PRIVACY</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer