export const Divider = (props) => {
  const { text } = props
  return (
    <div className="flex flex-col w-screen items-center">
      <h1 className=" w-[80vw] font-bebas text-white text-[30px]">{text}</h1>
      <div className=" w-[95vw] h-[2px] bg-white"></div>
    </div>
  )
}
