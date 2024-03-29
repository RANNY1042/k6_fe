import gdata from './FestivalData.json'

export default function FestivalCard({gdata}) {

    const Url=gdata.MAIN_IMG_NORMAL;
    const Title=gdata.MAIN_TITLE;
    const Location= gdata.TRFC_INFO;
    const USAGE_DAY = gdata.USAGE_DAY_WEEK_AND_TIME
    console.log(gdata)

    return (
    <div>
    <div className="w-full rounded overflow-hidden shadow-lg">
    <img className="w-full" src={Url} alt={Title} />
    <div className="px-6 py-4">
      <div className="font-bold text-2xl mb-2">{Title}</div>
      <p className="text-gray-700 text-xm font-bold">
     {Location}
    </p>
    </div>
    
    <div className="px-6 pt-4 pb-2">
        {/* if 구문으로 활용 */}
           
           <span 
           className='inline-block bg-gray-200 
            rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>

              {USAGE_DAY} </span>

    </div>
    </div>
  </div>
  

  )
}

