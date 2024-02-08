const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center px-7 py-4 border rounded-full bg-orange-600 font-[montserrat] text-white">
        {label}
        <img className="ml-2 rounded-full w-5 h-5" src={iconURL} alt="arrow right icon" />
    </button>
  )
}

export default Button