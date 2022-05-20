const $1 = document.querySelector.bind(document);
const $$1 = document.querySelectorAll.bind(document);

// Tạm thời

const setting = $$1('.header-function__item');
setting[3].addEventListener('click', function() {
    $1('.header-setting').classList.toggle('active');
});

// Click vào option hiện nút đăng xuất

const optionVip = $1('.more-icon');

optionVip.onclick = function() {
    $1('.signout-wapper').classList.toggle('active');
}

// 1. Render song 
// 2.slider-run
// 3. Play/ Pause / Seek
// 4. CD rorate
// 5. Next/ Previous
// 6. Random
// 7. Next/ Repeat when end
// 8. Active Song
// 9. Scroll active song into view
// 10. Play song when click

const playListSongs = $1('.playlist-song');
const sliderWrap = $1('.slider-wrap');
const sliderItemsAdded = $1('.slider-items__added');
const playBtn = $1('.btn-play');
const audio = $1('#audio');
const player = $1('.player');
const thumbInfo = $1('.player-info__thumb img');
const songCurrentName = $1('.playlist-songs__name .playlist-songs__name-song');
const songCurrentSingle = $1('.playlist-songs__name .playlist-songs__name-singer');
const timeDuration = $1('.end-time');
const timeDurationPlaylist = $$1('.playlist-songs__duration')
const timeUpdate = $1('.start-time');
const nextBtn = $1('.btn-next');
const preBtn = $1('.btn-pre');
const progressUpdate = $1('.progress__track-update')
const progress = $1('.progress')

