$(function () {
    var client = new ZeroClipboard($('.list li a'));
    client.on("ready", function (readyEvent) {
        client.on("copy", function (event) {
            var color = $(event.target).attr('data-color');
            var clipboard = event.clipboardData;
            clipboard.setData("text/plain", color);
        });
        client.on("aftercopy", function (event) {
            OneKit.Loading.show({
                text: '已经复制 ' + event.data["text/plain"]
            });
        });
    });

    $(".js-upload-box").CoreUpload({
        extensions: ['css', 'js'],
        actionToSubmitUpload: "./upload.php",
        enableDrag: true,
        uploadedCallback: function (result) {
            
        }
    });

});