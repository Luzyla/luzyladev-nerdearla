export default function Button({
  className,
  id,
  txtButton,
  onClick,
  onClickRole,
}) {
  return (
    <button className={className} id={id} onClick={onClick} role={onClickRole}>
      {txtButton}
    </button>
  );
}
