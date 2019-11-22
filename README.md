# Notim

A minimalist theme for hexo

### Installation

Clone repo to themes directory

    cd your-blog
    git clone https://github.com/zeuxisoo/hexo-notim.git themes/notim

Create theme config file

    cp themes/notim/_config.yml.example themes/notim/_config.yml

Install the sitemap plugin

    npm install hexo-generator-sitemap --save

Enable theme in blog settings

1. Open the root config file in editor

        vim _config.yml

2. Change the following theme value to `notim`

        theme: notim

Enter to the theme directory, Build assets like css, js and fonts

    cd themes/notim
    npm install
    make assets

Update theme settings like gravatar and menus

    vim themes/notim/_config.yml

### Enable Tags, Categories and Link page

Go to the root

	cd /path/to/your/site/root

Generate `tags`, `categories` and `link` page

    hexo new page "tags"
    hexo new page "categories"
    hexo new page "link"

And edit the related files in source directory (e.g. **categories**)

1. Open the file `categories\index.md`
2. And change to the following content:

	    ---
	    title: Categories
	    layout: categories
	    comments: false
	    ---

### Deploy

Go to the root

	cd /path/to/your/site/root

Install the rsync tools

    npm install hexo-deployer-rsync --save

Edit the root config file

    vim _config.yml

Like

    deploy:
      type: rsync
      host: <host>
      user: <user>
      root: <root>
      port: <port>
      delete: true
      args:
      verbose: true
      ignore_errors: false