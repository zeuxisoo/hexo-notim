function simplePaginator(options) {
    var options = options || {};

    var current  = options.current || this.page.current || 0;
    var total    = options.total || this.page.total || 1;
    var base     = options.base || this.page.base || this.config.root || '';
    var format   = options.format || this.config.pagination_dir + '/%d/';
    var prevText = options.prev_text || 'Previous';
    var nextText = options.next_text || 'Next';

    var self = this;
    var link = function(pageNo) {
        return self.url_for(pageNo === 1 ? base : base + format.replace('%d', pageNo));
    }

    var result = [];

    if (current > 1) {
        result.push('<li class="previous"><a href="' + link(current - 1) + '">' + prevText + '</a></li>');
    }else{
        result.push('<li class="previous disabled"><a href="javascript:void(0)">' + prevText + '</a></li>');
    }

    if (current < total) {
        result.push('<li class="next"><a href="' + link(current + 1) + '">' + nextText + '</a></li>');
    }else{
        result.push('<li class="next disabled"><a href="javascript:void(0)">' + nextText + '</a></li>');
    }

    return '<nav><ul class="pager">' + result.join("") + '</ul></nav>';
}

hexo.extend.helper.register('simple_paginator', simplePaginator);
