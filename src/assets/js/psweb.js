window.apiId = 2223;
window.apiKey = "r5lzz3rjyrc5zrjzr3zrrr5yzzrrccrj8zrzzzlzz5zrzzz3zzyrz8lg3y5jc";

function setTitle(current) {
    if (sessionStorage.getItem("websiteName")) {
        document.title = current + " - " + sessionStorage.getItem("websiteName");
    }
    else {
        psweb4.getConfig("WebsiteName")
            .done((data) => {
                sessionStorage.setItem("websiteName", data);
                document.title = current + " - " + sessionStorage.getItem("websiteName");
            });
    }
}

function setMetaTags(title, description = "", keywords = "", imageurl = "") {
    $("meta[name='og:site_name']").attr("content", sessionStorage.getItem("websiteName"));
    $("meta[name='og:title']").attr("content", title + " - " + sessionStorage.getItem("websiteName"));
    $("meta[name='twitter:title']").attr("content", title + " - " + sessionStorage.getItem("websiteName"));
    $("meta[name='og:url']").attr("content", document.location.href);
    if (description.trim() != "") {
        $("meta[name='description']").attr("content", description);
        $("meta[name='og:description']").attr("content", description);
        $("meta[name='twitter:description']").attr("content", description);
    } 
    if (keywords.trim() != "") {
        $("meta[name='keywords']").attr("content", keywords);
    }
    if (imageurl.trim() != "") {
        $("meta[name='og:image']").attr("content", "https://api.psweb.me/blob/images/" + window.apiKey + "/" + window.apiId + "/png/200x100/" + imageurl);
        $("meta[name='twitter:image']").attr("content", "https://api.psweb.me/blob/images/" + window.apiKey + "/" + window.apiId + "/png/200x100/" + imageurl);
    }
}