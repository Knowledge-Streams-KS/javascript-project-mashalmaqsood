const getmname=document.getElementById('mname');
const searchbtn=document.getElementById('btn');
searchbtn.addEventListener("click", ()=>getdata(getmname))
window.onload = function () {
  let localData = localStorage.getItem("localData");
  if (localData) {
    let movieDetail = document.getElementById("movielist");
    movieDetail.innerHTML = localData;
  }
  sessionStorage.clear();
};
// Onbeforeunload function to unload
window.onbeforeunload = function () {
  let movieDetail = document.getElementById("movielist").innerHTML;
  localStorage.setItem("localData", movieDetail);
};

const getdata = async(getmname) =>{
     let movieDetail = document.getElementById("movielist");
  // console.log(movieDetail);
  movieDetail.innerHTML = "";
const getyear=document.getElementById("yearr").value;
const resp=await fetch(`http://www.omdbapi.com/?s=${getmname.value}&apikey=c24856c7`);
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
y_data.map(showlist)

// function clearcontent(movielist)
// {
//     document.getElementById(movielist).innerHTML="";
// }


}
function showlist(data)
{
const div_id = document.getElementById('movielist');
const new_element =   ` 
<img src=${data.Poster}>
<p>${data.Title}</p>
<p>${data.Year}</p>`
div_id.insertAdjacentHTML("afterbegin",new_element);
// document.getElementById(new_element)="";

}












