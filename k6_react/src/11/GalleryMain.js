import TailButton from '../UI/TailButton'
import TailInput from '../UI/TailInput'
import GalleryCard from './GalleryCard';
import { useRef,useState, useEffect } from 'react'

export default function GalleryMain() {  
  
    const keyword = useRef();
    const [tdata, setTdata]=useState();
    const [tags, setTags]=useState();

    useEffect(()=>{
        if(!tdata) return;

        let tm = tdata.map((item)=> 
        <GalleryCard gdata={item}/>)
                                
                       setTags(tm);
        
    },[tdata])


    const handleKeyword = ()=>{

    }    
    const getData = (w)=>{
        console.log(w);
        let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
        url = url+`serviceKey=${process.env.REACT_APP_APIKEY}`;
        url = url+`&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A`
        url = url+`&keyword=${w}&_type=json`;

        fetch(url)
        .then(resp => resp.json())
        .then(data => setTdata(data.response.body.items.item))
        .catch(err => console.log(err))
    }

    const handleFetch = () => {
        if(keyword.current.value==''){
            alert('키워드를 입력하세요.');
            keyword.current.focus();
            return;
        }

        let w = encodeURI(keyword.current.value);
        console.log(w); 
        getData(w);    

        }
    
    const handleClear = () =>{
        console.log(keyword.current.value)
    }

    return (
    <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
    <div className='w-full flex flex-row space-x-3 justify-center items-center'>
    <div className='p-2'>
        <TailInput className="w-11/12"
                    type="text"
                    inputRef={keyword}
                    ph="키워드 입력"
                    handleChange={handleKeyword}/>
    </div>
    <div>
        <TailButton caption="조회"
                    color="blue"
                    handleClick={handleFetch}/>
    </div>
    <div>    
        <TailButton caption="취소"
                    color="blue"
                    handleClick={handleClear}/>    
    </div>
    </div>


    <div className='grid grid-cols-4 md:grid-cols-3 gap-4'>


        {tags}



    </div>


    
    </div>
  )
}

