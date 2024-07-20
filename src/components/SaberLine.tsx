export default function SaberLine(props: { classname: string }) {
  return (
    <svg
      className={props.classname}
      viewBox="0 0 1 123"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.2838"
        y1="1.24053e-08"
        x2="0.283795"
        y2="123"
        stroke="#1373F5"
        stroke-opacity="0.4"
        stroke-width="0.5676"
      />
      <line
        x1="0.2838"
        y1="1.24053e-08"
        x2="0.283795"
        y2="101.775"
        stroke="url(#paint0_linear_625_554)"
        stroke-width="0.5676"
      />
      <defs>
        <linearGradient
          id="paint0_linear_625_554"
          x1="-0.499996"
          y1="-1.41995e-06"
          x2="-0.5"
          y2="101.775"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1373F5" stop-opacity="0" />
          <stop offset="1" stop-color="#1373F5" />
        </linearGradient>
      </defs>
    </svg>
  );
}
