interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  icon?: React.ElementType
}

export function CustomButton({
  title,
  icon: Icon,
  ...rest
}: CustomButtonProps) {
  return (
    <button
      className="flex flex-row items-center justify-center gap-3 p-4 bg-gray-900 rounded-md"
      {...rest}
    >
      <div className="rotate-90">
        {Icon && (
          <Icon
            size="24"
            className="text-green-700"
            strokeLinecap="round"
            stroke="currentColor"
          />
        )}
      </div>

      <p className="text-sm font-bold text-green-700">{title}</p>
    </button>
  )
}
