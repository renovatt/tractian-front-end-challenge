'use client'

type ButtonProps = {
  variant: 'default' | 'primary' | 'outline'
  className?: string
  children: React.ReactNode
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({
  variant,
  className,
  children,
  onClick: handdleOnClick,
}) => {
  const baseStyle =
    'px-4 rounded focus:outline-none focus:shadow-outline text-sm py-2'
  let variantStyle = ''

  switch (variant) {
    case 'default':
      variantStyle = 'bg-950 text-white hover:bg-900'
      break
    case 'primary':
      variantStyle = 'bg-900 text-white border border-900'
      break
    case 'outline':
      variantStyle =
        'bg-white text-950 hover:bg-900 hover:text-white border border-900'
      break
    default:
      break
  }

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={handdleOnClick}
    >
      {children}
    </button>
  )
}

export default Button
