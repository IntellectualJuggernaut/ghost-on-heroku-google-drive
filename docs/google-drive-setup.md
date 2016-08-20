### Preface
There are two simple choices for setting up a Google Drive account for your blog

1. Use your personal google account for your blog
2. Create a new google account (e.g., storage.my-blog-name@gmail.com)

There are arguments for both, but I would expect the latter to be the more secure choice for most use cases (but what do I know...)


### PLEASE Note

The following (abridged) directions are from [Ghost Google Drive](https://github.com/robincsamuel/ghost-google-drive), by [Robin C Samuel](https://github.com/robincsamuel). I have included it here purely for convenience of the reader.


# Ghost Google Drive
[Google drive storage](https://github.com/robincsamuel/ghost-google-drive) for ghost allows you to store the contents on google drive. I believe its helpful if you are gonna host your ghost app on heroku.  

## Create OAuth credentials

- Login to [google console](https://code.google.com/apis/console)
- Create new project from the top right dropdown  
  ![new project](http://i.imgur.com/h0jzQbw.jpg)
- Select `Drive API` below `Google Apps APIs`  
  ![drive api](http://i.imgur.com/3m52BNX.jpg)
- Click `Enable`  
  ![enable](http://i.imgur.com/zS5p30g.jpg)
- You will be suggested to create credentials. Click `Go to Credentials`  
  ![go to credentials](http://i.imgur.com/B6sgOUb.jpg)
- Select `service account` link  
  ![service account](http://i.imgur.com/cAA1XZE.jpg)
- You will be redirected to `permissions` page. Click `Create service account`  
  ![create](http://i.imgur.com/6xaT4g9.jpg)
- Input necessary data  
  ![input](http://i.imgur.com/vkybjqO.jpg)
- After clicking `Create` button, google will generate a json file with the credentials for you. **Save it and don't lose!** 
