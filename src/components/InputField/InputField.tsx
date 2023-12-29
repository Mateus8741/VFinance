export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement>

export function InputField({ ...props }: InputFieldProps) {
  return <input className="w-full p-4 bg-gray-800 rounded-md" {...props} />
}
