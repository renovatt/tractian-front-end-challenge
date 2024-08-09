import * as React from 'react'

function RadioIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      width={15}
      height={16}
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.833 1.5c1.25 0 2.5.5 3.5 1.417L15 2.25A5.874 5.874 0 0010.833.5c-1.5 0-3 .583-4.166 1.75l.666.667c1-.917 2.25-1.417 3.5-1.417zm-2.75 2.083l.667.667c.583-.583 1.333-.833 2.083-.833.75 0 1.5.25 2.084.833l.666-.667c-.75-.75-1.75-1.166-2.75-1.166s-2 .416-2.75 1.166zm5.25 5.25h-1.666V5.5H10v3.333H1.667C.75 8.833 0 9.583 0 10.5v3.333C0 14.75.75 15.5 1.667 15.5h11.666c.917 0 1.667-.75 1.667-1.667V10.5c0-.917-.75-1.667-1.667-1.667zm0 5H1.667V10.5h11.666v3.333zM2.5 11.333h1.667V13H2.5v-1.667zm2.917 0h1.666V13H5.417v-1.667zm2.916 0H10V13H8.333v-1.667z"
        fill="#2188FF"
      />
    </svg>
  )
}

export default RadioIcon
