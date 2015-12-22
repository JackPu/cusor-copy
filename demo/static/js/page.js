$(function () {
    var client = new ZeroClipboard($('body .btn-copy'));
    client.on("ready", function (readyEvent) {
        client.on("copy", function (event) {
            var val = $(event.currentTarget).parent().find('p').text();
            var clipboard = event.clipboardData;
            clipboard.setData("text/plain", val);
            console.log(val);
        });
        client.on("aftercopy", function (event) {
            alert('已经复制' + val);
        });
    });

});