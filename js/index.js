var mySwiper = new Swiper('.swiper-container', {
	direction: 'vertical'
});

var startScroll, touchStart, touchCurrent;
mySwiper.slides.on('touchstart', function(e) {
	startScroll = this.scrollTop;
	touchStart = e.targetTouches[0].pageY;
}, true);
mySwiper.slides.on('touchmove', function(e) {
	touchCurrent = e.targetTouches[0].pageY;
	var touchesDiff = touchCurrent - touchStart;
	var slide = this;
	var onlyScrolling =
		(slide.scrollHeight > slide.offsetHeight) &&
		(
			(touchesDiff < 0 && startScroll === 0) ||
			(touchesDiff > 0 && startScroll === (slide.scrollHeight - slide.offsetHeight)) ||
			(startScroll > 0 && startScroll < (slide.scrollHeight - slide.offsetHeight))
		);
	if (onlyScrolling) {
		e.stopPropagation();
	}
}, true);
mySwiper.on('slideChangeTransitionEnd', function() {

	(this.activeIndex == (this.slides.length - 1)) ? $('.swiper-arrow').hide(): $('.swiper-arrow').show();

})

option = {

	series: [{
		type: 'pie',
		radius: ['30%', '70%'],
		avoidLabelOverlap: false,
		label: {
			normal: {
				show: false,
				position: 'center'
			}

		},
		labelLine: {
			normal: {
				show: false
			}
		},
		data: [{
			value: 1200,
			name: '基本工资',
			itemStyle: {
				color: '#f45752'
			}
		}, {
			value: 800,
			name: '绩效工资',
			itemStyle: {
				color: '#fc804d'
			}
		}, {
			value: 600,
			name: '五险一金(个人)',
			itemStyle: {
				color: '#ffd262'
			}
		}, {
			value: 335,
			name: '岗位津贴',
			itemStyle: {
				color: '#ffbd29'
			}
		}, {
			value: 148,
			name: '专项奖',
			itemStyle: {
				color: '#da9a0b'
			}
		}, {
			value: 48,
			name: '其他',
			itemStyle: {
				color: '#c82e0d'
			}
		}]
	}]
};
option1 = {
	xAxis: {
		axisLabel: {
			show: true,
			textStyle: {
				color: '#feb336'
			}
		},
		splitLine: {
			show: false,
			//  改变轴线颜色
			lineStyle: {
				// 使用深浅的间隔色
				color: ['#feb336']
			}
		},

		axisLine: {
			lineStyle: {
				color: '#feb336',
				width: 3,
			}
		},
		type: 'category',
		data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
	},
	yAxis: {
		type: 'value',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#feb336'
			}
		},

		axisLine: {
			lineStyle: {
				color: '#feb336',
				width: 2,
			}
		}
	},
	series: [{
		data: [820, 932, 901, 934, 820, 932, 901, 934, 890, 330, 920, 920],
		type: 'line',
		smooth: true
	}]
};
option2 = {
	color: ['#fb8967'],
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [{
		axisLabel: {
			show: true,
			textStyle: {
				color: '#feb336'
			}
		},
		splitLine: {
			show: false,
			//  改变轴线颜色
			lineStyle: {
				// 使用深浅的间隔色
				color: ['#feb336']
			}
		},

		axisLine: {
			lineStyle: {
				color: '#feb336',
				width: 1,
			}
		},
		type: 'category',
		data: ['2016', '2017'],
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#feb336'
			}
		},

		axisLine: {
			lineStyle: {
				color: '#feb336',
				width: 2,
			}
		}
	}],
	series: [{
		type: 'bar',
		barWidth: '60%',
		data: [330, 220]
	}]
};
// 使用刚指定的配置项和数据显示图表。

$('.p1-btn,.swiper-arrow').on('click', function() {
	mySwiper.slideNext();
})

$('.p8-btn').on('click', function() {
	mySwiper.slideTo(0);
})

$('.dialog-close,.ewm-close').on('click', function() {
	$('.mod-dialog').hide();
	$('.dialog-content').hide();
})
$('.i1,.wx-mey,.p6-btn').on('click', function() {
	$('.mod-dialog').show();
	$('.dia-jbgz').show();
})
$('.rzgzh').on('click', function() {
	$('.mod-dialog').show();
	$('.dia-Rewm').show();
})
$('.ygpx').on('click', function() {
	$('.mod-dialog').show();
	$('.dia-Sewm').show();
})

var bg_audio = document.getElementById("bg_audio");
bg_audio.play();
$('.music_icon').addClass('music_animate');
document.addEventListener("WeixinJSBridgeReady", function func() {
	bg_audio.play();
	$('.music_icon').addClass('music_animate');
	$('.music_icon').attr('src', "images/music.png");
}, false);

function music() {
	if (bg_audio.paused) {
		$('.music_icon').addClass('music_animate');
		$('.music_icon').attr('src', "images/music.png");
		bg_audio.play();
	} else {
		$('.music_icon').removeClass('music_animate');
		$('.music_icon').attr('src', "images/nomusic.png");
		bg_audio.pause();
	}
}