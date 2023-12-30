import { RadioProps, VisuallyHidden, cn, useRadio } from '@nextui-org/react'
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from 'lucide-react'

export function CustomRadio(props: RadioProps) {
  const {
    Component,
    children,
    isSelected,
    getBaseProps,
    getInputProps,
    getLabelProps,
    getLabelWrapperProps,
  } = useRadio(props)

  const isEntry = props.value === 'entrada'

  return (
    <Component
      {...getBaseProps()}
      className={cn(
        'inline-flex m-0 bg-gray-700 hover:bg-gray-600 items-center justify-center',
        'flex-row-reverse w-[195px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
        isSelected ? 'border-green-700' : '',
      )}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div {...getLabelWrapperProps()} className="flex flex-row gap-3">
        {children && (
          <>
            <span {...getLabelProps()} className="text-white">
              {children}
            </span>
            {isSelected ? (
              isEntry ? (
                <ArrowUpCircleIcon size={24} color="green" />
              ) : (
                <ArrowDownCircleIcon size={24} color="red" />
              )
            ) : isEntry ? (
              <ArrowUpCircleIcon size={24} color="white" />
            ) : (
              <ArrowDownCircleIcon size={24} color="white" />
            )}
          </>
        )}
      </div>
    </Component>
  )
}
