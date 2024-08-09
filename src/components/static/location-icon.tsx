import * as React from 'react'

function LocationIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={16}
      height={20}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.694.222C3.48.222.056 3.278.056 6.944c0 5.525 7.638 12.834 7.638 12.834s7.64-7.31 7.64-12.834c0-3.666-3.425-6.722-7.64-6.722zm0 17.784C5.326 15.524 1.33 10.538 1.33 6.944c0-3.03 2.864-5.5 6.365-5.5 1.706 0 3.323.587 4.533 1.663 1.171 1.05 1.833 2.407 1.833 3.837 0 3.594-3.998 8.58-6.366 11.062zm2.547-11.062c0 1.357-1.133 2.445-2.547 2.445-1.413 0-2.546-1.088-2.546-2.445 0-1.356 1.133-2.444 2.546-2.444 1.414 0 2.547 1.088 2.547 2.444z"
        fill="#2188FF"
      />
    </svg>
  )
}

export default LocationIcon
