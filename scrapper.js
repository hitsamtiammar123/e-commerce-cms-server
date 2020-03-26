const axios=require('axios')
const fs=require('fs')

function getDescription(d){
    let des=''
    let colorInfo=d.productInfo[0].productContent.colorDescription
    des=colorInfo

    return des
}

async function startScrap(){
    try{
        let url='https://api.nike.com/product_feed/rollup_threads/v2?filter=marketplace%28ID%29&filter=language%28en-GB%29&filter=employeePrice%28true%29&filter=attributeIds%287817e756-7721-4cfb-b404-04df79c685e4%2C16633190-45e5-4830-a068-232ac7aea82c%2C7baf216c-acc6-4452-9e07-39c2ca77ba32%29&anchor=0&consumerChannelId=d9a5bc42-4b9c-4976-858a-f159cf99c647&count=60';
        let {data}=await axios.get(url)
        let dataObj=data
        let result=[];
        let rawObjects=dataObj.objects
        let categories=['lifestyle','gym','basketball','soccer']

        for(let i=0;i<rawObjects.length;i++){
            let d=rawObjects[i]
            let obj={}
            obj.name=d.publishedContent.properties.title
            obj.price=d.productInfo[0].merchPrice.currentPrice
            obj.stock=Math.floor(Math.random()*30)
            obj.category=categories[Math.floor(Math.random()*categories.length)]
            obj.image_url=d.publishedContent.properties.productCard.properties.squarishURL
            obj.isScrapped=true
            obj.description=getDescription(d)
            result.push(obj)
            
        }

        let file='./scrapData.json'
        let file_content=JSON.stringify(result,null,2)
        fs.writeFileSync(file,file_content)

    }catch(err){
        console.log(err)
        console.log('Ada error di pada saat nge-scrap',err)
    }
}

startScrap()

