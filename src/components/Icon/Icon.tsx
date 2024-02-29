type IconProps = {
  name: string;
  width?: number;
  height?: number;
};

export const Icon = ({ name, width, height }: IconProps) => {
  return (
    <svg className={`icon icon-${name}`} style={{ width, height }}>
      <use xlinkHref={`/images/sprite.svg#${name}`}></use>
    </svg>
  );
};
