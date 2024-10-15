const hour_hand = document.querySelector(".hour-hand")
const min_hand = document.querySelector(".min-hand")
const sec_hand = document.querySelector(".sec-hand")

const dh = document.querySelector(".dh")
const dm = document.querySelector(".dm")
const ds = document.querySelector(".ds")

setInterval(()=>{
    const times = new Date();
    let h= times.getHours();
    let m = times.getMinutes();
    let s = times.getSeconds();
    let hrotation = 30*h+h/2;
    let mrotation = 6*m;
    let srotation = 3*s;

    dh.innerText = h;
    dm.innerText = m;
    ds.innerText = s;

    hour_hand.style.transform = `rotate(${hrotation}deg)`
    min_hand.style.transform = `rotate(${mrotation}deg)`
    sec_hand.style.transform = `rotate(${srotation}deg)`
},[])