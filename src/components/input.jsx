export const Input = (props) => {
  const { size, children, placeholder, onchange, val } = props

  const med = size == 'med'
  const small = size == 'small'
  const big = size == 'big'

  const mainClass = 'rounded-[10px] outline-0 p-2'

  console.log(med, small, big)

  return (
    <div className={`flex my-5 ${size == 'small' ? 'flex-row items-center' : 'flex-col'}`}>
      <h1 className="font-bebas text-[30px] text-white m-[10px]">{children}</h1>
      <input
        value={val}
        onChange={onchange}
        type="text"
        placeholder={placeholder}
        className={`w-[400px] h-[40px]  ${size == 'med' ? 'block' : 'hidden'} ${mainClass}`}
      />
      <input
        value={val}
        onChange={onchange}
        type="text"
        placeholder={placeholder}
        className={`w-[70px] h-[40px] ${size == 'small' ? 'block' : 'hidden'} ${mainClass}`}
      />
      <textarea
        value={val}
        onChange={onchange}
        placeholder={placeholder}
        className={`w-[80vw] h-[300px] ${size == 'big' ? 'block' : 'hidden'} ${mainClass}`}
      />
    </div>
  )
}
