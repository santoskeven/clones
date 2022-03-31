const btn =  document.getElementsByClassName('btn_action')

btn[0].addEventListener('click', () => {
    let getI = btn[0].classList.contains('fa-play')
  
  if(getI == true){
      btn[0].classList.remove('fa-play')
      btn[0].classList.add('fa-stop')

      audio.play()
  }else{
    btn[0].classList.add('fa-play')
    btn[0].classList.remove('fa-stop')

    audio.pause()
  }

})


const audio = document.getElementById('audioplayer')
let loaded = false;

const playSong = (file) => {

  if(loaded == false){
    audio.innerHTML = `<source src="`+file+`" type="audio/mp3 " />`;
    loaded = true;
  }

  audio.load()

      btn[0].classList.remove('fa-play')
      btn[0].classList.add('fa-stop')

}


document.querySelectorAll('.music_single').forEach(item => {

   item.addEventListener('click', (evt) => {

        let img = item.getAttribute('data-image')
        let artist = item.getAttribute('data-artist')
        let song = item.getAttribute('data-song')
        let file = item.getAttribute('data-file');

        let setAttr = document.getElementsByClassName('player_img')

        setAttr[0].innerHTML = `
        <img src="`+img+`" />
        <h3>`+artist+`<br/><span>`+song+`</span></h3>

      `;
        playSong(file)
   })
})


// marcador de time da musica e init

let setWidth = document.getElementsByClassName('time_long')
let bol_time = document.getElementsByClassName('boll_time')

audio.oncanplaythrough = () => {
  audio.play()
}

audio.addEventListener('timeupdate', () => {

  let curTime = audio.currentTime
  let sizeTime = audio.duration

  let w_value = curTime / sizeTime * 100

  setWidth[0].style.width = w_value + '%'
  bol_time[0].style.marginLeft = "calc" + "(" + w_value + "%" + ")"

})


// funtion of background for menu fixed top right

let scroll = document.getElementsByClassName('cont_right')
const targ_scrol = document.getElementsByClassName('right_top')

console.log(scroll[0])

scroll[0].addEventListener('scroll', () => {

  if(scroll[0].scrollTop > 20){
    console.log('sdfsdfsdf')
    targ_scrol[0].style.backgroundColor = 'rgb(45, 45, 45, .8)';
  }else{
    targ_scrol[0].style.backgroundColor = 'rgb(45, 45, 45, 0)';
  }

})