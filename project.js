
const getdata=async()=>{
const getmname=document.getElementById("mname").value;
const getyear=document.getElementById("yearr").value;
//btn.addEventListener("click",()=>(getdata(getmname)))
const resp=await fetch(`http://www.omdbapi.com/?s=${getmname}&apikey=c24856c7`);
const data=await resp.json();
console.log(data);
const m_year= data['Search'];
const y_data= m_year.filter((y)=>
{
    if(y['Year'] === getyear)
    {
        return y;
    }
})
console.log(y_data);
}





