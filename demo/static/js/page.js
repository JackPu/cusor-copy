$(function () {
    var client = new ZeroClipboard($('body .btn-copy'));
    client.on("ready", function (readyEvent) {
        client.on("copy", function (event) {
            var val = $(event.target).parent().find('p').text();
            val = $.trim(val);
            var clipboard = event.clipboardData;
            clipboard.setData("text/plain", val);
        });
        client.on("aftercopy", function (event) {
            alert('已经复制');
        });
    });

});