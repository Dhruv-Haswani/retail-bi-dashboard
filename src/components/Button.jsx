// @ts-nocheck
function Button({ children }) {
  return (
    <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
      {children}
    </button>
  )
}

export default Button