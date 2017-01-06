# Notim

A minimalist theme for hexo

## Installation

Install the plugin for hexo

    npm install hexo-generator-amp --save
    npm install hexo-generator-sitemap --save

Clone repo to themes directory

    cd your-blog
    git clone git@github.com:zeuxisoo/hexo-notim.git themes/notim

Copy config file

    cp _config.yml.example _config.yml

Build assets like css, js and fonts

    cd themes/notim
    npm install
    make assets

Enable theme in blog settings

    vim _config.yml

        theme: notim

Update theme settings like gravatar and menus

    vim themes/notim/_config.yml

Copy the hexo config and amp template files

    cp -Rf themes/notim/hexo/_config.yml ./_config.yml
    cp -Rf themes/notim/hexo/amp ./amp

## Enable tags page

Create new page named `tags`

    hexo new page tags

Edit `source/tags/index.md` like

    ---
    title: Tags
    layout: tags
    comments: false
    ---

## Enable categories page

Create new page named `categories`

    hexo new page categories

Edit `source/categories/index.md` like

    ---
    title: Categories
    layout: categories
    comments: false
    ---

## Enable links page

Create new page named `links`

    hexo new page links

Edit `source/links/index.md` like

    ---
    title: Links
    layout: links
    comments: false
    ---
