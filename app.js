var http = require("http");

// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
    http.get(url, function(res) {
        var data = "";
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on("end", function() {
            callback(data);
        });
    }).on("error", function() {
        callback(null);
    });
}

//������������»�ȡ������ҳ���ݣ���Ϊ��ҳ�����˻��ٽ���һ��301��ת
//var url = "http://1.163.com/client?from=app_webpage";
var url = "http://www.baidu.com";

download(url, function(data) {
    if (data) {
        console.log(data);
    }
    else console.log("error");
});