

export default function TailBall({n}) {

    const bcolor=[
        'bg-red-700',
        'bg-orange-800',
        'bg-lime-800',
        'bg-blue-800',
        'bg-purple-800'
      ];

    const ballColor= `w-20 h-20
                flex justify-center items-center
                ${bcolor[parseInt(n/10)]} text-white text-center
                font-bold text-xm   
                rounded-full` ; 
    
  return (

    <div className={ballColor}>
      {n}
    </div>
  )
}
