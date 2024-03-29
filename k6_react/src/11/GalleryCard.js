import gdata from './GalleryData.json'

export default function GalleryCard({gdata}) {
    console.log(gdata)

    const Url=gdata.galWebImageUrl.replace("http://","https://");
    const Title=gdata.galTitle;
    const Location= gdata.galPhotographyLocation;
    const ContentId = gdata.galContentId;
    
    let keyword = gdata.galSearchKeyword.split(',');

    //    //if includes구문으로 map돌리기

    // if (keyword = gdata.galSearchKeyword
    //keyword.includes(',')
    //     keyword & gdata.galSearchKeyword.split(','))    

  return (
   
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src={Url} alt={Title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{Title}</div>
      <p className="text-gray-700 text-sm font-bold">
     {Location}
    </p>
    </div>
    
    <div className="px-6 pt-4 pb-2">
        {/* if 구문으로 활용 */}

           {keyword.map((item)=>(<span key={item}
            className="inline-block bg-gray-200 
            rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {item}</span>))}



        {/* 
        if(keyword.includes(,))
        keyworld.split(,)
        {keyword.map((item)=>
        (<span key={item}
        className="inline-block bg-gray-200 
        rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {item} </span>
        ))}       

        else(
            {keyword.map((item)=>
        (<span key={item}
        className="inline-block bg-gray-200 
        rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {item} </span>
        ))}       
        ) */}

    </div>

  </div>
  

  )
}

