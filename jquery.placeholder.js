;(function($) {
    $.fn.placeholder = function(config) {
      this.each(function() {
        var $input = $(this),
            placeholder = $input.data('placeholder'),
            placeholderColor = $input.data('placeholder-color'),
            defaultColor = $input.css('color');
        
        var options = $.extend({}, {
            color: '#999'
        }, config);
        
        if (placeholderColor) {
            options.color = placeholderColor;
        }
        
        if ($input.val().length === 0) {
            $input.val(placeholder).css('color', options.color);
        }
        
        $input.focus(function() {
            if ($input.val() === placeholder) {
                $input.val('').css('color', defaultColor);
            }
        });
        
        $input.blur(function() {
            if ($input.val().length === 0) {
                $input.val(placeholder).css('color', options.color);
            }
        });
      });
    };
})(jQuery);