/* eslint-disable react/prop-types */
function HeaderItem({ name, Icon }) {
  return (
    <div className="mb-3 hover:underline underline-offset-8 text-[18px] gap-2 text-white font-semibold flex items-center">
      <Icon />
      <h2 className="">{name}</h2>
    </div>
  );
}
export default HeaderItem;
