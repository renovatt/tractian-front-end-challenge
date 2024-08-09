import * as React from 'react'

function MIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx={12}
        cy={12}
        r={11.75}
        fill="#2188FF"
        stroke="#fff"
        strokeWidth={0.5}
      />
      <path
        d="M7.005 6.818h1.472l3.46 8.452h.12l3.46-8.452h1.471V17h-1.153V9.264h-.1L12.555 17H11.44L8.258 9.264h-.1V17H7.006V6.818z"
        fill="#fff"
      />
    </svg>
  )
}

export default MIcon
