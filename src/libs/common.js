export default{
    setAutoSize () {
        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 640) {
          deviceWidth = 640;
        };
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
    },  
    //多行阶段样式（写css会被vue干掉不规则样式，导致ios无效）
    lineClamp (num) {
        return {
            'overflow': 'hidden',
            'text-overflow': 'ellipsis',
            'display': '-webkit-box',
            '-webkit-line-clamp': num,
            '-webkit-box-orient': 'vertical'
        }
    }
}