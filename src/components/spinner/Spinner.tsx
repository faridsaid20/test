type SpinnerProps = {
  fromColor?: string;
  toColor?: string;
  scale?: number;
};
export const Spinner = (props: SpinnerProps) => {
  const fromColor = props.fromColor ?? "#282D98";
  const toColor = props.toColor ?? "#f5f6fb";
  let scale = props.scale ?? 1;
  scale = Math.max(scale, 0.2);
  scale = Math.min(scale, 3);
  const width = (scale * 96).toString();
  const height = (scale * 97).toString();
  return (
    <svg
      className="animate-spin mx-auto"
      width={width}
      height={height}
      viewBox="0 0 96 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M91.1265 38.9028C93.3175 38.6201 95.3228 40.1671 95.6054 42.3581C95.8682 44.3948 96 46.4464 96 48.5C96 50.7092 94.2091 52.5 92 52.5C89.7909 52.5 88 50.7092 88 48.5C88 46.7886 87.8902 45.079 87.6712 43.3817C87.3885 41.1908 88.9355 39.1855 91.1265 38.9028Z"
        fill="#2D32AA"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 96.5C74.5097 96.5 96 75.0097 96 48.5C96 21.9903 74.5097 0.5 48 0.5C21.4903 0.5 0 21.9903 0 48.5C0 75.0097 21.4903 96.5 48 96.5ZM48 88.5C70.0914 88.5 88 70.5914 88 48.5C88 26.4086 70.0914 8.5 48 8.5C25.9086 8.5 8 26.4086 8 48.5C8 70.5914 25.9086 88.5 48 88.5Z"
        fill="url(#paint0_angular_397_26)"
      />
      <defs>
        <radialGradient
          id="paint0_angular_397_26"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(90) scale(155)"
        >
          <stop stopColor={fromColor} />
          <stop offset="1" stopColor={toColor} />
        </radialGradient>
      </defs>
    </svg>
  );
};
