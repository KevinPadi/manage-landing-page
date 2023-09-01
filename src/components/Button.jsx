function Button ({ bgColor, textColor }) {
  return (
    <button className={`md:inline-block px-7 py-3 rounded-full font-semibold text-xs ${textColor} shadow-lg shadow-BrightRed/40 ${bgColor} hover:opacity-60`}>Get Started
    </button>
  )
}

export default Button
