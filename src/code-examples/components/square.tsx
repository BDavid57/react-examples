type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

export function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button
      onClick={onSquareClick}
      style={{
        width: '60px',
        height: '60px',
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer'
      }}
    >
      {value}
    </button>
  );
}
