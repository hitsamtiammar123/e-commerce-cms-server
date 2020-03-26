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
        let url='https://api.nike.com/cic/browse/v1?queryid=products&anonymousId=C5F26689B209BC15034D7F00E9D08BE1&endpoint=%2Fproduct_feed%2Frollup_threads%2Fv2%3Ffilter%3Dmarketplace(ID)%26filter%3Dlanguage(en-GB)%26filter%3DemployeePrice(true)%26filter%3DattributeIds(0f64ecc7-d624-4e91-b171-b83a03dd8550%2C16633190-45e5-4830-a068-232ac7aea82c)%26anchor%3D48%26consumerChannelId%3Dd9a5bc42-4b9c-4976-858a-f159cf99c647%26count%3D60';
        let {data}=await axios.get(url)
        let dataObj=data
        let result=[];
        let rawObjects=dataObj.data.products.objects
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

