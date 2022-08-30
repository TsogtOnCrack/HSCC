export const Header = (props) => {
  const { fix } = props

  return (
    <div className={`flex flex-col mt-[50px] ${fix ? 'fixed z-50 top-0' : ''}`}>
      <h1
        className={
          fix == false ? `font-maze text-[200px] h-[160px] flex justify-center items-center text-white ` : 'hidden'
        }
      >
        HSCC
      </h1>
      <h1 className="font-bebas text-[65px] h-[65px] flex justify-center items-center text-center text-[#EDAE49] ">
        Hobbyschool coding club
      </h1>
    </div>
  )
}
