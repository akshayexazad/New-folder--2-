let posts=[{titel:'post one',body:"this is post one",createdAt:new Date().getTime()},
{titel:'post two',body:"this is post two",createdAt:new Date().getTime()}
];
let intervalId=0;
function getPost(){
    clearInterval(intervalId)
   intervalId= setInterval(()=>{
        let output='';
        posts.forEach((post) => {
        output+=`<li>${post.titel} and Created ${Math.floor((new Date().getTime()-post.createdAt)/1000)} second ago</li>`
        })
        document.body.innerHTML=output;
        
    },1000)
}
const createpost = async(post)=>{
    const createnewpost= await new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({...post ,createdAt:new Date().getTime()})
            let err = false;
            if(!err){
               resolve()
             }else{
               reject("Error:Somthing went wrong");
            }
       
            },2000);
    })
    
}
 function  getPost(){
    clearInterval(intervalId)
   intervalId= setInterval(()=>{
        let output='';
        posts.forEach((post) => {
        output+=`<li>${post.titel} and Created ${Math.floor((new Date().getTime()-post.createdAt)/1000)} second ago</li>`
        })
        document.body.innerHTML=output;
        
    },1000)
}
async function deletePost(){
    let delet = await new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(posts.length>0){
            let lastelement=posts.pop();
            resolve(lastelement)
        }else{
            reject('Array is empty now')
        }
       },1000)
    })
}

createpost({titel:'post three',body:"this is post three"}).then(getPost).then(deletePost)
console.log(posts)