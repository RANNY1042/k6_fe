

export default function TailButton({caption,color, handleClick}) {
  console.log(color)

  const colorObj = {
    'blue' : 'bg-blue-800',
    'red' : 'bg-red-800',
    'orange': 'bg-orange-800',
    'green' : 'bg-green-800'
  }

  const hoverObj = {
    'blue' : 'hover:bg-blue-800',
    'red' : 'hover:bg-red-800',
    'orange': 'hover:bg-orange-800'
  }
  const bcolor = `p-2 ${colorObj[color]} ${hoverObj[color]} text-white rounded-md`;

  return (
    <button className={bcolor}
        onClick={handleClick}>
    {caption}
    </button>
  )
}
