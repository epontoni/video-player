const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $foward = document.querySelector('#foward')
const $backward = document.querySelector('#backward')
const $title = document.querySelector('#title')


$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$foward.addEventListener('click', handleFoward)
$backward.addEventListener('click', handleBackward)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}

function handleFoward(){
    $video.currentTime += 10 
}

function handleBackward(){
    $video.currentTime -= 10 
}
$progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
    let fileSrc = $video.currentSrc.split('/')
    $title.innerHTML = fileSrc[fileSrc.length -1]

}

function handleTimeUpdate(){
    $progress.value = $video.currentTime

}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
}

$volume = document.querySelector('#volume')
$volume.addEventListener('input', handleVolume)
function handleVolume(){
    $video.volume = $volume.value
}
$btnVolume = document.querySelector('#btn-volume')
$btnVolume.addEventListener('click', handleMute)
function handleMute(){
    if($video.volume != 0)
        $video.volume =  0
    else
        $video.volume =  $volume.value
}