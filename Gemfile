name: Build and Deploy Jekyll

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: 3.2
          bundler-cache: true

      - name: Install dependencies
        run: |
          gem install bundler
          bundle config set --local path 'vendor/bundle'       # install gems locally
          bundle config set --local jobs 4                     # speed up installation
          bundle install --jobs 4 --retry 3                    # retry on failure
          bundle lock --update                                 # make sure Git gems are locked

      - name: Build Jekyll site
        run: bundle exec jekyll build --verbose

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v6
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
