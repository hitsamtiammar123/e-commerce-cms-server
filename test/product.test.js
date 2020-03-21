const app=require('../app');
const request=require('supertest');

function onDone(done){
    return function(err,res){
        if(err) return done(err);
        done()
    }
   
}

describe('POST /product',()=>{
    it('response with json',(done)=>{
        request(app)
        .post('/product')
        .send({name:'Sepatu nike',image_url:'img.png',price:30000,stock:10})
        .set('Accept', 'application/json')
        .expect(function(res){
            res.body.status='Product has created'
        })
        .expect(201)
        .end(onDone(done))
    }) 
});

describe('PUT /product/id',()=>{
    it('response with json',(done)=>{
         request(app)
        .put('/product/3')
        .send({name:'Sepatu adidas'})
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err,res){
            if(err) return done(err);

            expect(res.body.status).toBe('updated');
            done();
        })
    
    })
})

describe('DELETE /product/id',()=>{
    it('should delete product based on id',(done)=>{
        request(app)
        .delete('/product/1')
        .send()
        .set('Accept', 'application/json')
        .expect(200)
        .end(onDone(done))
    })
})