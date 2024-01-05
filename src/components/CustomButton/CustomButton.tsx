import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import dynamic from 'next/dynamic'

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<LucideProps, 'ref'> {
  title: string
  icon?: keyof typeof dynamicIconImports
  rotate?: boolean
}

export function CustomButton({
  title,
  icon,
  rotate,
  ...rest
}: CustomButtonProps) {
  const LucideIcon = dynamic(
    dynamicIconImports[icon as keyof typeof dynamicIconImports],
    { ssr: false },
  )

  return (
    <button
      className="flex flex-row items-center justify-center gap-3 p-4 bg-gray-900 rounded-md"
      {...rest}
    >
      <div className={rotate ? 'rotate-90' : ''}>
        <LucideIcon
          size="24"
          className="text-green-700"
          strokeLinecap="round"
          stroke="currentColor"
        />
      </div>

      <p className="text-sm font-bold text-green-700">{title}</p>
    </button>
  )
}
