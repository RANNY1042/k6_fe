import Mylistbox from "./Mylistbox";
import listData from "./MyListData.json"
console.log(listData)

export default function MylistMain() {

  const myItems = listData.map(item=>
    <Mylistbox title={item.title} 
    imgUrl={item.imgUrl}
    content={item.content}
    key={item.title}/>
    );
    
  return (
    <div className="w-10/12 grid grid-cols-1 lg:grid-cols-2 gap-4">
     {myItems}
    </div>
  )
}