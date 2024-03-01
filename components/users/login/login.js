'use strict';

arikaim.component.onLoaded(function() {
    arikaim.ui.form.addRules("#login_form");  
    arikaim.ui.viewPasswordButton('.view-password','#password');
    
    arikaim.ui.button('#forgotten_button',function() {
        return arikaim.page.loadContent({
            id : 'content_box',
            component: 'current>users.reset-password'
        });
    });
    
    arikaim.ui.form.onSubmit('#login_form',function() {        
        return users.login();
    },function(result) {   
        arikaim.ui.hide('.message');

        if (isEmpty(result.redirect_url) == false) {
            arikaim.loadUrl(result.redirect_url);
        } else {
            callFunction(users.onLogin,result); 
        }           
    },function() {
        if (users.getLoginAttempts() > 0) {          
            arikaim.page.loadContent({
                id : 'captcha_panel',
                component: 'captcha::code',
                replace: true
            });
        }
    });
});