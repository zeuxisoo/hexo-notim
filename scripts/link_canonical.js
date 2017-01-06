function linkCanonical(options, page) {
    var base_url = options.url;

    if (options.url.charAt(options.url.length - 1) !== '/') {
        base_url += '/';
    }

    return base_url + page.canonical_path.replace('index.html', '');
}

hexo.extend.helper.register('link_canonical', linkCanonical);
