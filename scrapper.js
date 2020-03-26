const axios=require('axios')
const fs=require('fs')

var url=process.argv.slice(2)[0]
console.log({url})

function getDescription(d){
    let des=''
    let colorInfo=d.productInfo[0].productContent.colorDescription
    des=colorInfo

    return des
}

async function startScrap(){
    try{
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
        process.exit(-1)
    }
}

startScrap()

