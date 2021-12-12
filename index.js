const search=document.getElementById("javascript");
const matchlist=document.getElementById("match-list");
const searchStates=async (searchText)=>{
    
    const res=await fetch("../data/auto.json");
    const states=await res.json();
    
    let matches=states.filter(state=>{
      const regex=new RegExp(`^${searchText}`,'gi');
      return state.name.match(regex) || state.abbr.match(regex);
    });
   console.log(matches);
   if(searchText.length==0){
       matches=[]
       matchlist.innerHTML=[]
   }
   outputHtml(matches);
 
};
const outputHtml=matches=>{
    if(matches.length>0){const html=matches.map(match=>`
    <div class='card card-body mb-1'>
    <h4>${match.name}<span class="text-primary">
    </span></div>
    `).join('');
 matchlist.innerHTML=html;}
}


search.addEventListener('input',() =>{
    searchStates(search.value)

});

function run(){
    let htmlcode=document.getElementById('html').value
    let css="<style>"+document.getElementById('css').value+"</style>"
    let jscode=document.getElementById('javascript').value
  let out=document.getElementById('output')
out.contentDocument.body.innerHTML=htmlcode+css
out.contentWindow.eval(jscode)


}
document.getElementById('html').addEventListener('keyup',run)
document.getElementById('css').addEventListener('keyup',run)
document.getElementById('javascript').addEventListener('keyup',run)

























