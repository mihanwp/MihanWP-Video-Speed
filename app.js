window.addEventListener('load',function(){
    if (!window.jQuery) {
        return console.log('jQuery is not exists!');
    }
})

jQuery(document).ready(function ($) {
    let videos = $('video')
    videos.each(function (index) {
        $(`
            <div class="mw-speed">
                <div class="mw-speed-btn"><img width="22" height="22" src="${mwspeed.mwspeedimg}/img/speed.png"/></div>
                <div class="mw-speed-list">
                    <div speed="1">1x</div>
                    <div speed="1.5">1.5x</div>
                    <div speed="2">2x</div>
                    <div speed="2.5">2.5x</div>
                    <div speed="3">3x</div>
                </div>
            </div>
        `).insertBefore($(this))

        let speeds = $(this).parent().find('.mw-speed-list div')
        speeds.each(function () {
            $(this).on('click', function () {
                document.getElementsByTagName('video')[index].playbackRate = $(this).attr('speed')
            })
        })
    })
})
