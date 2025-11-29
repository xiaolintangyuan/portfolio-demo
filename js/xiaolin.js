const tolol = (elm) => {
    const seconds = (Math.floor(Math.random() * 59) + 2) * 1000;
    setTimeout(function () {
        if ($) {
            $(`#${elm}`).append('<div><small>Author: <a href="https://github.com/xiaolintangyuan" target="_blank">xiaolintangyuan</a> (https://github.com/xiaolintangyuan)</small></div>');
        }
    }, seconds);
}