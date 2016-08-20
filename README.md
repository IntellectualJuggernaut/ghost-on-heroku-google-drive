# [Ghost](https://github.com/TryGhost/Ghost) on [Heroku](http://heroku.com)

Ghost is a free, open, simple blogging platform. Visit the project's website at <http://ghost.org>, or read the docs on <http://support.ghost.org>.

## Deploying on Heroku

To get your own Ghost blog running on Heroku, click the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/IntellectualJuggernaut/ghost-on-heroku-google-drive)

Fill out the form, and you should be cooking with gas in a few seconds.

### Things you should know

- After deployment, visit the admin area at `YOURAPPNAME.herokuapp.com/ghost` to set up your blog.

- Your blog will be publicly accessible at `YOURAPPNAME.herokuapp.com`.

- To make changes to your Ghost blog (like adding a theme to the `/content` directory, for instance), clone your blog locally using the [Heroku Toolbelt](https://toolbelt.heroku.com/):

  ```sh
  heroku git:clone --app YOURAPPNAME
  ```

### What do I put in the deployment and environment variable fields?

- **App name (required)**. Pick a name for your application. Heroku says this field is optional, but it’s easier if you choose a name here, because you need to specify the URL of your blog in the first config field anyway. You can add a custom domain later if you want, but this is the name of the application you’ll see in your Heroku dashboard.

- **Heroku URL (required)**. Take the name of your Heroku application, and put it into URL form. For example, if you choose `my-ghost-blog` as the app name, the Heroku URL config value needs to be `http://my-ghost-blog.herokuapp.com` (no trailing slash). If you subsequently set up a [custom domain](https://devcenter.heroku.com/articles/custom-domains) for your blog, you’ll need to update your Ghost blog’s `HEROKU_URL` environment variable accordingly.

#### Using with file uploads disabled

Heroku app filesystems [aren’t meant for permanent storage](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem), so file uploads are disabled by default when using this repository to deploy a Ghost blog to Heroku. If you’re using Ghost on Heroku with Google Drive file uploads disabled, you should leave all environment variables beginning with `GD_…` blank.

#### Configuring Google Drive file uploads

To configure Google Drive file storage, setup a [Google Drive service](./docs/google-drive-setup.md) as demonstrated [here](./docs/google-drive-setup.md), and then specify the following details as environment variables on the Heroku deployment page (or add these environment variables to your app after deployment via the Heroku dashboard):

- `GD_PRIVATE_KEY_ID` and `GD_PRIVATE_KEY`: **Required if using Google Drive uploads**. These fields are the key/value pair needed to authenticate with Google Drive. They are `private_key_id` and `private_key` values in the service file when you created your [Google Drive service](./docs/google-drive-setup.md).

- `GD_CLIENT_EMAIL`: **Required if using Google Drive uploads**. This is the email assigned to you by google when creating the service. This is the `client_email` value from your service file when you created your [Google Drive service](./docs/google-drive-setup.md).

- `GD_CLIENT_ID`: **Required if using Google Drive uploads**. The client id of your Google Drive Service. This is the `client_id` from your service file when you created your [Google Drive service](./docs/google-drive-setup.md).

Once your app is up and running with these variables in place, you should be able to upload images via the Ghost interface and they’ll be stored in your Google Drive. :sparkles:


## Updating

After deploying your own Ghost blog, you can update it by running the following commands:
```
heroku git:clone --app YOURAPPNAME && cd YOURAPPNAME
git remote add origin https://github.com/IntellectualJuggernaut/ghost-on-heroku-google-drive
git pull origin master # may trigger a few merge conflicts, depending on how long since last update
git push heroku master
```

This will pull down the code that was deployed to Heroku so you have it locally, attach this repository as a new remote, attempt to pull down the latest version and merge it in, and then push that change back to your Heroku app instance.


## Problems?

If you have problems using your instance of Ghost, you should check the [official documentation](http://support.ghost.org/) or open an issue on [the official issue tracker](https://github.com/TryGhost/Ghost/issues). If you discover an issue with the deployment process provided by *this repository*, then [open an issue here](https://github.com/IntellectualJuggernaut/ghost-on-heroku-google-drive).

## License

Released under the [MIT license](./LICENSE), just like the Ghost project itself.
