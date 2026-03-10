import { useState } from "react";

type Props = {
  maxStars: number;
  defaultValue: number;
}

export const StarRating = ({
  maxStars = 5,
  defaultValue = 0,
}: Props) => {
  const [rating, setRating] = useState(defaultValue);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => setHovered(index);
  const handleMouseLeave = () => setHovered(null);

  const handleClick = (index: number) => {
    setRating(index);
  };

  const displayValue = hovered ?? rating;

  return (
    <div className="flex">
      {Array.from({ length: maxStars }, (_, i) => {
        const index = i + 1;
        const filled = index <= displayValue;

        return (
          <button
            key={index}
            type="button"
            aria-label={`Rate ${index} of ${maxStars}`}
            style={{
              '--icon-size': '64px',              
              border: 'none',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              width: 'var(--icon-size)',
              height: 'var(--icon-size)',
            } as React.CSSProperties}   
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          >
            {filled ? <FilledStar /> : <EmptyStar />}
          </button>
        );
      })}
    </div>
  );
}

const EmptyStar = () => {
  return <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="star-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  </>
}

const FilledStar = () => {
  return <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="star-icon star-icon-filled"
      style={{fill: 'yellow'}}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  </>
}
