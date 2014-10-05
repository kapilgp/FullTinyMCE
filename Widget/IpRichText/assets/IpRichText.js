/**
 * @package ImpressPages
 *
 */
var IpWidget_IpRichText;

(function($){
    "use strict";

    IpWidget_IpRichText = function() {
        this.$widgetObject = null;

        this.init = function($widgetObject, data) {
            var customTinyMceConfig = ipTinyMceConfig();
            customTinyMceConfig.plugins = [
                "advlist autolink lists link image charmap print preview hr anchor pagebreak",
                "searchreplace wordcount visualblocks visualchars code fullscreen",
                "insertdatetime media nonbreaking save table contextmenu directionality",
                "emoticons template paste textcolor"
            ];

            customTinyMceConfig.toolbar1 = "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | link image";
            customTinyMceConfig.toolbar2 = "print preview media | forecolor backcolor emoticons | bullist numlist outdent indent";
            customTinyMceConfig.image_advtab = true;
            //customTinyMceConfig.toolbar = "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image";
            customTinyMceConfig.menubar = true;

            customTinyMceConfig.style_formats_merge = true;

            this.$widgetObject = $widgetObject;
            customTinyMceConfig.setup = function(ed, l) {ed.on('change', function(e) {
                $widgetObject.save({text: $widgetObject.find('.ipsContent').html()});
            })};

            $widgetObject.find('.ipsContent').tinymce(customTinyMceConfig);
        };

        this.onAdd = function () {
            this.$widgetObject.find('.ipsContent').focus();
        }
    };

})(ip.jQuery);


