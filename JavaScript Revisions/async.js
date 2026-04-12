async function getdata(){
   var blob= await fetch(`https://randomuser.me/api/`);
   var data = await blob.json();
   console.log(data.results);
}
getdata();