

export default function MyDiv3(probs) {

  return (
    <div className="w-4/5 h-4/5 
                    flex flex-col justify-center items-center
                    bg-lime-500
                    text-lime-50">
      <p className="w-4/5 justify-start
                    font-bold
                    text-2xl
                    p-5
                    ">
                    {`${probs.d11}>${probs.d21}>${probs.d31}`}    
                    </p>  

    </div>
  )
}