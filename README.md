# Notim

A minimalist theme for hexo

## Installation

Clone repo to themes directory

    cd your-blog
    git clone git@github.com:zeuxisoo/hexo-notim.git themes/notim

Enable theme in blog settings

    vim _config.yml

        theme: notim

Update theme settings like gravatar and menus

    vim themes/notim/_config.yml

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
