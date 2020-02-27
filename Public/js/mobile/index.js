$(document).ready(function() {
	$(".header").css("height", $(window).height());
	var t = $("#token").val(),
		e = $("#timestape").val(),
		i = new Swiper(".swiper-container", {
			loop: !1,
			pagination: {
				el: ".swiper-pagination"
			},
			on: {
				slideChangeTransitionStart: function() {
					var t = this.activeIndex + 1;
					$(".swiper-tab-list").removeClass("on"), $(".swiper-tab-list").removeClass("red-on"), t < 4 ? $(
						"#swiper-tab-list-" + t).addClass("on") : $("#swiper-tab-list-" + t).addClass("red-on")
				}
			}
		});
	$(".swiper-tab-list").click(function() {
		$(".swiper-tab-list").removeClass("on"), $(".swiper-tab-list").removeClass("red-on");
		var t = $(this).data("current") - 1;
		t < 3 ? $(this).addClass("on") : $(this).addClass("red-on"), i[0].slideTo(t, 1e3, !1)
	});
	new Vue({
		el: "#mp_speakers",
		data: {
			items: [],
			guestInfo: []
		},
		mounted: function() {
		},
		methods: {
		}
	}), new Vue({
		el: "#master",
		data: {
			items: [],
			guestInfo: [],
			postData: {
				token: t,
				timestape: e
			},
			piclist: []
		},
		mounted: function() {
			this.getPictuer()
		},
		methods: {
		}
	}), new Vue({
		el: "#park",
		data: {
			items: [],
			guestInfo: []
		},
		mounted: function() {},
		methods: {
		}
	}), new Vue({
		el: "#footer",
		data: {
			items: [],
			guestInfo: []
		},
		mounted: function() {},
		methods: {
			dialog: function() {
				$("#buy-dialog").fadeIn(200)
			},
			dialogOut: function() {
				$("#buy-dialog").fadeOut(100)
			}
		}
	});
	$(".contact-btn").click(function() {
		// window.location.href = ""
	})
});
