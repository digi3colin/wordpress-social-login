/*! WordPress Social Login | (c) 2011-2014 Mohamed Mrassi and contributors. | opensource.org/licenses/MIT */(function(e){e(function(){e(document).on("click","a.wp-social-login-provider",function(){popupurl=e("#wsl_popup_base_url").val();provider=e(this).attr("data-provider");var t=1e3;var n=600;var r=screen.height/2-n/2-50;var i=screen.width/2-t/2;window.open(popupurl+"provider="+provider,"hybridauth_social_sing_on","location=1,status=0,scrollbars=0,height="+n+",width="+t+",top="+r+",left="+i)})})})(jQuery);window.wsl_wordpress_social_login=function(e){jQuery("#loginform").unbind("submit.simplemodal-login");var t="#loginform";if(!jQuery("#loginform").length){if(jQuery("#registerform").length){t="#registerform"}else{var n=jQuery("#wsl_login_form_uri").val();jQuery("body").append('<form id="loginform" method="post" action="'+n+'"></form>');jQuery("#loginform").append('<input type="hidden" id="redirect_to" name="redirect_to" value="'+window.location.href+'">')}}jQuery.each(e,function(e,n){jQuery("#"+e).remove();jQuery(t).append('<input type="hidden" id="'+e+'" name="'+e+'" value="'+n+'">')});if(jQuery("#simplemodal-login-form").length){var r=window.location.href;jQuery("#redirect_to").remove();jQuery(t).append('<input type="hidden" id="redirect_to" name="redirect_to" value="'+r+'">')}jQuery(t).submit()}