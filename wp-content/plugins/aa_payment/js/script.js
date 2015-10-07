/**
 * Define the globals
 */
var SITE_URL = aa_ajax_var.site_url,
	AJAXURL = aa_ajax_var.ajax_url,
	THEME_URI = aa_ajax_var.template_uri,
	IMG_DIR = THEME_URI + '/img/';

var Loaders = {
	bouncingAbsolute: '<div id="loader-absolute" class="labsolut"><div class="preview-area"><div class="spinner-jx"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',
	bouncingStatic  : '<div id="loader-static"><div class="preview-area"><div class="spinner-jx"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div></div></div>',
	infiniteSpinner : '<div class="loader-backdrop"><div class="loader-infinite-spinner"><div class="lt"></div><div class="rt"></div><div class="lb"></div><div class="rb"></div></div></div>',
	svgLoader       : '<img id="svg-loader-process" src="' + THEME_URI + '/svg/loader_svg.svg" width="40" alt="loadersvg"/>'

};

jQuery(document).ready(function($) {

	var processRemoveNotice = function() {
		var container = $('.aa-plugin-notice-container');

		$.each(container, function() {
			var that = $(this),
				buttonTrigger = that.find('button'),
				dataUser = that.attr('data-current-user'),
				dataNotice = that.attr('id'),
				dataNoticeDescriptor = that.attr('data-plugin-notice');

			buttonTrigger.on('click', function(e) {
				$.ajax({
					url       : ajaxurl,
					type      : "POST",
					data      : {
						aa_notice_descriptor: dataNoticeDescriptor,
						aa_data_user        : dataUser,
						aa_data_notice      : dataNotice,
						action              : 'ajx20150506060531'
					},
					//dataType : "html",
					beforeSend: function() {
					},
					success   : function(data) {
						console.log(data);
					},
					error     : function(jqXHR, textStatus, errorThrown) {
						alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
					}
				});

			});

		});

	};
	processRemoveNotice();

	$("#paypal-credentials-submit").on('click', function(e) {
		e.preventDefault();

		var that = $(this),
			thatForm = that.parents('form'),
			email = thatForm.find('#paypal-email'),
			clientId = thatForm.find('#paypal-client-id'),
			secret = thatForm.find('#paypal-secret');

		thatForm.append(Loaders.bouncingAbsolute);

		$.ajax({
			type   : "POST",
			url    : ajaxurl,
			data   : {
				aa_pp_payment: {
					email    : email.val(),
					client_id: clientId.val(),
					secret   : secret.val()
				},
				action       : "ajx20150207050244"
			},
			success: function(data) {
				thatForm.find('.labsolut').remove();
			},
			error  : function(jqXHR, textStatus, errorThrown) {
				alert(jqXHR + " :: " + textStatus + " :: " + errorThrown);
			}
		})
	})


});