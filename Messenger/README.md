# Messenger
visit [Thunkable](https://community.thunkable.com/t/preview-textme-another-thunkable-instant-messenger/10465) for more information.
To use this project, you will need a Cloudinary Account. [Read here](https://docs.thunkable.com/android/components/storage/cloudinary-db.html), 
how to set everything up. I also recommend using a custom FirebaseDB. Follow 
[this tutorial](https://community.thunkable.com/t/firebase-and-where-to-put-it/713/2) on how to set up a custom FirebaseDB.

## Design Principles
* If it works, it ain't stupid
* KISS (Keep It Simple, Stupid)
* It does not need to be scalable, because it is intended for private use

## Goals
* Create a messenger without server code
* Customization

## Plans
- [x] end-to-end encryption -> encryption (see my [Proof of Concept](https://community.thunkable.com/t/secure-chat-proof-of-concept/18016))
- [ ] More options when sending
- [x] Translations
- [ ] Backup function
- [ ] Group chat
- [ ] Polls with Polldaddy
- [x] Authentification with phone number

## Issues
* The chat partners have to be in-app (without background tasks)
* Cloudinary is really slow at uploading pictures
* The WebViewer has a problem with fullscreen videos (see [this](https://community.thunkable.com/t/webviewer-problem-with-fullscreen-video/3083) post)

## Used Extensions
* [Textbox](https://puravidaapps.com/textbox.php) and [Simple Notification](https://puravidaapps.com/notification.php) by @puravidaapps
* [ImageEditor](https://nmd-apps.jimdo.com/extensions/nmd-extensions/#6) by @NmdOfficial
* [I18n](https://github.com/10MINT/extensions/tree/master/I18n) and custom extension by Me

Thanks to all extension developers!

## Changelog
* 01/01/2018: Release of version 0.1