const app = {
    currentIndex : 0,

    isPlaying : false,

    songs : [
        {
            name: 'Phố Đã Nên Đèn',
            single:'Huyền Tâm Môn',
            path: './assets/songs/song1.mp3',
            img: './assets/img/img-music/img1.jpg',
            album: 'Phố Đã Nên Đèn (single)'
        },
        {
            name: 'Ái Nộ',
            single:'Masew, Khôi Vũ',
            path: './assets/songs/song2.mp3',
            img: './assets/img/img-music/img2.jpg',
            album: 'Ái Nộ (single)'
        },
        {
            name: 'Cưới Thôi',
            single:'Masew, B Ray',
            path: './assets/songs/song3.mp3',
            img: './assets/img/img-music/img3.jpg',
            album: 'Cưới Thôi (single)'
        },
        {
            name: 'Phải chăng em đã yêu',
            single:'Juki San',
            path: './assets/songs/song4.mp3',
            img: './assets/img/img-music/img4.jpg',
            album: 'Phải chăng em đã yêu (single)'
        },
        {
            name: 'Lần Hẹn Hò Đầu Tiên',
            single:'Huyền Tâm Môn',
            path: './assets/songs/song5.mp3',
            img: './assets/img/img-music/img5.jpg',
            album: 'Lần Hẹn Hò Đầu Tiên (single)'
        },
        {
            name: 'Bỏ em vào Balo',
            single:'Tân Trần',
            path: './assets/songs/song6.mp3',
            img: './assets/img/img-music/img6.jpg',
            album: 'Bỏ em vào Balo (single)'
        },
        {
            name: 'Maps',
            single:'Marron 5',
            path: './assets/songs/song7.mp3',
            img: './assets/img/img-music/img7.jpg',
            album: 'Maps (single)'
        },
        {
            name: 'Girls Like You',
            single:'Maroon 5,Cardi B',
            path: './assets/songs/song8.mp3',
            img: './assets/img/img-music/img8.jpg',
            album: 'Girls Like You (single)'
        },
        {
            name: 'Hãy Trao Cho Anh',
            single:'Sơn Tùng MTP',
            path: './assets/songs/song9.mp3',
            img: './assets/img/img-music/img9.jpg',
            album: 'Hãy Trao Cho Anh (single)'
        },
        {
            name: 'Chạy Ngay Đi',
            single:'Sơn Tùng MTP',
            path: './assets/songs/song10.mp3',
            img: './assets/img/img-music/img10.jpg',
            album: 'Chạy Ngay Đi (single)',
        },

    ],

    playlist: [
        {
            img: './assets/img/img-album/img-1.jpg',
            titleAlbum: 'Remix Album',
            singleAlbum: 'Modern Talking',
        },
        {
            img: './assets/img/img-album/img-2.jpg',
            titleAlbum: 'Những Bài Hát Hay Nhất Của LISA',
            singleAlbum: 'Zing MP3',
        },
        {
            img: './assets/img/img-album/img-3.jpg',
            titleAlbum: 'Những Bài Hát Hay Nhất Của Sơn Tùng M-TP',
            singleAlbum: 'Zing MP3',
        },
        {
            img: './assets/img/img-album/img-4.jpg',
            titleAlbum: 'Album Nhạc Quê Hương',
            singleAlbum: 'Anh Khoa',
        },
        {
            img: './assets/img/img-album/img-1.jpg',
            titleAlbum: 'Remix Album',
            singleAlbum: 'Modern Talking',
        },
        {
            img: './assets/img/img-album/img-1.jpg',
            titleAlbum: 'Remix Album',
            singleAlbum: 'Modern Talking',
        },
        {
            img: './assets/img/img-album/img-1.jpg',
            titleAlbum: 'Remix Album',
            singleAlbum: 'Modern Talking',
        },
        {
            img: './assets/img/img-album/img-1.jpg',
            titleAlbum: 'Remix Album',
            singleAlbum: 'Modern Talking',
        },

    ],

    renderInfoSongs: function() {
        const htmls = this.songs.map(function(song, index) {
            return `
                <div class="playlist-songs__items ">
                    <div class="playlist-songs__info">
                        <div class="playlist-songs__thumb">
                            <img src="${song.img}" alt="">
                            <i class="bi bi-play-fill icon-play"></i>
                        </div>
                        <div class="playlist-songs__name">
                            <span class="playlist-songs__name-song">
                                ${song.name}
                            </span>
                            <span class="playlist-songs__name-singer">
                                ${song.single}
                            </span>
                        </div>
                    </div>

                    <div class="playlist-songs__album">
                        <span>${song.album}</span>
                    </div>

                    <div class="playlist-songs__time">
                        <i class="playlist-songs__icon bi bi-heart"></i>
                        <div class="playlist-songs__duration">2:30</div>
                    </div>
                </div>
            `
        })


        playListSongs.innerHTML = htmls.join('');
    },

    renderPlayList: function() {
      const htmls = this.playlist.map(function(song)
      {
          return `
            <div class="slider-items">
                <div class="playlists-show__item">
                    <div class="playlists-show__item-wrap">
                        <div class="playlists-show__menu-play">
                            <!-- <i class="playlist-songs__icon bi bi-heart"></i> -->
                            <i class="playlist-songs__icon bi bi-heart-fill"></i>
                            <div class="menu-play__wrap">
                                <div class="menu-play">
                                    <i class="bi bi-play-fill"></i>
                                </div>
                            </div>
                            <div class="more-icon menu-play__more-icon">
                                <i class="bi bi-three-dots"></i>
                                <div class="pen-repair more-icon__other menu-play__other">Khác</div>
                            </div>
                        </div>

                        <div style="background: url('${song.img}') no-repeat center center / cover" class="img-square playlists-show__item-img">         
                            
                            <div class="playlists-show__item-layout"></div>
                        </div>
                        
                    </div>
                    <div class="playlists-show__info">
                        <div class="playlists-show__info-title">
                            ${song.titleAlbum}
                        </div>
                        <div class="playlists-show__info-soure">
                            ${song.singleAlbum}
                        </div>
                    </div>
                </div>
            </div>`
      })
      sliderWrap.innerHTML = htmls.join('');
    },

    renderItemsNew: function() {
        document.querySelector('.slider-wrap .slider-items:first-child').innerHTML = `
        <div class="slider-items__new">
            <div class="creat-lits">
                <i class="bi bi-plus"></i>
                <span>Tạo playlist mới</span>
            </div>
        </div>`
    },

    defineproperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },

    handleEvent: function() {

        _this = this;

        // click play hiện animate gif và toggle pause
        playBtn.onclick = function() {
            if( _this.isPlaying )
            {
                audio.pause();
            }
            else
            {
                audio.play();
            }
        }

        // Khi audio play
        audio.onplay = function() {
            player.classList.add('playing')
            _this.isPlaying = true;

        }

        // Khi audio dừng
        audio.onpause = function() {
            player.classList.remove('playing')
            _this.isPlaying = false;
        }

        // update thời gian

        audio.ontimeupdate = function() {
            // console.log(audio.currentTime)
            if(audio.duration)
            {
                // console.log(audio.duration)
				
                secondTime = Math.floor((audio.currentTime))
				// update thanh progress

				// progress.value = `${(secondTime / audio.duration) *100}`

				progressUpdate.style.width = `${((secondTime / audio.duration) *100).toFixed(1)}%`
				
				// update start time
				timeUpdate.textContent = `0${app.fancyTimeFormat(secondTime)}`  
				
                
				
            }

        }

        // Khi next Song
        nextBtn.onclick = function() {
            app.nextSong();
            audio.play();
        }

		// Khi pre song
		preBtn.onclick = function() {
			app.preSong();
			audio.play();
		}

		progress.onchange = function(e) {
			const seekTime = e.target.value * audio.duration / 100;
			audio.currentTime = seekTime;

		}

    },

	

    loadCurrentSong: function() {

        thumbInfo.src = this.currentSong.img;
        songCurrentName.textContent = this.currentSong.name;
        songCurrentSingle.textContent = this.currentSong.single;

        audio.src = app.currentSong.path;

        audio.onloadedmetadata = function(){
            if(audio.duration)
            {
                let duration = Math.floor(audio.duration)
                timeDuration.textContent = `0${app.fancyTimeFormat(duration)}`
            }
        };
    },

	fancyTimeFormat: function(duration)
	{   
		// Hours, minutes and seconds
		var hrs = Math.floor(duration / 3600);
		var mins = Math.floor((duration % 3600) / 60);
		var secs = Math.floor(duration % 60);

		// Output like "1:01" or "4:03:59" or "123:03:59"
		var ret = "";

		if (hrs > 0) {
			ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
		}

		ret += "" + mins + ":" + (secs < 10 ? "0" : "");
		ret += "" + secs;
		return ret;
	},

    nextSong: function() {
        this.currentIndex++;
        if( this.currentIndex >= this.songs.length  )
        {
            this.currentIndex = 0;
        }
        this.loadCurrentSong()
    },

	preSong: function() {
		this.currentIndex--;
		if ( this.currentIndex < 0 )
		{
			this.currentIndex = this.songs.length;
		}
        this.loadCurrentSong()
	},

    start: function() {
        // Định nghĩa các thuộc tính cho Object
        this.defineproperties();

        

        // Lắng nghe xử lý các sự kiện
        this.handleEvent();

        // Render thông tin các playlist song
        this.renderInfoSongs();

        // Load bài hát đầu tiên
        this.loadCurrentSong();

        // this.nextSong()
        this.renderPlayList();
        this.renderItemsNew();
    }
}

app.start();



      